<template>
  <div
    class="tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center"
  >
    <canvas
      className="tw-absolute tw-inset-0 tw-z-0"
      ref="canvasRef"
      id="canvas"
    ></canvas>
    <div class="tw-relative tw-z-10"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { createNoise3D } from 'simplex-noise';
import { useRafFn } from '@vueuse/core';

const props = defineProps<{
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
}>();

const canvasRef = ref<HTMLCanvasElement>();

const WavyBackground = ({
  //children,
  // className,
  // containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 'slow',
  waveOpacity = 0.5,
}: // ...props
{
  //children?: any;
  // className?: string;
  // containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  // [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement;
  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001;
      case 'fast':
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    if (!canvasRef.value) return;
    canvas = canvasRef.value;
    ctx = canvas.getContext('2d');
    if (!ctx) return;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      if (!ctx) return;

      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    '#38bdf8',
    '#818cf8',
    '#c084fc',
    '#e879f9',
    '#22d3ee',
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      if (!ctx) return;

      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let animationId: number;
  const render = () => {
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || 'black';
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    // animationId = requestAnimationFrame(render);
  };

  return {
    canvasRef,
    init,
    render,
  };
};

const { init, render } = WavyBackground({
  // children: 'Hello World',
  // className: 'tw-text-white',
  // containerClassName:
  //   'tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center',
  colors: props.colors,
  waveWidth: props.waveWidth,
  backgroundFill: props.backgroundFill,
  blur: props.blur,
  speed: props.speed,
  waveOpacity: props.waveOpacity,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { pause } = useRafFn(render);

onMounted(() => {
  init();
  // pause();
});
</script>

<style scoped></style>
