<?php

namespace JobStatus\Listeners;

use Illuminate\Queue\Jobs\Job;
use Illuminate\Support\Facades\Queue;
use JobStatus\Concerns\Trackable;
use JobStatus\Models\JobStatus;
use JobStatus\Tests\fakes\JobFake;

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
        $job = $event->job;

        if($this->validateJob($job) === false) {
            return true;
        }

        $jobStatus = JobStatus::create([
            'job_class' => get_class($job),
            'job_alias' => $job->alias(),
            'percentage' => 0,
            'status' => 'queued',
            'uuid' => null,
            'job_id' => $event->id,
            'connection_name' => $event->connectionName
        ]);

        foreach ($job->tags() as $key => $value) {
            $jobStatus->tags()->create([
                'key' => $key,
                'value' => $value,
            ]);
        }
    }

}
