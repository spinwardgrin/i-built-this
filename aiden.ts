import { $ } from 'bun';

const name = 'aiden carter';

// echo "Hello, Aiden" to the shell

for (let i = 0; i < 100; i++) {
  // make the letters capitalized one a a time each loop
  const output = name.slice(0, i % 10).toUpperCase() + name.slice(i % 10);

  await $`echo Hello ${output}`;
}
