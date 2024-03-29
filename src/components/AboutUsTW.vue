<template>
  <div class="tw-bg-gray-900">
    <!-- Background -->
    <div
      class="tw-absolute tw-inset-x-0 tw-top-4 tw-z-10 tw-flex tw-transform-gpu tw-justify-center tw-blur-3xl no-pointer-events tw-overflow-clip"
      aria-hidden="true"
    >
      <div
        class="tw-aspect-[1108/632] tw-w-[69.25rem] tw-flex-none tw-bg-gradient-to-r tw-from-[#80caff] tw-to-[#4f46e5] tw-opacity-25"
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

    <!-- Header section -->
    <div class="tw-px-6 lg:tw-px-8">
      <div class="tw-mx-auto tw-max-w-2xl tw-pt-24 tw-text-center sm:tw-pt-40">
        <h2
          class="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-6xl"
        >
          {{ title }}
        </h2>
        <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
          {{ caption }}
        </p>
      </div>
    </div>

    <!-- Content section -->
    <div class="tw-mx-auto tw-mt-20 tw-max-w-7xl tw-px-6 lg:tw-px-8">
      <div class="tw-mx-auto tw-max-w-2xl lg:tw-mx-0 lg:tw-max-w-none">
        <div
          class="tw-grid tw-max-w-xl tw-grid-cols-1 tw-gap-8 tw-text-base tw-leading-7 tw-text-gray-300 lg:tw-max-w-none lg:tw-grid-cols-2"
        >
          <div v-for="(paragraph, index) in content" :key="index">
            <p :class="{ 'tw-mt-8': Math.floor(index / 2) !== 0 }">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <dl
          class="tw-mt-16 tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-12 sm:tw-mt-20 sm:tw-grid-cols-2 sm:tw-gap-y-16 lg:tw-mt-28 lg:tw-grid-cols-4"
        >
          <div
            v-for="(stat, statIdx) in stats"
            :key="statIdx"
            class="tw-flex tw-flex-col-reverse tw-gap-y-3 tw-border-l tw-border-white/20 tw-pl-6"
          >
            <dt class="tw-text-base tw-leading-7 tw-text-gray-300">
              {{ stat.label }}
            </dt>
            <dd
              class="tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-white"
            >
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Image section -->
    <div
      class="tw-mt-32 sm:tw-mt-40 xl:tw-mx-auto xl:tw-max-w-7xl xl:tw-px-8 tw-pb-12"
    >
      <img
        src="~assets/gabriel-vasiliu-mVJzfw2Zm7Y-unsplash.jpg"
        alt=""
        class="tw-aspect-[9/4] tw-w-full tw-object-cover xl:tw-rounded-3xl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  label: string;
  value: string;
}

defineProps<{
  title: string;
  caption: string;
  content: string[];
  stats: Stat[];
}>();
</script>
