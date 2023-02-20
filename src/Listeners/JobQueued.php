<?php

namespace JobStatus\Listeners;

use Illuminate\Queue\Jobs\Job;
use Illuminate\Support\Facades\Queue;
use JobStatus\Enums\Status;
use JobStatus\JobStatusModifier;
use JobStatus\Models\JobBatch;
use JobStatus\Models\JobStatus;

/**
 * Occurs when a job is pushed to an asynchronous queue.
 *
 * Create a new JobStatus and add the tags.
 */
class JobQueued extends BaseListener
{
    /**
     * @param \Illuminate\Queue\Events\JobQueued $event
     * @return void|bool
     */
    public function handle(\Illuminate\Queue\Events\JobQueued $event)
    {
        if ($this->isTrackingEnabled()) {
            $job = $event->job;

            if ($this->validateJob($job) === false) {
                return true;
            }

            if (method_exists($job, 'batch')) {
                $batchModel = ($job->batch() !== null
                    ? JobBatch::firstOrCreate(
                        ['batch_id' => $job->batch()->id],
                        ['name' => $job->batch()->name]
                    )
                    : null);
            } else {
                $batchModel = null;
            }

            $jobStatus = JobStatus::create([
                'class' => get_class($job),
                'alias' => method_exists($job, 'alias') ? $job->alias() : get_class($job),
                'percentage' => 0,
                'queue' => (property_exists($job, 'job') && $job?->job && $job->job?->getQueue())
                    ? $job->job->getQueue()
                    : $job?->queue ?? $job?->queue ?? null,
                'payload' => ((property_exists($job, 'job') && $job?->job && $job->job?->getQueue())
                    ? $job->job?->payload()
                    : null),
                'batch_id' => $batchModel?->id,
                'status' => Status::QUEUED,
                'uuid' => null,
                'job_id' => $event->id,
                'connection_name' => $event->connectionName,
                'is_unprotected' => method_exists($job, 'isUnprotected') ? $job->isUnprotected() : true,
            ]);

            $modifier = JobStatusModifier::forJobStatus($jobStatus);
            $modifier->setStatus(Status::QUEUED);

            foreach ((method_exists($job, 'users') ? $job->users() : []) as $user) {
                $modifier->grantAccessTo($user);
            }

            foreach ((method_exists($job, 'tags') ? $job->tags() : []) as $key => $value) {
                if (is_numeric($key)) {
                    $jobStatus->tags()->create([
                        'is_indexless' => true,
                        'key' => $value,
                        'value' => null,
                    ]);
                } else {
                    $jobStatus->tags()->create([
                        'is_indexless' => false,
                        'key' => $key,
                        'value' => $value,
                    ]);
                }
            }

            if (property_exists($job, 'job') && $job->job instanceof \Illuminate\Contracts\Queue\Job) {
                $this->checkJobUpToDate($modifier, $job->job);
            }
        }
    }
}
