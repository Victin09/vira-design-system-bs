# Alert

<p class="vds-text-lead">Display success, warning and error messages.</p>

## Usage

To apply this component, add the `vds-alert` attribute to a block element.

```html
<div vds-alert></div>
```

```example
<div vds-alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## Close button

To create a close button and enable its functionality, add the `.vds-alert-close` class to a `<button>` or `<a>` element inside the alert box. To apply a close icon, add the `vds-close` attribute from the [Close component](close.md).

```html
<div vds-alert>
    <a class="vds-alert-close" vds-close></a>
</div>
```

```example
<div vds-alert>
    <a class="vds-alert-close" vds-close></a>
    <h3>Notice</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

***

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

| Class               | Description                               |
|:--------------------|:------------------------------------------|
| `.vds-alert-primary` | Give the message a prominent styling.     |
| `.vds-alert-success` | Indicates success or a positive message.  |
| `.vds-alert-warning` | Indicates a message containing a warning. |
| `.vds-alert-danger`  | Indicates an important or error message.  |

```example
<div class="vds-alert-primary" vds-alert>
    <a class="vds-alert-close" vds-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>

<div class="vds-alert-success" vds-alert>
    <a class="vds-alert-close" vds-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>

<div class="vds-alert-warning" vds-alert>
    <a class="vds-alert-close" vds-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>

<div class="vds-alert-danger" vds-alert>
    <a class="vds-alert-close" vds-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value           | Default           | Description                                              |
|:------------|:----------------|:------------------|:---------------------------------------------------------|
| `animation` | Boolean, String | `true`            | Fade out or use the [Animation component](animation.md). |
| `duration`  | Number          | `150`             | Animation duration in milliseconds.                      |
| `sel-close` | CSS selector    | `.vds-alert-close` | The close trigger element.                               |

`animation` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span vds-toggle=".my-class"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.alert(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
|:-------------|:-----------------------------------------------------------------------------------------------|
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

#### Close

```js
ViraDesignSystem.alert(element).close();
```

Closes and removes the Alert.
