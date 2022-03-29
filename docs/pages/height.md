# Height

<p class="vds-text-lead">Define the height of elements depending on the viewport or match the heights of different elements.</p>

Vira Design System's Height component offers three options to set heights: using simple fixed height utility classes, depending on the viewport or by matching the heights of different elements.

***

## Usage

Vira Design System provides a number of useful classes to alter an element's height.

| Class                                             | Description                                                                                  |
|:--------------------------------------------------|:---------------------------------------------------------------------------------------------|
| `.vds-height-1-1`                                  | This class applies a height of 100%. This only works if the parent element has a set height. |
| `.vds-height-small `<br> `.vds-height-max-small `   | These classes apply a height or max-height of _150px_.                                       |
| `.vds-height-medium `<br> `.vds-height-max-medium ` | These classes apply a height or max-height of _300px_.                                       |
| `.vds-height-large `<br> `.vds-height-max-large `   | These classes apply a height or max-height of _450px_.                                       |

```html
<div class="vds-height-small"></div>
```

```example
<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <div class="vds-height-small vds-card vds-card-default vds-card-body vds-flex vds-flex-center vds-flex-middle">Small</div>
    </div>
    <div>
        <div class="vds-height-medium vds-card vds-card-default vds-card-body vds-flex vds-flex-center vds-flex-middle">Medium</div>
    </div>
    <div>
        <div class="vds-height-large vds-card vds-card-default vds-card-body vds-flex vds-flex-center vds-flex-middle">Large</div>
    </div>
</div>
```

***

## Viewport height

Add the `vds-height-viewport` attribute to create a container that fills the height of the entire viewport. You can change the height behavior by adding the `offset-top`, `offset-bottom` or `expand` option to the attribute. [Learn more](javascript.md#component-configuration)

| Option          | Value                                | Default | Description                                                                                                                                                                               |
|:----------------|:-------------------------------------|:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `offset-top`    | Boolean                              | `false` | Subtracts the element's top offset from its height.                                                                                                                                       |
| `offset-bottom` | Boolean, Number, Pixel, CSS Selector | `false` | Subtracts the height (true) of the sibling that immediately follows the element, the given percentage (Number), Pixel (px) value from element's own height or the given element's height. |
| `expand`        | Boolean                              | `false` | Expands the element's height to make a short page fill the viewport.                                                                                                                      |
| `min-height`    | Number                               | `0`     | Sets a minimum height. Useful if all children are positioned absolute.                                                                                                                    |

```html
<div vds-height-viewport></div>

<div vds-height-viewport="offset-top: true"></div>

<div vds-height-viewport="offset-bottom: 20"></div>

<div vds-height-viewport="expand: true"></div>

<div vds-height-viewport="min-height: 300"></div>
```

You can view examples in the tests for [Height Viewport](../assets/vds/tests/height-viewport.html) and [Height Expand](../assets/vds/tests/height-expand.html).

***

## Match height

To expand all children of a container to the same height regardless of their content, for example inside a grid, add the `vds-height-match` attribute. You can change the height matching behavior by setting the `target` or `row` option to the attribute. [Learn more](javascript.md#component-configuration)

| Option   | Value   | Default | Description                                                                                                                                                                                                                              |
|:---------|:--------|:--------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target` | String  | `> *`   | Elements that should match.                                                                                                                                                                                                              |
| `row`    | Boolean | `true`  | By default only items in the same row will be matched. For example, once grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports. |

```html
<div vds-height-match>
    <div></div>
    <div></div>
</div>
```

`target` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

```html
<span vds-height-match=".my-class"></span>
```

***

### Match cards

You can also target and match specific elements inside the container, like cards. Just add the `target: SELECTOR` option to the attribute.

```html
<div vds-grid vds-height-match="target: SELECTOR">...</div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid vds-height-match="target: > div > .vds-card">
    <div>
        <div class="vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Lorem Ipsum</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Lorem Ipsum</div>
    </div>
</div>
```

***

### Match all

If your grid wraps into multiple rows, only grid columns within the same row are matched. To match grid columns across all rows, just add the `row: false` option to the attribute.

```html
<div vds-grid vds-height-match="row: false">...</div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid vds-height-match="target: > div > .vds-card; row: false">
    <div class="vds-first-column">
        <div class="vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Lorem Ipsum</div>
    </div>
    <div class="vds-grid-margin vds-first-column">
        <div class="vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div class="vds-grid-margin">
        <div class="vds-card vds-card-default vds-card-body">Lorem Ipsum</div>
    </div>
</div>
```

***

## Component options

The table below lists the available settings of the `vds-height-match` attribute. [Learn more](javascript.md#component-configuration)

| Option   | Value        | Default | Description                                                                                 |
|:---------|:-------------|:--------|:--------------------------------------------------------------------------------------------|
| `target` | CSS selector | `> *`   | Elements that should match. By default, direct children will match.                         |
| `row`    | Boolean      | `true`  | If your targets wrap into multiple rows, only grid columns within the same row are matched. |

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.heightMatch(element, options);
```
