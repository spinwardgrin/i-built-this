<template>
  <div class="tw-relative tw-isolate tw-overflow-hidden">
    <svg
      class="tw-absolute tw-inset-0 tw-z--10 tw-h-full tw-w-full tw-stroke-white/10 [mask-image:tw-radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="tw-overflow-visible tw-fill-gray-800/20">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <div
      class="tw-absolute tw-left-[calc(50%-4rem)] tw-top-10 tw-z--10 tw-transform-gpu tw-blur-3xl sm:tw-left-[calc(50%-18rem)] lg:tw-left-48 lg:tw-top-[calc(50%-30rem)] xl:tw-left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        class="tw-aspect-[1108/632] tw-w-[69.25rem] tw-bg-gradient-to-r tw-from-[#80caff] tw-to-[#4f46e5] tw-opacity-20"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      />
    </div>
    <div
      class="tw-mx-auto tw-max-w-7xl tw-px-6 tw-pb-24 tw-pt-10 sm:tw-pb-40 lg:tw-flex lg:tw-px-8 lg:tw-pt-40"
    >
      <div
        class="tw-mx-auto tw-max-w-2xl tw-flex-shrink-0 lg:tw-mx-0 lg:tw-max-w-xl lg:tw-pt-8"
      >
        <img
          class="tw-h-24 tw-bg-gray-400 tw-rounded-full tw-w-24 tw-ring-4 tw-ring-white/10 tw-shadow-2xl tw-ring-offset-2 tw-ring-offset-gray-9"
          src="../assets/rocket logo transparent.png"
          alt="Your Company"
        />
        <div class="tw-mt-24 sm:tw-mt-32 lg:tw-mt-16">
          <a href="#" class="tw-inline-flex tw-space-x-6">
            <span
              class="tw-rounded-full tw-bg-indigo-500/10 tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-leading-6 tw-text-indigo-400 tw-ring-1 tw-ring-inset tw-ring-indigo-500/20"
              >Latest updates</span
            >
            <span
              class="tw-inline-flex tw-items-center tw-space-x-2 tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-300"
            >
              <span>Just shipped v1.0</span>
              <ChevronRightIcon
                class="tw-h-5 tw-w-5 tw-text-gray-500"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
        <h1
          class="tw-mt-10 tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-6xl"
        >
          Aiden Carter is the coolest
        </h1>
        <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
          He plays basketball, builds robots, and climbs mountains. Like a boss.
        </p>
      </div>

      <div
        v-if="true"
        class="tw-mx-auto tw-mt-16 tw-flex tw-max-w-2xl sm:tw-mt-24 lg:tw-ml-10 lg:tw-mr-0 lg:tw-mt-0 lg:tw-max-w-none lg:tw-flex-none xl:tw-ml-32"
      >
        <div class="tw-max-w-3xl tw-flex-none sm:tw-max-w-5xl lg:tw-max-w-none">
          <img
            src="../assets/jakub-skafiriak-AljDaiCbCVY-unsplash.jpg"
            alt="App screenshot"
            class="tw-w-[76rem] tw-rounded-md tw-bg-white/5 tw-shadow-2xl tw-ring-1 tw-ring-white/10 tw-object-none tw-object-right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
</script>
