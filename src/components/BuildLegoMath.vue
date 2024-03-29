<template>
  <q-card class="bg-transparent lego-math">
    <q-btn
      @click="mapLegos()"
      class="tw-rounded-md tw-bg-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-400"
      >Build legos</q-btn
    >
    <div class="board" v-auto-animate>
      <!--  <div class="brick b-1x1"></div>
      <div class="brick b-1x2"></div>
      <div class="brick b-1x3"></div>
      <div class="brick b-1x4"></div>
      <div class="brick b-1x5"></div>
      <div class="brick b-1x6"></div>
      <div class="brick b-1x7"></div>
      <div class="brick b-1x8"></div>
      <div class="brick b-1x9"></div>
      <div class="brick b-1x10"></div>
      <div class="brick b-1x11"></div>
      <div class="brick b-1x12"></div>
      <div class="brick b-2x1"></div>
      <div class="brick b-2x2"></div>
      <div class="brick b-2x3"></div>
      <div class="brick b-2x4"></div>
      <div class="brick b-2x5"></div>
      <div class="brick b-2x6"></div>
      <div class="brick b-2x7"></div>
      <div class="brick b-2x8"></div>
      <div class="brick b-2x9"></div>
      <div class="brick b-2x10"></div>
      <div class="brick b-2x11"></div>
      <div class="brick b-2x12"></div>
      <div class="brick b-3x1"></div>
      <div class="brick b-3x2"></div>
      <div class="brick b-3x3"></div>
      <div class="brick b-3x4"></div>
      <div class="brick b-3x5"></div>
      <div class="brick b-3x6"></div>
      <div class="brick b-3x7"></div>
      <div class="brick b-3x8"></div>
      <div class="brick b-3x9"></div>
      <div class="brick b-3x10"></div>
      <div class="brick b-3x11"></div>
      <div class="brick b-3x12"></div>
      <div class="brick b-4x1"></div>
      <div class="brick b-4x2"></div>
      <div class="brick b-4x3"></div>
      <div class="brick b-4x4"></div>
      <div class="brick b-4x5"></div>
      <div class="brick b-4x6"></div>
      <div class="brick b-4x7"></div>
      <div class="brick b-4x8"></div>
      <div class="brick b-4x9"></div>
      <div class="brick b-4x10"></div>
      <div class="brick b-4x11"></div>
      <div class="brick b-4x12"></div>
      <div class="brick b-5x1"></div>
      <div class="brick b-5x2"></div>
      <div class="brick b-5x3"></div>
      <div class="brick b-5x4"></div>
      <div class="brick b-5x5"></div>
      <div class="brick b-5x6"></div>
      <div class="brick b-5x7"></div>
      <div class="brick b-5x8"></div>
      <div class="brick b-5x9"></div>
      <div class="brick b-5x10"></div>
      <div class="brick b-5x11"></div>
      <div class="brick b-5x12"></div>
      <div class="brick b-6x1"></div>
      <div class="brick b-6x2"></div>
      <div class="brick b-6x3"></div>
      <div class="brick b-6x4"></div>
      <div class="brick b-6x5"></div>
      <div class="brick b-6x6"></div>
      <div class="brick b-6x7"></div>
      <div class="brick b-6x8"></div>
      <div class="brick b-6x9"></div>
      <div class="brick b-6x10"></div>
      <div class="brick b-6x11"></div>
      <div class="brick b-6x12"></div>
      <div class="brick b-7x1"></div>
      <div class="brick b-7x2"></div>
      <div class="brick b-7x3"></div>
      <div class="brick b-7x4"></div>
      <div class="brick b-7x5"></div>
      <div class="brick b-7x6"></div>
      <div class="brick b-7x7"></div>
      <div class="brick b-7x8"></div>
      <div class="brick b-7x9"></div>
      <div class="brick b-7x10"></div>
      <div class="brick b-7x11"></div>
      <div class="brick b-7x12"></div>
      <div class="brick b-8x1"></div>
      <div class="brick b-8x2"></div>
      <div class="brick b-8x3"></div>
      <div class="brick b-8x4"></div>
      <div class="brick b-8x5"></div>
      <div class="brick b-8x6"></div>
      <div class="brick b-8x7"></div>
      <div class="brick b-8x8"></div>
      <div class="brick b-8x9"></div>
      <div class="brick b-8x10"></div>
      <div class="brick b-8x11"></div>
      <div class="brick b-8x12"></div>
      <div class="brick b-9x1"></div>
      <div class="brick b-9x2"></div>
      <div class="brick b-9x3"></div>
      <div class="brick b-9x4"></div>
      <div class="brick b-9x5"></div>
      <div class="brick b-9x6"></div>
      <div class="brick b-9x7"></div>
      <div class="brick b-9x8"></div>
      <div class="brick b-9x9"></div>
      <div class="brick b-9x10"></div>
      <div class="brick b-9x11"></div>
      <div class="brick b-9x12"></div>
      <div class="brick b-10x1"></div>
      <div class="brick b-10x2"></div>
      <div class="brick b-10x3"></div>
      <div class="brick b-10x4"></div>
      <div class="brick b-10x5"></div>
      <div class="brick b-10x6"></div>
      <div class="brick b-10x7"></div>
      <div class="brick b-10x8"></div>
      <div class="brick b-10x9"></div>
      <div class="brick b-10x10"></div>
      <div class="brick b-10x11"></div>
      <div class="brick b-10x12"></div>
      <div class="brick b-11x1"></div>
      <div class="brick b-11x2"></div>
      <div class="brick b-11x3"></div>
      <div class="brick b-11x4"></div>
      <div class="brick b-11x5"></div>
      <div class="brick b-11x6"></div>
      <div class="brick b-11x7"></div>
      <div class="brick b-11x8"></div>
      <div class="brick b-11x9"></div>
      <div class="brick b-11x10"></div>
      <div class="brick b-11x11"></div>
      <div class="brick b-11x12"></div>
      <div class="brick b-12x1"></div>
      <div class="brick b-12x2"></div>
      <div class="brick b-12x3"></div>
      <div class="brick b-12x4"></div>
      <div class="brick b-12x5"></div>
      <div class="brick b-12x6"></div>
      <div class="brick b-12x7"></div>
      <div class="brick b-12x8"></div>
      <div class="brick b-12x9"></div>
      <div class="brick b-12x10"></div>
      <div class="brick b-12x11"></div>
      <div class="brick b-12x12"></div>-->
      <div class="brick b-3x7 b red" />
      <div class="brick b-4x6 b-blue" />
      <div class="brick b-4x5 b-green" />

      <div
        v-for="brick in bricks?.splice(0, 12)"
        :key="brick.index"
        :class="[
          'brick',
          'b-' + brick.xValue + 'x' + brick.yValue,
          'b-' + brick.color,
        ]"
        :style="{ '--brick-color': 'var(--brick-' + brick.color + ')' }"
      ></div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ref, computed, onMounted } from 'vue';

