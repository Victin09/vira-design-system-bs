# Introduction

<p class="vds-text-lead">Get familiar with the basic setup and overview of ViraDesignSystem.</p>

First you need to download ViraDesignSystem. For other packages and links, head to the [installation guide](installation.md) to learn more.

***

## Package contents

The Zip file contains the compiled CSS and JavaScript files, which is everything you need to get started. Later, you might want to [install and compile Vira Design System](installation.md) yourself and also [create your own Vira Design System theme](less.md).

| Folder | Description                                                    |
|:-------|:---------------------------------------------------------------|
| `/css` | Contains the Vira Design System CSS and a right-to-left version.            |
| `/js`  | Contains the Vira Design System JavaScript and the Icon Library JavaScript. |

***

## HTML markup

Add the compiled and minified CSS and JavaScript to the `<head>` element of your HTML5 document. Also include the Vira Design System icon library. For your basic setup, that's it.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/vds.min.css" />
        <script src="js/vds.min.js"></script>
        <script src="js/vds-icons.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

Once you have included Vira Design System into your document, take a look at the available components and create your own markup inside the `<body>` element of your page.

***

## Vira Design System autocomplete for your editor

Using Vira Design System works best if you have a solid code editor. To be even more efficient, we recommend that you install one of the autocomplete plugins for your favorite IDE or code editor. This saves a lot of time, as you won't have to look up and type all Vira Design System classes and markup.

- [Snippets for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Keno.vds-3-snippets)

***

## Browser support

The following table lists the versions that Vira Design System is tested on. "Latest" means that it works just fine on all recent versions of that browser. With many browser moving towards a rolling release strategy, pinning down browser support to a specific version has become a little tricky in recent years. Long story short: Vira Design System will work on pretty much any modern browser.

<div class="vds-child-width-1-3 vds-child-width-expand@s vds-text-center" vds-grid vds-height-match="> * > div">
    <div>
        <div class="vds-flex vds-flex-center vds-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox.svg?sanitize=true" width="50" height="50" alt="Firefox">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="vds-flex vds-flex-center vds-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios.svg?sanitize=true" width="50" height="50" alt="Safari">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="vds-flex vds-flex-center vds-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome.svg?sanitize=true" width="50" height="50" alt="Chrome">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="vds-flex vds-flex-center vds-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge.svg?sanitize=true" width="50" height="50" alt="Edge">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="vds-flex vds-flex-center vds-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera.svg?sanitize=true" width="50" height="50" alt="Opera">
        </div>
        <p>Latest</p>
    </div>
</div>
