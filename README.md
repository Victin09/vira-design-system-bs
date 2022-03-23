<h1 align="center">Vira Design System</h1>

<p align="center">
A component-and-utility-centric SCSS framework designed for rapid prototyping. Use beautiful pre-built components to bootstrap your next project and utility classes to polish your final design.
<br />
<a href="https://vds-ui.netlify.app/"><strong>Check out the docs »</strong></a>
<br />

## :sparkles: Features

- :art: **Beautiful Components** - Beautifully designed components come right out of the box for rapid prototyping.
- :balloon: **Sass First** - Forget bundling tons of JavaScript with each component. All styles require no JS for interactions/functionality (see Modals, Dropdowns, etc.).
- :rainbow: **Configuration at its Core** - Add additional components, remove utility classes, disable features, etc. Vira Design System takes a generative approach to building your stylesheets.
- :zap: **Lightweight** - A large amount of features with a minimal footprint.
- :iphone: **Responsive** - Fully responsive by design.

## :dart: Supported Browsers

Vira Design System relies on [What CSS to prefix?](http://shouldiprefix.com/) to determine which selectors need prefixes.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 3 versions, ESR                                                                                                                                                                                              | last 3 versions                                                                                                                                                                                               | last 3 versions                                                                                                                                                                                               | last 3 versions                                                                                                                                                                                           | last 3 versions                                                                                                                                                                                                       |

## 📦 Install

#### Npm

```sh
npm install vds-ui
```

#### Yarn

```sh
yarn add vds-ui
```

#### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/vds-ui" />
```

## :hammer: Usage

#### Basic Page

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge;" />
    <link href="https://unpkg.com/vds-ui" type="text/css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1>👋Hello World</h1>
  </body>
</html>
```

#### React

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "vds-ui"; // You can import it here if you want

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
```

#### Vue

```js
import Vue from "vue";
import App from "./App.vue";

import "vds-ui";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

#### Svelte

```js
import App from "./App.svelte";
import "vds-ui";

const app = new App({
  target: document.body,
});

export default app;
```

#### Sass/Scss

```scss
@use "node_modules/vds-ui/src/vds-ext" as * with (
  $config: (
    excludes: (
      ABSOLUTES,
    ),
    opacity: null,
    // Disable default opacity classes
    extend:
      (
        // Add your own
        opacity: (25: 0.25, 50: 0.5, 75: 0.75),
      ),
  )
);
```

## :computer: Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Victin09/Cirrus)

Or clone locally:

```bash
$ git clone git@github.com:Victin09/vira-design-system.git
$ cd cirrus
$ yarn install
$ yarn watch
```

## :crystal_ball: What's Included

- **Base** - base styles.
  - Animations
  - Default
  - Font
  - Grid
  - Layout
  - Media
  - Modifiers
  - Spacing
- **Builds** - build files for `core` and `ext`.
- **Components** - framework components.
  - Avatar
  - Breadcrumb
  - Button
  - Card
  - Code
  - Footer
  - Forms
  - Frames
  - Header
  - Links
  - Lists
  - Modal
  - Pagination
  - Placeholder
  - Progress
  - Table
  - Tabs
  - Tags
  - Tiles
  - Toast
  - Tooltips
- **Internal** - internal APIs, functions, constants, etc.
- **Utils** - utility classes.
  - Absolute
  - Clearfix
  - Display
  - Flex
  - Misc
  - Opacity
  - Overflow
  - Position
  - Round
  - Shadow
  - Z-Index
