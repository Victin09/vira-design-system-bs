# Off-canvas

<p class="vds-text-lead">Create an off-canvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.</p>

## Usage

To apply this component, add the `vds-offcanvas` attribute to a parent `<div>` element and use the following classes.

| Class                 | Description                                                                                                                          |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| `.vds-offcanvas-bar`   | Add this class to a child `<div>` element.                                                                                           |
| `.vds-offcanvas-close` | Add this class and the `vds-close` attribute to an `<a>` or `<button>` element to create a close button and enable its functionality. |

You can use any element to toggle an off-canvas sidebar. To enable the necessary JavaScript, add the `vds-toggle` attribute. An `<a>` element needs to be linked to the id of the off-canvas container. If you are using another element, like a button, just add the `vds-toggle="target: #ID"` attribute to target the id of the off-canvas container.

```html
<body>

    <!-- This is a button toggling the off-canvas -->
    <button vds-toggle="target: #my-id" type="button"></button>

    <!-- This is an anchor toggling the off-canvas -->
    <a href="#my-id" vds-toggle></a>

    <!-- This is the off-canvas -->
    <div id="my-id" vds-offcanvas>
        <div class="vds-offcanvas-bar">

            <button class="vds-offcanvas-close" type="button" vds-close></button>

        </div>
    </div>

</body>
```

```example
<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #offcanvas-usage">Open</button>

<a href="#offcanvas-usage" vds-toggle>Open</a>

<div id="offcanvas-usage" vds-offcanvas>
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```

***

### Overlay

To add an overlay, blanking out the page, add the `overlay: true` parameter to the `vds-offcanvas` attribute.

```html
<div id="my-id" vds-offcanvas="overlay: true">...</div>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: #offcanvas-overlay">Open</button>

<div id="offcanvas-overlay" vds-offcanvas="overlay: true">
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>


        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```

***

## Flip modifier

Add the `flip: true` parameter to the `vds-offcanvas` attribute to adjust its alignment, so that it slides in from the right.

```html
<div id="my-id" vds-offcanvas="flip: true">...</div>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: #offcanvas-flip">Open</button>

<div id="offcanvas-flip" vds-offcanvas="flip: true; overlay: true">
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```


***

## Animation modes

By default, the off-canvas slides in. But you can actually choose between different animation modes for the off-canvas' entrance. Just add one of the following attributes.

| Parameter      | Description                                                                   |
|:---------------|:------------------------------------------------------------------------------|
| `mode: slide`  | The off-canvas slides out and overlays the content. This is the default mode. |
| `mode: push`   | The off-canvas slides out and pushes the site.                                |
| `mode: reveal` | The off-canvas slides out and reveals its content while pushing the site.     |
| `mode: none`   | The off-canvas appears and overlays the content without an animation.         |

```html
<div id="my-id" vds-offcanvas="mode: push">...</div>
```

```example
<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #offcanvas-slide">Slide</button>

<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #offcanvas-push">Push</button>

<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #offcanvas-reveal">Reveal</button>

<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #offcanvas-none">None</button>

<div id="offcanvas-slide" vds-offcanvas="overlay: true">
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>

<div id="offcanvas-push" vds-offcanvas="mode: push; overlay: true">
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>

<div id="offcanvas-reveal" vds-offcanvas="mode: reveal; overlay: true">
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>

<div id="offcanvas-none" vds-offcanvas="mode: none; overlay: true">
    <div class="vds-offcanvas-bar">

        <button class="vds-offcanvas-close" type="button" vds-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```

***

## Nav in Off-canvas

You can use the [Nav component](nav.md) inside an off-canvas to create a mobile navigation.

```html
<div id="my-id" vds-offcanvas>
    <div class="vds-offcanvas-bar">
        <ul class="vds-nav vds-nav-default">...</ul>
    </div>
</div>
```

```example
<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #offcanvas-nav-primary">Primary Nav</button>

<button class="vds-button vds-button-default" type="button" vds-toggle="target: #offcanvas-nav">Default Nav</button>

<div id="offcanvas-nav-primary" vds-offcanvas="overlay: true">
    <div class="vds-offcanvas-bar vds-flex vds-flex-column">

        <ul class="vds-nav vds-nav-primary vds-nav-center vds-margin-auto-vertical">
            <li class="vds-active"><a href="#">Active</a></li>
            <li class="vds-parent">
                <a href="#">Parent</a>
                <ul class="vds-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li class="vds-nav-header">Header</li>
            <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: thumbnails"></span> Item</a></li>
            <li class="vds-nav-divider"></li>
            <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: trash"></span> Item</a></li>
        </ul>

    </div>
</div>

<div id="offcanvas-nav" vds-offcanvas="overlay: true">
    <div class="vds-offcanvas-bar">

        <ul class="vds-nav vds-nav-default">
            <li class="vds-active"><a href="#">Active</a></li>
            <li class="vds-parent">
                <a href="#">Parent</a>
                <ul class="vds-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li class="vds-nav-header">Header</li>
            <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: thumbnails"></span> Item</a></li>
            <li class="vds-nav-divider"></li>
            <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: trash"></span> Item</a></li>
        </ul>

    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value   | Default | Description                                                                                                                                               |
|:------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mode`      | String  | `slide` | Off-canvas animation mode: `slide`, `reveal`, `push` or `none`.                                                                                           |
| `flip`      | Boolean | `false` | Flip off-canvas to the right side.                                                                                                                        |
| `overlay`   | Boolean | `false` | Display the off-canvas together with an overlay.                                                                                                          |
| `esc-close` | Boolean | `true`  | Close the off-canvas when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`  | Close the off-canvas when the background is clicked.                                                                                                      |
| `container` | String  | `false` | Define a target container via a selector to specify where the off-canvas should be appended in the DOM. Setting it to `false` will prevent this behavior. |

`mode` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span vds-offcanvas="push"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.offcanvas(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                          |
|:-------------|:-----------------------------------------------------|
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

The following methods are available for the component:

#### Show

```js
ViraDesignSystem.offcanvas(element).show();
```

Shows the Offcanvas.

#### Hide

```js
ViraDesignSystem.offcanvas(element).hide();
```

Hides the Offcanvas.
