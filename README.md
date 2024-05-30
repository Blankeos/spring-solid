<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=Primitives&background=tiles&project=spring" alt="Solid Primitives spring">
</p>

# spring-solid

https://github.com/solidjs-community/solid-primitives/assets/38070918/7c4fa01f-7959-4a67-9588-e28448f7f20d

[![turborepo](https://img.shields.io/badge/built%20with-turborepo-cc00ff.svg?style=for-the-badge&logo=turborepo)](https://turborepo.org/)
[![size](https://img.shields.io/bundlephobia/minzip/spring-solid?style=for-the-badge&label=size)](https://bundlephobia.com/package/spring-solid)
[![version](https://img.shields.io/npm/v/spring-solid?style=for-the-badge)](https://www.npmjs.com/package/spring-solid)
[![stage](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolidjs-community%2Fsolid-primitives%2Fmain%2Fassets%2Fbadges%2Fstage-0.json)](https://github.com/solidjs-community/solid-primitives#contribution-process)

A small SolidJS hook to interpolate signal changes with spring physics. Inspired by & directly forked from [`svelte-motion/spring`](https://svelte.dev/docs/svelte-motion#spring) as such, has a very familiar API design.

With this primitive, you can easily animate values that can be interpolated like `number`, `date`, and collections (arrays or nested objects) of those datatypes.

- `createSpring` - Provides a getter and setter for the spring primitive.
- `createDerivedSpring` - Provides only a getter for the spring primitive deriving from an accessor parameter. Similar to the [@solid-primitives/tween](https://github.com/solidjs-community/solid-primitives/tree/main/packages/tween) API.

The following physics options are available:

- `stiffness` (number, default `0.15`) — a value between 0 and 1 where higher means a 'tighter' spring
- `damping` (number, default `0.8`) — a value between 0 and 1 where lower means a 'springier' spring
- `precision` (number, default `0.01`) — determines the threshold at which the spring is considered to have 'settled', where lower means more precise

## Installation

```bash
npm install spring-solid
# or
yarn add spring-solid
# or
pnpm add spring-solid
# or
bun add spring-solid
```

## Quick Start

```ts
// Basic Example
const [progress, setProgress] = createSpring(0);

// Example with options (less sudden movement)
const [radialProgress, setRadialProgress] = createSpring(0, { stiffness: 0.05 });

// Example with collections (e.g. Object or Array).
const [xy, setXY] = createSpring(
  { x: 50, y: 50 },
  { stiffness: 0.08, damping: 0.2, precision: 0.01 },
);

// Example deriving from an existing signal.
const [myNumber, myNumber] = createSignal(20);
const springedValue = createDerivedSpring(myNumber, { stiffness: 0.03 });
```

## Demo

- [CodeSandbox - Basic Example](https://codesandbox.io/p/devbox/ecstatic-borg-k2wqfr)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

> [!NOTE]
> Since [my PR for solid-primitives](github.com/solidjs-community/solid-primitives/pull/629) might not get reviewed, I'm self-releasing this port on my own. Ideally this would become `@solid-primitives/spring`. Hope you like it anyway!
