# Installation

<p class="vds-text-lead">Learn where to download and how to compile the Vira Design System sources.</p>

## Download

You have the following options to get Vira Design System:

- Download the [latest release](https://github.com/Victin09/vira-design-system/vds/releases/latest) with pre-built JavaScript and CSS.
- Install with [Yarn](https://yarnpkg.com/en/package/vds) to get the pre-built JavaScript, CSS and the Less source files. This is recommended when using Vira Design System for a typical web project: ```yarn add vds```
- Clone the repo to get all source files including build scripts: `git clone git://github.com/Victin09/vira-design-system/vds.git`

The compiled files of all Vira Design System versions are also hosted on the jsDelivr content delivery network via [jsdelivr.com](https://www.jsdelivr.com/package/npm/vds).

```html
<!-- Vira Design System CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vds@[vds-version]/dist/css/vds.min.css" />

<!-- Vira Design System JS -->
<script src="https://cdn.jsdelivr.net/npm/vds@[vds-version]/dist/js/vds.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vds@[vds-version]/dist/js/vds-icons.min.js"></script>
```

**Note** The latest [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) hashes can be obtained through [jsDelivr](https://www.jsdelivr.com/package/npm/vds).

***

## File structure of the source

The GitHub project contains all source files which are compiled into the `dist` folder. [Less](http://lesscss.org) sources are compiled into CSS files, JavaScript sources are bundled and transpiled into ECMAScript 5 and icons are bundled into the icon library.

| Folder   | Description                                             |
|:---------|:--------------------------------------------------------|
| `/src`   | Contains all Less, JavaScript and image sources.        |
| `/dist`  | Contains compiled CSS and JS, updated on every release. |
| `/tests` | Contains HTML test files of all components.             |

***

## Compile from GitHub source

To compile Vira Design System yourself, you can use the included build scripts.

```sh
# Run once to install all dependencies
yarn

# Compile all source files
yarn compile

# Watch files and compile automatically everytime a file changes
yarn watch
```

The compiled `dist` folder now contains additional files which are not checked in by default. The build task will create even more additional files if you have added a [custom Vira Design System theme](less.md#use-included-build-process).

```html
/dist/css

    <!-- Vira Design System's CSS -->
    vds.css
    vds.min.css

    <!-- Vira Design System's core styles, without the default theme -->
    vds-core.css
    vds-core.min.css

    <!-- Vira Design System's CSS in a right-to-left version -->
    vds.rtl.css
    vds.rtl.min.css


/dist/js

    <!-- Vira Design System's JavaScript -->
    vds.js
    vds.min.js

    <!-- Stripped down JavaScript. Core functionality without additional components -->
    vds-core.js
    vds-core.min.js

    <!-- Icon Library -->
    vds-icons.js
    vds-icons.min.js

    <!-- Additional components (e.g. Lightbox), only needed when including vds-core.js -->
    /components
```

To use Vira Design System's CSS and JavaScript, [include the files](introduction.md#html-markup) in your own HTML and then create the markup of the components listed here in the docs.

To compile Vira Design System automatically everytime you change Less or JavaScript files, you can use the included build scripts.

```sh
yarn watch
```

<script>
    fetch('../assets/vds/package.json').then(function (response) {
        response.json().then(({version}) => {
            ViraDesignSystem.util.$$('pre').forEach(function (pre) { 
                pre.innerHTML = pre.innerHTML.replace(/\[vds-version]/g, version);
            });
        });
    });
</script>
