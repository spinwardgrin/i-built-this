<template>
  <div class="tw-bg-gray-900 tw-py-24 sm:tw-py-32">
    <div class="tw-relative tw-isolate">
      <div class="tw-mx-auto tw-max-w-7xl sm:tw-px-6 lg:tw-px-8">
        <div
          class="tw-mx-auto tw-flex tw-max-w-2xl tw-flex-col tw-gap-16 tw-bg-white/5 tw-px-6 tw-py-16 tw-ring-1 tw-ring-white/10 sm:tw-rounded-3xl sm:tw-p-8 lg:tw-mx-0 lg:tw-max-w-none lg:tw-flex-row lg:tw-items-center lg:tw-py-20 xl:tw-gap-x-20 xl:tw-px-20"
        >
          <img
            class="tw-h-96 tw-w-full tw-flex-none tw-rounded-2xl tw-object-cover tw-shadow-xl lg:tw-aspect-square lg:tw-h-auto lg:tw-max-w-sm"
            src="../assets/tobias-rademacher-e3ypS23gQyA-unsplash.jpg"
            alt=""
          />
          <div class="tw-w-full tw-flex-auto">
            <h2
              class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl"
            >
              {{ title }}
            </h2>
            <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
              {{ subtitle }}
            </p>
            <ul
              role="list"
              class="tw-mt-10 tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-3 tw-text-base tw-leading-7 tw-text-white sm:tw-grid-cols-2"
            >
              <li
                v-for="benefit in benefits"
                :key="benefit"
                class="tw-flex tw-gap-x-3"
              >
                <CheckCircleIcon
                  class="tw-h-7 tw-w-5 tw-flex-none"
                  aria-hidden="true"
                />
                {{ benefit }}
              </li>
            </ul>
            <div class="tw-mt-10 tw-flex">
              <a
                v-if="link"
                :href="link"
                class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-indigo-400"
                >{{ linkTitle }} <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="tw-absolute tw-inset-x-0 tw--top-16 tw-z--10 tw-flex tw-transform-gpu tw-justify-center tw-overflow-hidden tw-blur-3xl"
        aria-hidden="true"
      >
        <div
          class="tw-aspect-[1318/752] tw-w-[82.375rem] tw-flex-none tw-bg-gradient-to-r tw-from-[#80caff] tw-to-[#4f46e5] tw-opacity-25"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid';

defineProps<{
  title: string;
  subtitle: string;
  benefits: string[];
  link?: string;
  linkTitle?: string;
}>();
</script>
