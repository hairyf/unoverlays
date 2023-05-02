<p align="center">
<img src="docs/public/circle.svg" style="width:100px;" />
</p>

<h1 align="center">Unified Overlays</h1>

<p align="center">
A create model/dialog/popup library
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@overlays/core">
    <img src="https://img.shields.io/npm/v/@overlays/core.svg">
  </a>
</p>

> [中文](./README_CN.md) | English or see [docs](https://overlays.vercel.app)

Unified Overlays is a unified plugin for building overlays that allows the creation of callback (imperative) methods and the use of Template/JSX (declarative) in Vue Template or React Jsx.

functionality Simplify the create message or dialog andcall your UI as a promise

###### Features

- 💫 Simplify the create message or dialog and call your UI as a promise
- 🧩 Integration and customization of existing component libraries
- 🦾 provide secure type prompts for each constructor
- 🌟 Highly stable with **99.54%** unit test coverage
- ➿ Supports component inheritance of global application context

## Packages

- [@overlays/svelte](https://unoverlays.vercel.app/en/core/svelte/)
- [@overlays/vue](https://unoverlays.vercel.app/en/vue/)
- [@overlays/react](https://unoverlays.vercel.app/en/react/)
- [@overlays/core](https://unoverlays.vercel.app/en/core/functions/constructor.html)

## Devtools

Components created by Unified Overlays support Devtools for their corresponding frameworks (React, Vue).

###### Supported

| React Developer Tools | Vue.js Devtools                 |
| --------------------- | ------------------------------- |
| ✅<sup>(holder)</sup>  | ✅<sup>(holder\|child-app)</sup> |

- `holder` inserts a holder into the corresponding component, making it available in the virtual DOM.
- `child-app` creates a separate application that can be recognized by devtools.

## Why?

Creating Model classes repetitive and time-consuming. When reusing a component that uses a Model class, common fields such as reject, resolve, and visible need to be defined repeatedly. Additionally, controlling the Model process (`clear data` -> `open model` -> `edit data` -> `onConfirm` -> `save data`) can lead to a lot of redundant code, especially for frequently used components like an image selector.

overlays simplifies Modal creation by unifying the redundant processes and state management. It can effectively create imperative components, and can still be used declaratively.

## Install

```
pnpm add @overlays/vue
# Or React
pnpm add @overlays/react
```

## Usage

Use the `useOverlay` Hook provided by overlays to obtain overlays metadata and create overlays components (Vue, React).

```ts
// In your Vue, React overlays component,
// use useOverlay to obtain overlays metadata.
const { visible, resolve, reject } = useOverlay({
  // The duration of the overlays duration prevents
  // the component from being destroyed too early.
  duration: 1000
})
```

Use `defineOverlay|renderOverlay` to convert to a callback (imperative) method.

```ts
const callback = defineOverlay(OverlayComponent)
const result = await callback(props)
```

---

```ts
const result = renderOverlay(OverlayComponent, props)
```

# License

[MIT](LICENSE) Copyright (c) 2019-PRESENT
