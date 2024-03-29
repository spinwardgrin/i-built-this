<template>
  <div>
    <div class="tw-mt-10 tw-flex tw-items-center tw-gap-x-6">
      <Transition
        enter-active-class="animated lightSpeedInRight"
        leave-active-class="animated lightSpeedOutLeft"
        style="animation-duration: 2s"
      >
        <div
          v-if="aidensClicker"
          class="tw-text-4xl tw-font-semibold tw-leading-6 tw-text-white"
        >
          Race cars → 🏎️🏎️ <span aria-hidden="true"></span>
        </div>
      </Transition>
    </div>
    <div class="q-pa-xl">
      <pre class="text-white">
  15
x  3
----
  45
</pre
      >
    </div>
    <div>
      <Transition
        enter-active-class="animated lightSpeedInLeft"
        leave-active-class="animated lightSpeedOutRight"
        style="animation-duration: 2s"
      >
        <AsciiCar v-if="aidensClicker" :visible="true" />
      </Transition>
      <q-toggle color="red" v-model="aidensClicker" />
    </div>
    <div>
      <Transition
        enter-active-class="animated lightSpeedInRight"
        leave-active-class="animated lightSpeedOutLeft"
        style="animation-duration: 2s"
      >
        <AsciiCar2 v-if="aidensClicker" :visible="true" />
      </Transition>
    </div>
    <BuildLegoMath />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import AsciiCar from './AsciiCar.vue';
import AsciiCar2 from './AsciiCar2.vue';
import BuildLegoMath from './BuildLegoMath.vue';

const aidensClicker = ref(false);
</script>
