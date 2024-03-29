<template>
  <div class="tw-bg-white tw-py-24">
    <div class="tw-mx-auto tw-max-w-7xl sm:tw-px-6 lg:tw-px-8">
      <div
        class="tw-relative tw-isolate tw-overflow-hidden tw-bg-gray-900 tw-px-6 tw-py-20 sm:tw-rounded-3xl sm:tw-px-10 sm:tw-py-24 lg:tw-py-24 xl:tw-px-24"
      >
        <div
          class="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-8 tw-gap-y-16 sm:tw-gap-y-20 lg:tw-mx-0 lg:tw-max-w-none lg:tw-grid-cols-2 lg:tw-items-center lg:tw-gap-y-0"
        >
          <div class="lg:tw-row-start-1 lg:tw-max-w-md">
            <h2
              class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl"
            >
              {{ title }}<br />{{ title2 }}
            </h2>
            <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
              {{ caption }}
            </p>
          </div>
          <div class="tw-row-span-2 tw-items-start tw-h-full">
            <slot />
          </div>
          <div
            class="tw-max-w-xl lg:tw-row-start-2 lg:tw-mt-10 lg:tw-max-w-md lg:tw-border-t lg:tw-border-white/10 lg:tw-pt-10"
          >
            <dl
              class="tw-max-w-xl tw-space-y-8 tw-text-base tw-leading-7 tw-text-gray-300 lg:tw-max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="tw-relative"
              >
                <dt
                  class="tw-ml-9 tw-inline-block tw-font-semibold tw-text-white"
                >
                  <q-icon
                    :name="feature.icon"
                    class="tw-absolute tw-left-1 tw-top-1 tw-h-5 tw-w-5 tw-text-indigo-500"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="tw-inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          class="tw-pointer-events-none tw-absolute tw-left-12 tw-top-1/2 tw-z--10 tw--translate-y-1/2 tw-transform-gpu tw-blur-3xl lg:tw-bottom-[-12rem] lg:tw-top-auto lg:tw-translate-y-0 lg:tw-transform-gpu"
          aria-hidden="true"
        >
          <div
            class="tw-aspect-[1155/678] tw-w-[72.1875rem] tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-25"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  name: string;
  description: string;
  icon: string;
}

defineProps<{
  title: string;
  title2: string;
  caption: string;
  features: Feature[];
}>();
</script>
