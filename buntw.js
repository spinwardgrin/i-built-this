// bun ./buntw ./src/components/HeroAppScreenshot.vue

import { $ } from 'bun';

const args = process.argv.slice(2);
// read in a file in the first argument
const fileContents = await $`cat ${args[0]}`.text();
const pseudoClasses = [
  'hover',
  'focus',
  'active',
  'visited',
  'link',
  'disabled',
  'checked',
  'first',
  'last',
  'odd',
  'even',
  'focus-visible',
  'focus-within',
];

function splitUsingPsuedoClasses(className) {
  const result = fileContents.replace(
    /\bclass="([^"]*)"/g,
    function (match, group) {
      const classes = group
        .split(' ')
        .map((className) => {
          const parts = className.split(':');
          if (parts.length > 1 && pseudoClasses.includes(parts[0])) {
            return parts[0] + ':tw-' + parts[1];
          } else {
            return 'tw-' + className;
          }
        })
        .join(' ');
      return `class="${classes}"`;
    }
  );

  return result;
}

function addTWToAllClassesAfterColon() {
  const result = fileContents.replace(
    /\bclass="([^"]*)"/g,
    function (match, group) {
      const classes = group
        .split(' ')
        .map((className) => {
          if (className.startsWith('-z-'))
            return 'tw-' + className.replace('-z-', 'z--'); // change -z-10 to z--10
          if (className.includes(':')) {
            const parts = className.split(':');
            return parts[0] + ':' + 'tw-' + parts[1];
          } else {
            return 'tw-' + className;
          }
        })
        .join(' ');
      return `class="${classes}"`;
    }
  );

  return result;
}

const result = addTWToAllClassesAfterColon();
// write the file to stdout
// write the file to the same file with a TW before the extension
const filename = args[0].replace(/(\.[^/.]+)+$/, '');
await $`echo ${result} > ${filename}TW.vue`;

await $`echo ${result}`;
// to stdout:
await $`echo ${args.join(' ')}`;
