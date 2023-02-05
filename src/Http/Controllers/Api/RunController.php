<?php

namespace JobStatus\Http\Controllers\Api;

use JobStatus\Http\Requests\Api\Run\RunSearchRequest;
use JobStatus\Models\JobStatus;
use JobStatus\Search\Result\JobRun;

class RunController extends Controller
{

    public function index(RunSearchRequest $request)
    {
        $query = JobStatus::query()
            ->forUsers($this->resolveAuth());

        if($request->has('alias')) {
            $query->whereAlias($request->input('alias'));
        }

        if ($request->has('tags')) {
            $query->whereTags($request->input('tags'));
        }

        return $query->get()->runs();
    }

    public function show(JobStatus $jobStatus)
    {
        if ($jobStatus->uuid) {
            return JobStatus::query()
                ->whereUuid($jobStatus->uuid)
                ->get()
                ->runs()
                ->first();
        }

        return new JobRun($jobStatus);
    }

}
