<?php

namespace JobStatus\Tests\fakes;

use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Queue;
use JobStatus\Trackable;

class JobFake
{
    use Dispatchable, Trackable;

    public function __construct(
        private ?string $alias = null,
        private array $tags = [],
        private ?\Closure $callback = null
    ) {

    }

    public function alias(): ?string
    {
        return $this->alias;
    }

    public function tags(): array
    {
        return $this->tags;
    }

    public function handle()
    {
        if($this->callback === null) {
            return null;
        }
        return app()->call($this->callback, ['job' => $this]);
    }


}
