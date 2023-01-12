<?php

namespace JobStatus\Concerns;

use Illuminate\Queue\InteractsWithQueue;
use JobStatus\JobStatusModifier;
use JobStatus\Models\JobStatus;
use JobStatus\Search\JobStatusSearcher;
use JobStatus\Search\Result\SameJobList;

trait Trackable
{
    use InteractsWithSignals, InteractsWithQueue;

    public ?JobStatus $jobStatus = null;

    public static function search(): JobStatusSearcher
    {
        $search = app(JobStatusSearcher::class)->whereJobClass(static::class);
        return $search;
    }

    public function history(): ?SameJobList
    {
        $search = app(JobStatusSearcher::class)->whereJobClass(static::class);
        foreach($this->tags() as $key => $value) {
            $search->whereTag($key, $value);
        }
        return $search->get()->firstJob();
    }

    public function getJobStatus(): ?JobStatus
    {
        if (!isset($this->jobStatus)) {
            if($this->job?->uuid()) {
                $this->jobStatus = JobStatus::where('uuid', $this->job->uuid())->latest()->orderBy('id', 'DESC')->first();
            } else {
                $this->jobStatus = null;
            }
        }

        return $this->jobStatus;
    }

    public function status(): JobStatusModifier
    {
        return new JobStatusModifier($this->getJobStatus());
    }

    public static function canSeeTracking($user = null, array $tags = []): bool
    {
        return true;
    }

    public static function alias(): ?string
    {
        return null;
    }

    public function tags(): array
    {
        return [];
    }

}
