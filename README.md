# 🌝 Vira Design System CSS

Front-end framework with a built-in dark mode and
full customizability using CSS variables; great
for building dashboards and tools.

> This is the **activly developing** fork of [halfmoon](https://www.gethalfmoon.com),
> Once halfmoon became active. We could merge both.

in active development.

- 🌚 **Dark mode with toggle option.**
- 🛠️ **[Customization](https://www.gethalfmoon.com/docs/customize/) with CSS variables.**
- 📋 **Prefect for dashboard and tools.**
- ♨️ **Optional JavaScript library.**
- 👢 **Bootstrap like classes.**
- 🌐 **Modern but with Cross browser support.**

To learn more, go to [the documentation](https://www.gethalfmoon.com/docs/containers/).

## Quickstart

Looking to quickly add Vira Design System to your project?
Use jsDelivr, a free open source CDN or a Node package manager (npm, pnpm or yarn).

### Using CDN

When you only need to include Vira Design System’s compiled
CSS or JS, you can use jsDelivr.

```html
<!-- Vira Design System CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/vira-design-systemcss@0.0.1/dist/css/vira-design-system.min.css"
  rel="stylesheet"
/>

<!-- Vira Design System JS -->
<script src="https://cdn.jsdelivr.net/npm/vira-design-systemcss@0.0.1/dist/js/vira-design-system.umd.js"></script>
```

**Pleast note**, the JS file should be placed at
the end of the `<body>` tag.

### Using a package manager

```
npm install vira-design-systemcss
# or pnpm add vira-design-systemcss
# or yarn add vira-design-systemcss
```

After installation, the required CSS and JS file
can be imported in the following way as a ES module.

```javascript
// Include CSS file
import 'vira-design-system/dist/css/vira-design-system.min.css';

// Import JS library
import vira-design-system from 'vira-design-system';
```

Or import it as a commonjs(default NodeJs modules)
module.

```javascript
// Include CSS file
require('vira-design-system/dist/css/vira-design-system.min.css');

// Import JS library
const vira-design-system = require('vira-design-system');
```

## Initialization

Please note that manual initialization is required
for some components, that is, after the DOM is loaded, the following method needs to be called:

```javascript
// Call this method after the DOM has been loaded
vira - design - system.onDOMContentLoaded();
```

This initializes all of the components that require
JavaScript, such as dropdowns, custom file inputs,
shortcuts, etc.

In this way, Vira Design System can be used with frameworks
that use the virtual DOM, such as React and Vue.
For instance, in the case of Vue, the
`vira-design-system.onDOMContentLoaded()` method would be
called inside the `mounted()` hook of your
component.

### Using React

If you are using React to call the built-in methods,
such as `vira-design-system.toggleSidebar()`, Don't assign
them directly as event handlers.

```diff
- <button className="btn" type="button" onClick={vira-design-system.toggleSidebar}>
+ <button className="btn" type="button" onClick={() => vira-design-system.toggleSidebar()}>
```

See [React documentation](https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all).

## Contributing

_This is the main branch of the repo, which
contains the latest stable release. For the ongoing
development, see the [develop branch](https://github.com/ksenginew/vira-design-system/tree/develop)._

## License

Vira Design System is licensed under the [MIT](https://github.com/ksenginew/vira-design-system/license) license.

## Copyright

Copyright 2022, Kavindu Santhusa
