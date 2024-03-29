<template>
  <q-card class="multiplication bg-purple flex-center flex">
    <q-card-section class="text-h6 text-center justify-around">
      <q-list>
        <q-item class="flex self-end q-pr-xl" style="justify-content: flex-end">
          {{ columnMethod }}
        </q-item>
        <q-item
          class="flex flex-end justify-content flex-end"
          style="justify-content: flex-end"
        >
          <input
            v-model.number="num1"
            type="number"
            class="input justify-content flex-end"
            placeholder="Enter first number"
          />
        </q-item>
        <q-item>
          <q-item-section side>
            <div class="times text-black">X</div>
          </q-item-section>
          <q-item-section>
            <input
              v-model.number="num2"
              type="number"
              class="input"
              placeholder="Enter second number"
            />
          </q-item-section>
        </q-item>
        <hr />
        <div
          class="result text-white flex q-mr-lg"
          style="justify-content: flex-end"
        >
          {{ result }}
        </div>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const num1 = ref(0);
const num2 = ref(0);

const result = computed(() => num1.value * num2.value);
const columnMethod = computed(() =>
  Math.floor(((num2.value % 10) * (num1.value % 10)) / 10)
);
</script>

<style scoped>
.multiplication {
  display: flex;
  font-family: 'Courier New', monospace;
}

.input {
  text-align: right;
}

.times {
  margin-right: 5px;
}

.result {
  margin-top: 5px;
}
</style>
