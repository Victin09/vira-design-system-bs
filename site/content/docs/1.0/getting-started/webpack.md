---
layout: docs
title: Webpack and bundlers
description: Learn how to include Vira Design System in your project using Webpack or other bundlers.
group: getting-started
toc: true
---

## Installing Vira Design System

Install as a Node.js module using npm.

## Importing JavaScript

Import [Vira Design System's JavaScript]({{< docsref "/getting-started/javascript" >}}) by adding this line to your app's entry point (usually `index.js` or `app.js`):

```js
import 'vira-design-system';

// or get all of the named exports for further usage
import * as viraDesignSystem from 'vira-design-system';
```

Alternatively, if you only need just a few of our plugins, you may **import plugins individually** as needed:

```js
import Alert from 'vira-design-system/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'vira-design-system';
```

Vira Design System depends on [Popper](https://popper.js.org/), which is specified in the `peerDependencies` property.
This means that you will have to make sure to add it to your `package.json` using `npm install @popperjs/core`.

## Importing Styles

### Importing Precompiled Sass

To enjoy the full potential of Vira Design System and customize it to your needs, use the source files as a part of your project's bundling process.

First, create your own `_custom.scss` and use it to override the [built-in custom variables]({{< docsref "/customize/sass" >}}). Then, use your main Sass file to import your custom variables, followed by Vira Design System:

```scss
@import "custom";
@import "~vira-design-system/scss/vira-design-system";
```

For Vira Design System to compile, make sure you install and use the required loaders: [sass-loader](https://github.com/webpack-contrib/sass-loader), [postcss-loader](https://github.com/webpack-contrib/postcss-loader) with [Autoprefixer](https://github.com/postcss/autoprefixer#webpack). With minimal setup, your webpack config should include this rule or similar:

```js
// ...
{
  test: /\.(scss)$/,
  use: [{
    // inject CSS to page
    loader: 'style-loader'
  }, {
    // translates CSS into CommonJS modules
    loader: 'css-loader'
  }, {
    // Run postcss actions
    loader: 'postcss-loader',
    options: {
      // `postcssOptions` is needed for postcss 8.x;
      // if you use postcss 7.x skip the key
      postcssOptions: {
        // postcss plugins, can be exported to postcss.config.js
        plugins: function () {
          return [
            require('autoprefixer')
          ];
        }
      }
    }
  }, {
    // compiles Sass to CSS
    loader: 'sass-loader'
  }]
}
// ...
```

### Importing Compiled CSS

Alternatively, you may use Vira Design System's ready-to-use CSS by simply adding this line to your project's entry point:

```js
import 'vira-design-system/dist/css/vira-design-system.min.css';
```

In this case you may use your existing rule for `css` without any special modifications to webpack config, except you don't need `sass-loader` just [style-loader](https://github.com/webpack-contrib/style-loader) and [css-loader](https://github.com/webpack-contrib/css-loader).

```js
// ...
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
// ...
```
