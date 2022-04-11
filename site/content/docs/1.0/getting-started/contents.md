---
layout: docs
title: Contents
description: Discover what's included in Vira Design System, including our precompiled and source code flavors.
group: getting-started
toc: true
---

## Precompiled Vira Design System

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
vira-design-system/
├── css/
│   ├── vira-design-system-grid.css
│   ├── vira-design-system-grid.css.map
│   ├── vira-design-system-grid.min.css
│   ├── vira-design-system-grid.min.css.map
│   ├── vira-design-system-grid.rtl.css
│   ├── vira-design-system-grid.rtl.css.map
│   ├── vira-design-system-grid.rtl.min.css
│   ├── vira-design-system-grid.rtl.min.css.map
│   ├── vira-design-system-reboot.css
│   ├── vira-design-system-reboot.css.map
│   ├── vira-design-system-reboot.min.css
│   ├── vira-design-system-reboot.min.css.map
│   ├── vira-design-system-reboot.rtl.css
│   ├── vira-design-system-reboot.rtl.css.map
│   ├── vira-design-system-reboot.rtl.min.css
│   ├── vira-design-system-reboot.rtl.min.css.map
│   ├── vira-design-system-utilities.css
│   ├── vira-design-system-utilities.css.map
│   ├── vira-design-system-utilities.min.css
│   ├── vira-design-system-utilities.min.css.map
│   ├── vira-design-system-utilities.rtl.css
│   ├── vira-design-system-utilities.rtl.css.map
│   ├── vira-design-system-utilities.rtl.min.css
│   ├── vira-design-system-utilities.rtl.min.css.map
│   ├── vira-design-system.css
│   ├── vira-design-system.css.map
│   ├── vira-design-system.min.css
│   ├── vira-design-system.min.css.map
│   ├── vira-design-system.rtl.css
│   ├── vira-design-system.rtl.css.map
│   ├── vira-design-system.rtl.min.css
│   └── vira-design-system.rtl.min.css.map
└── js/
    ├── vira-design-system.bundle.js
    ├── vira-design-system.bundle.js.map
    ├── vira-design-system.bundle.min.js
    ├── vira-design-system.bundle.min.js.map
    ├── vira-design-system.esm.js
    ├── vira-design-system.esm.js.map
    ├── vira-design-system.esm.min.js
    ├── vira-design-system.esm.min.js.map
    ├── vira-design-system.js
    ├── vira-design-system.js.map
    ├── vira-design-system.min.js
    └── vira-design-system.min.js.map
```

This is the most basic form of Vira Design System: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`vira-design-system.*`), as well as compiled and minified CSS and JS (`vira-design-system.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`vira-design-system.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`vira-design-system.bundle.js` and minified `vira-design-system.bundle.min.js`) include [Popper](https://popper.js.org/).

## CSS files

Vira Design System includes a handful of options for including some or all of our compiled CSS.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `vira-design-system.css`<br> `vira-design-system.min.css`<br> `vira-design-system.rtl.css`<br> `vira-design-system.rtl.min.css` | Included | Included | Included | Included |
| `vira-design-system-grid.css`<br> `vira-design-system-grid.rtl.css`<br> `vira-design-system-grid.min.css`<br> `vira-design-system-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `vira-design-system-utilities.css`<br> `vira-design-system-utilities.rtl.css`<br> `vira-design-system-utilities.min.css`<br> `vira-design-system-utilities.rtl.min.css` | — | — | — | Included |
| `vira-design-system-reboot.css`<br> `vira-design-system-reboot.rtl.css`<br> `vira-design-system-reboot.min.css`<br> `vira-design-system-reboot.rtl.min.css` | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
{{< /bs-table >}}

## JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| JS Files | Popper |
| --- | --- |
| `vira-design-system.bundle.js`<br> `vira-design-system.bundle.min.js`<br> | Included |
| `vira-design-system.js`<br> `vira-design-system.min.js`<br> | – |
{{< /bs-table >}}

## Vira Design System source code

The Vira Design System source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
vira-design-system/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of Vira Design System usage. Beyond that, any other included file provides support for packages, license information, and development.
