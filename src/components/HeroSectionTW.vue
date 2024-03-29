<template>
  <div
    class="tw-relative tw-isolate tw-overflow-hidden tw-bg-gray-900 aiden-bg"
  >
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
      class="tw-mx-auto tw-max-w-7xl tw-px-6 tw-pb-24 tw-pt-10 sm:tw-pb-32 lg:tw-flex lg:tw-px-8 lg:tw-py-40"
    >
      <div
        class="tw-mx-auto tw-max-w-2xl tw-flex-shrink-0 lg:tw-mx-0 lg:tw-max-w-xl lg:tw-pt-8"
      >
        <img
          class="tw-h-11"
          src="~/assets/lego logo cropped.png"
          alt="Your Company"
        />
        <div class="tw-mt-24 sm:tw-mt-32 lg:tw-mt-16" v-if="subtitle">
          <a href="#" class="tw-inline-flex tw-space-x-6">
            <span
              class="tw-rounded-full tw-bg-indigo-500/10 tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-leading-6 tw-text-indigo-400 tw-ring-1 tw-ring-inset tw-ring-indigo-500/20"
              >{{ titleLink }}</span
            >
            <span
              class="tw-inline-flex tw-items-center tw-space-x-2 tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-300"
            >
              <span>{{ subtitle }}</span>
              <ChevronDownIcon
                class="tw-h-5 tw-w-5 tw-text-gray-500"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
        <h1
          class="tw-mt-10 tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-6xl"
        >
          {{ title }}
        </h1>
        <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
          {{ caption }}
        </p>
        <div class="tw-mt-10 tw-flex tw-items-center tw-gap-x-6">
          <a
            href="#"
            class="tw-rounded-md tw-bg-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-400"
            >{{ link1 }}</a
          >
          <a
            href="#"
            class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-white"
            >{{ link2 }} <span aria-hidden="true">↓</span></a
          >
        </div>
      </div>
      <div
        class="tw-mx-auto tw-mt-16 tw-flex tw-max-w-2xl sm:tw-mt-24 lg:tw-ml-10 lg:tw-mr-0 lg:tw-mt-0 lg:tw-max-w-none lg:tw-flex-none xl:tw-ml-32"
      >
        <div class="tw-max-w-3xl tw-flex-none sm:tw-max-w-5xl lg:tw-max-w-none">
          <img
            src="src/assets/zetong-li-IWDwSnazKco-unsplash.jpg"
            alt="App screenshot"
            width="2432"
            height="1442"
            class="tw-w-[76rem] tw-rounded-md tw-bg-white/5 tw-shadow-2xl tw-ring-1 tw-ring-white/10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

defineProps<{
  titleLink?: string;
  subtitle?: string;
  title: string;
  caption?: string;
  link1: string;
  link2?: string;
}>();
</script>

<style scoped>
.aiden-bg {
  background-color: #1537cc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>
