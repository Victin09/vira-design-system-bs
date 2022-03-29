# Toggle

<p class="vds-text-lead">Hide, switch or change the appearance of different contents through a toggle.</p>

## Usage

To apply this component, just add the `vds-toggle="target: #ID"` attribute to a `<button>` or `<a>` element. You can use any selector with the toggle attribute.

The toggle can be used to add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

```html
<button vds-toggle="target: #my-id" type="button"></button>
<p id="my-id"></p>
```

```example
<div>
    <button class="vds-button vds-button-default" type="button" vds-toggle="target: #toggle-usage">Toggle</button>
    <p id="toggle-usage">What's up?</p>
</div>
```

***

## Multiple items

You can also toggle multiple items at the same time. Just add the `target: SELECTOR` option to the `vds-toggle` attribute and use a selector that applies to all items.

```html
<button type="button" vds-toggle="target: .my-class"></button>
<p class="my-class"></p>
<p class="my-class"></p>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: .toggle">Toggle</button>
<p class="toggle">Hello!</p>
<p class="toggle" hidden>Bazinga!</p>
```

**Note** In this example we added the `hidden` attribute to one of the items, so that only the other item will be shown. The toggle will switch visible states between both elements.

***

## Custom class

If you don't want to toggle the `hidden` attribute, you can also toggle a custom class. Just add the `cls: CLASS` option to the `vds-toggle` attribute. In this example we used the `.vds-card-primary` class to switch between different card styles.

```html
<button type="button" vds-toggle="target: #my-id; cls: vds-card-primary"></button>
<p id="my-id" class="vds-card vds-card-default"></p>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: #toggle-custom; cls: vds-card-primary">Toggle</button>
<div id="toggle-custom" class="vds-card vds-card-default vds-card-body vds-margin-small">Custom class</div>
```

***

## Animations

The Toggle component allows you to add animations to items when toggling between them. Just add one of the `.vds-animation-*` classes from the [Animation component](animation.md) to the animation parameter. The class will be applied to the in as well as the out animation. If you prefer a different out animation, just add another class.

```html
<button type="button" vds-toggle="target: #my-id; animation: vds-animation-fade"></button>
<p id="my-id"></p>
```

```example
<button href="#toggle-animation" class="vds-button vds-button-default" type="button" vds-toggle="target: #toggle-animation; animation: vds-animation-fade">Toggle</button>
<div id="toggle-animation" class="vds-card vds-card-default vds-card-body vds-margin-small">Animation</div>
```

### Multiple animations

You can also apply multiple animations from the [Animation component](animation). That way you can add different in and out animations.

```html
<button type="button" vds-toggle="target: #my-id; animation: vds-animation-slide-left, vds-animation-slide-bottom"></button>
<p id="my-id"></p>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: #toggle-animation-multiple; animation:  vds-animation-slide-left, vds-animation-slide-bottom">Toggle</button>
<div id="toggle-animation-multiple" class="vds-card vds-card-default vds-card-body vds-margin-small">Animation</div>
```

### Queued animations

When toggling multiple items with an animation, you might want to wait until the first animation has run through before animating the second item in. To do so, just add the `queued: true` option to the `vds-toggle` attribute.

```html
<button type="button" vds-toggle="target: .my-class; animation: vds-animation-fade; queued: true"></button>
<p class="my-class"></p>
<p class="my-class"></p>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: .toggle-animation-queued; animation: vds-animation-fade; queued: true; duration: 300">Toggle</button>
<p class="toggle-animation-queued vds-card vds-card-default vds-card-body vds-margin-small">Animation</p>
<p class="toggle-animation-queued vds-card vds-card-primary vds-card-body vds-margin-small" hidden>Animation</p>
```

***

## Modes

A toggle can be triggered in different ways. Just add the `mode` option to the `vds-toggle` attribute and apply one of these values.

| Value          | Description                                                                      |
|:---------------|:---------------------------------------------------------------------------------|
| `hover`        | The toggle will be triggered on hover.                                           |
| `click `       | The toggle will be triggered on click. This is the default value.                |
| `click, hover` | The toggle will be triggered on click and hover.                                 |
| `media`        | The toggling behavior depends on the viewport width. [More information](#media). |


```html
<button type="button" vds-toggle="target: #my-id; mode: hover"></button>
<p id="my-id"></p>
```

```example
<button class="vds-button vds-button-default" type="button" vds-toggle="target: #toggle-hover; mode: hover">hover</button>
<p id="toggle-hover">What's up?</p>
```

### Media

When using the `media` mode, the `media` option with one of possible values has to be added as well. For example, add a number in pixels, e.g. `640`, or a breakpoint, e.g. `@s`, `@m`, `@l` or `@xl`. Without the `target` option, the toggle applies the toggled state to itself. This means it will switch between the different states that are defined in the `cls` option depending on the viewport width that it is displayed on.

```html
<!-- The primary modifier will only be applied on large screens -->

<div class="vds-card vds-card-default" vds-toggle="cls: vds-card-primary; mode: media; media: @l"></div>
```

```example
<div class="vds-card vds-card-default vds-card-body vds-width-medium" vds-toggle="cls: vds-card-primary; mode: media; media: @l">
    Primary on large screens
</div>
```

**Note** The initial toggle state depends on the `cls` option. It is either the first given class in the space separated list or if set to `false`, the `hidden` attribute. If more than one class is given, the other classes are simply being toggled on state change.

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value          | Default | Description                                                                                                                                                                       |
|:------------|:---------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target`    | String         | `false` | CSS selector of the element(s) to toggle.                                                                                                                                         |
| `mode`      | String         | `click` | Comma separated list of trigger behaviour modes. (`hover`, `click`, `media`)                                                                                                      |
| `cls`       | String         | `false` | The class that is being toggled. Defaults to the `hidden` attribute.                                                                                                              |
| `media`     | Number, String | `false` | In media mode, the breakpoint that triggers the toggle - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |
| `animation` | String         | `false` | Space separated names of [animations](animation.md) to use, comma separated for out animation.                                                                                    |
| `duration`  | Number         | `200`   | Animation duration in milliseconds.                                                                                                                                               |
| `queued`    | Boolean        | `true`  | Toggle the targets successively.                                                                                                                                                  |

`target` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span vds-toggle=".my-class"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.toggle(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
|:-------------|:-----------------------------------------------------------------------------------------------|
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

#### Toggle

```js
ViraDesignSystem.toggle(element).toggle();
```

Toggles the Toggle's target.
