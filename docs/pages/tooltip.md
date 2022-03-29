# Tooltip

<p class="vds-text-lead">Easily create a nice looking tooltip.</p>

## Usage

To apply this component, add the `vds-tooltip` attribute to an element. You also need to add the `title: TEXT` option to the attribute, whose value will represent your tooltip's text.

```html
<div vds-tooltip="title: Hello World"></div>
```

If `title` is the only option in the attribute value, you can also use `vds-tooltip="TEXT"`

```html
<div vds-tooltip="Hello World"></div>
```

```example
<button class="vds-button vds-button-default" vds-tooltip="Hello World">Hover</button>
```

***

## Alignment

Add one of the following options to the `vds-tooltip` attribute to adjust the tooltip's alignment.

```html
<button vds-tooltip="title: Hello World; pos: top-left"></button>
```

| Attribute           | Description                             |
|:--------------------|:----------------------------------------|
| `pos: top`          | Aligns the tooltip to the top.          |
| `pos: top-left`     | Aligns the tooltip to the top left.     |
| `pos: top-right`    | Aligns the tooltip to the top right.    |
| `pos: bottom`       | Aligns the tooltip to the bottom.       |
| `pos: bottom-left`  | Aligns the tooltip to the bottom left.  |
| `pos: bottom-right` | Aligns the tooltip to the bottom right. |
| `pos: left`         | Aligns the tooltip to the left.         |
| `pos: right`        | Aligns the tooltip to the right.        |

```example
<p vds-margin>
    <button class="vds-button vds-button-default" vds-tooltip="Hello World">Top</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: top-left">Top Left</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: top-right">Top Right</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: bottom">Bottom</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: bottom-left">Bottom Left</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: bottom-right">Bottom Right</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: left">Left</button>
    <button class="vds-button vds-button-default" vds-tooltip="title: Hello World; pos: right">Right</button>
</p>
```

***

## Delay

If you want the tooltip to appear with a little delay, just add the `delay` option to the `vds-tooltip` attribute with your value in milliseconds.

```html
<div vds-tooltip="title: Hello World; delay: 500"></div>
```

```example
<button class="vds-button vds-button-default" vds-tooltip="title: Hello World; delay: 500">Hover</button>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value  | Default                 | Description                                                                                          |
|:------------|:-------|:------------------------|:-----------------------------------------------------------------------------------------------------|
| `title`     | String | ``                      | Tooltip text.                                                                                        |
| `pos`       | String | `top`                   | Tooltip position.                                                                                    |
| `offset`    | Number | `false`                 | Tooltip offset.                                                                                      |
| `animation` | String | `vds-animation-scale-up` | The space separated names of animations to use. Comma separate for animation out.                    |
| `duration`  | Number | `100`                   | The animation duration.                                                                              |
| `delay`     | Number | `0`                     | The show delay.                                                                                      |
| `cls`       | String | `vds-active`             | The active class.                                                                                    |
| `container` | String | `body`                  | Define a target container via a selector to specify where the tooltip should be appended in the DOM. |

`title` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span vds-tooltip="Hello World"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.tooltip(element, options);
```

### Events

The following events will be triggered on elements, which are injected by this component:

| Name         | Description                                                                                    |
|:-------------|:-----------------------------------------------------------------------------------------------|
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

#### Example

```javascript
ViraDesignSystem.util.on(document, 'show', '.vds-tooltip.vds-active', function() {
  // do something
});
```

### Methods

The following methods are available for the component:

#### Show

```js
ViraDesignSystem.tooltip(element).show();
```

Shows the Tooltip.

#### Hide

```js
ViraDesignSystem.tooltip(element).hide();
```

Hides the Tooltip.