interface Brick {
  color: string;
  xValue: number;
  yValue: number;
  index: number;
}

const colors = ['red', 'blue', 'green', 'yellow']; // replace with your colors
const bricks = ref<Brick[]>();
// 1 to 12
const indexes = ref(Array.from({ length: 12 }, (_, index) => index + 1));

onMounted(() => {
  mapLegos();
});

function mapLegos() {
  // randomize indexes
  indexes.value = indexes.value.sort(() => Math.random() - 0.5);
  bricks.value = Array.from({ length: 12 }).map((_, index) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const xValue = Math.floor(Math.random() * 6) + 1;
    const yValue = Math.floor(Math.random() * 6) + 2;
    return { color, xValue, yValue, index: indexes.value[index] };
  });
}
console.log(bricks);
</script>

<style scoped lang="scss">
$brick-peg-size: 15px;
$brick-wall-thickness: 6px;
$brick-square: $brick-peg-size + $brick-wall-thickness * 2;

body * {
  box-sizing: border-box;
}
.board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-pack: end;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.6))
    drop-shadow(0 0 6px rgba(0, 0, 0, 0.5));
}

.is-dragging {
  z-index: 999;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2), 5px 5px 10px rgba(0, 0, 0, 0.5) !important;
}
.brick {
  color: #f63;
  background-color: currentColor;
  padding: $brick-wall-thickness;
  min-width: $brick-square;
  min-height: $brick-square;
  box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.2),
    inset 1px 1px 0 rgba(#fff, 0.2);
  background-image: radial-gradient(
      currentColor $brick-peg-size/2,
      transparent $brick-peg-size/2 + 1px
    ),
    radial-gradient(
      rgba(#fff, 0.6) $brick-peg-size/2,
      transparent $brick-peg-size/2 + 1px
    ),
    radial-gradient(
      rgba(#000, 0.2) $brick-peg-size/2,
      transparent $brick-peg-size/2 + $brick-wall-thickness/2
    ),
    radial-gradient(
      rgba(#000, 0.2) $brick-peg-size/2,
      transparent $brick-peg-size/2 + $brick-wall-thickness/2
    );
  background-size: $brick-square $brick-square;
  background-position: 0px 0px, -0.5px -0.5px, 0px 0px,
    $brick-wall-thickness/2 $brick-wall-thickness/2;
  background-repeat: repeat;
}

$brick-colors: (
  'red': #e53935,
  'pink': #d81b60,
  'purple': #8e24aa,
  'deep-purple': #5e35b1,
  'indigo': #3949ab,
  'blue': #1e88e5,
  'light-blue': #039be5,
  'cyan': #00acc1,
  'teal': #00897b,
  'green': #43a047,
  'light-green': #7cb342,
  'lime': #c0ca33,
  'yellow': #fdd835,
  'amber': #ffb300,
  'orange': #fb8c00,
  'deep-orange': #f4511e,
  'brown': #6d4c41,
  'grey': #757575,
  'blue-grey': #546e7a,
);

:root {
  --brick-red: #e53935;
  --brick-pink: #d81b60;
  --brick-purple: #8e24aa;
  --brick-deep-purple: #5e35b1;
  --brick-indigo: #3949ab;
  --brick-blue: #1e88e5;
  --brick-light-blue: #039be5;
  --brick-cyan: #00acc1;
  --brick-teal: #00897b;
  --brick-green: #43a047;
  --brick-light-green: #7cb342;
  --brick-lime: #c0ca33;
  --brick-yellow: #fdd835;
  --brick-amber: #ffb300;
  --brick-orange: #fb8c00;
  --brick-deep-orange: #f4511e;
  --brick-brown: #6d4c41;
  --brick-grey: #757575;
  --brick-blue-grey: #546e7a;
}

@each $name, $color in $brick-colors {
  .b-#{$name} {
    color: $color;
  }
}

@for $x from 1 through 12 {
  @for $y from 1 through 12 {
    .b-#{$x}x#{$y} {
      width: $brick-peg-size * $x + (($brick-wall-thickness * 2) * $x);
      height: $brick-peg-size * $y + (($brick-wall-thickness * 2) * $y);
    }
  }
}
</style>
