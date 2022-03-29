# Right-to-left support

<p class="vds-text-lead">Vira Design System supports right-to-left languages and allows you to switch the orientation of all design elements.</p>

The RTL version switches the orientation of Vira Design System design elements, including properties such as floats, text-align, position coordinates, direction of background shadows and more. However, all classes that are explicitly named `*-left` or `*-right` stay the same in the RTL version.

***

## Usage

To use Vira Design System in RTL mode, use `vds.rtl.min.css` which is included in the `dist/` folder. Make sure to add the `dir="rtl"` attribute to the `<html>` tag of your website. The JavaScript supports RTL by default, so you can include the regular JS files without changing anything.

```html
<!DOCTYPE html>
<html dir="rtl">
    <head>
        <title></title>
        <link rel="stylesheet" href="css/vds.rtl.min.css" />
        <script src="js/vds.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

Take a look at the available components and just create markup as usual. There is no difference when working with the RTL version.

***

## Compile from source

If you [set up Vira Design System from GitHub source](installation.md#compile-from-github-source), you can also compile the RTL version of Vira Design System yourself. This will include any [custom Vira Design System theme](less.md) you have created in the `custom/` directory.

```sh
yarn
yarn compile-rtl
```

The resulting files are now located in the `dist/` folder and end with `*.rtl.css`. The JavaScript files stay the same as with the default LTR version.
