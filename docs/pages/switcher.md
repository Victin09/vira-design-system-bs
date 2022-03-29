# Switcher

<p class="vds-text-lead">Dynamically transition through different content panes.</p>

## Usage

The Switcher component consists of a number of toggles and their related content items. Add the `vds-switcher` attribute to a list element which contains the toggles. Add the `.vds-switcher` class to the element containing the content items.

By default, the element with the `.vds-switcher` class has to succeed the toggle directly in order for the switcher to function. If you need it to be nested in another element, for example when using a grid, add the `connect: SELECTOR` option to the `vds-switcher` attribute and select the element containing the items for switching.

Typically, the switcher toggles are styled through other components, some of which will be shown here.

```html
<!-- This is the nav containing the toggling elements -->
<ul vds-switcher>
    <li><a href="#"></a></li>
</ul>

<!-- This is the container of the content items -->
<ul class="vds-switcher">
    <li></li>
</ul>
```

In this example we are using the [Subnav component](subnav.md).

```example
<ul class="vds-subnav vds-subnav-pill" vds-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="vds-switcher vds-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>
```

***

## Navigation controls

In some cases you want to switch to another content section from within the active content. This is possible using the `vds-switcher-item` attribute. To target the items, you need to set the attribute to the number of the respective content item.

Setting the attribute to `next` and `previous` will switch to the adjacent items.

```html
<ul class="vds-switcher vds-margin">
    <li><a href="#" vds-switcher-item="0"></a></li>
    <li><a href="#" vds-switcher-item="1"></a></li>
    <li><a href="#" vds-switcher-item="next"></a></li>
    <li><a href="#" vds-switcher-item="previous"></a></li>
</ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>
<ul class="vds-switcher vds-margin">
    <li>Hello! <a href="#" vds-switcher-item="2">Switch to item 3</a></li>
    <li>Hello again! <a href="#" vds-switcher-item="next">Next item</a></li>
    <li>Bazinga! <a href="#" vds-switcher-item="previous">Previous item</a></li>
</ul>
```

***

## Connect multiple containers

It is also possible to connect multiple content containers. Just add the `connect` parameter to the `vds-switcher` attribute and use a selector that applies to all items.

```html
<!-- This is the nav containing the toggling elements -->
<ul vds-switcher="connect: .my-class">...</ul>

<!-- These are the containers of the content items -->
<ul class="vds-switcher my-class">...</ul>

<ul class="vds-switcher my-class">...</ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-switcher="connect: .switcher-container">
    <li><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<h4>Container 1</h4>

<ul class="vds-switcher switcher-container vds-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>

<h4>Container 2</h4>

<ul class="vds-switcher switcher-container vds-margin">
    <li>Hello! The first item.</li>
    <li>Hello again! The second item.</li>
    <li>Bazinga! The third item.</li>
</ul>
```

***

## Animations

You can apply all animations from the [Animation component](animation) to switcher items. To do so, add the `animation` parameter with the relevant class to the `vds-switcher` attribute.

```html
<ul vds-switcher="animation: vds-animation-fade">...</ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-switcher="animation: vds-animation-fade">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="vds-switcher vds-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>
```

***

### Multiple animations

You can also apply multiple animations from the [Animation component](animation). That way you can add different in and out animations.

```html
<ul vds-switcher="animation: vds-animation-slide-left-medium, vds-animation-slide-right-medium">...</ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-switcher="animation: vds-animation-slide-left-medium, vds-animation-slide-right-medium">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="vds-switcher vds-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>
```

***

## Switcher and subnav

The switcher is easily applied to the [Subnav component](subnav).

```html
<!-- This is the subnav containing the toggling elements -->
<ul class="vds-subnav vds-subnav-pill" vds-switcher>...</ul>

<!-- This is the container of the content items -->
<ul class="vds-switcher"></ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="vds-switcher vds-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>
```


***

## Switcher and tab

As an exception to the rule, add the `vds-tab` attribute instead of `vds-switcher` to the tabbed navigation to combine the switcher with the [Tab component](tab).

```html
<!-- This is the subnav containing the toggling elements -->
<ul vds-tab>...</ul>

<!-- This is the container of the content items -->
<ul class="vds-switcher">...</ul>
```

```example
<ul vds-tab>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="vds-switcher vds-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>
```

***

### Vertical tabs

Use the [Grid](grid) and [Width](width) components to display content correctly with a vertical tabbed navigation.

```html
<div vds-grid>
    <div class="vds-width-auto">
        <ul class="vds-tab-left" vds-tab="connect: #my-id">...</ul>
    </div>
    <div class="vds-width-expand">
        <ul id="my-id" class="vds-switcher">...</ul>
    </div>
</div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <div vds-grid>
            <div class="vds-width-auto@m">
                <ul class="vds-tab-left" vds-tab="connect: #component-tab-left; animation: vds-animation-fade">
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
            <div class="vds-width-expand@m">
                <ul id="component-tab-left" class="vds-switcher">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
            </div>
        </div>
    </div>
    <div>
        <div vds-grid>
            <div class="vds-width-auto@m vds-flex-last@m">
                <ul class="vds-tab-right" vds-tab="connect: #component-tab-right; animation: vds-animation-fade">
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
            <div class="vds-width-expand@m">
                <ul id="component-tab-right" class="vds-switcher">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

***

## Switcher and button

The switcher can also be applied to buttons or button groups from the [Button component](button). Just add the switcher attribute to a block around a group of buttons or to the element with the `.vds-button-group` class.

```html
<!-- This is a switcher using a number of buttons -->
<div vds-switcher="toggle: > *">
    <button class="vds-button vds-button-default" type="button"></button>
    <button class="vds-button vds-button-default" type="button"></button>
</div>

<ul class="vds-switcher">...</ul>
```

```example
<div vds-switcher="animation: vds-animation-fade; toggle: > *">
    <button class="vds-button vds-button-default" type="button">Item</button>
    <button class="vds-button vds-button-default" type="button">Item</button>
    <button class="vds-button vds-button-default" type="button">Item</button>
</div>

<ul class="vds-switcher vds-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>
```

**Note** Since this example does not wrap the buttons into list items the clickable elements which trigger the content switching has to be changed by using the `toggle` option.

***

## Switcher and nav

To apply the switcher to the [Nav component](nav), add the `vds-switcher` attribute to the nav `<ul>` element. Use the [Grid](grid) and [Width](width) components to arrange nav and content in a grid layout.

```html
<div vds-grid>
    <div class="vds-width-small">
        <ul class="vds-nav vds-nav-default" vds-switcher="connect: #my-id">...</ul>
    </div>
    <div class="vds-width-expand">
        <ul id="my-id" class="vds-switcher">...</ul>
    </div>
</div>
```

```example
<div vds-grid>
    <div class="vds-width-small@m">

        <ul class="vds-nav vds-nav-default" vds-switcher="connect: #component-nav; animation: vds-animation-fade">
            <li><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="vds-width-expand@m">

        <ul id="component-nav" class="vds-switcher">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
        </ul>

    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value        | Default              | Description                                                                                              |
|:------------|:-------------|:---------------------|:---------------------------------------------------------------------------------------------------------|
| `connect`   | CSS selector | `~.vds-switcher`      | Related items container. By default succeeding elements with class 'vds-switcher'.                        |
| `toggle `   | CSS selector | `> * > :first-child` | Select the clickable elements which trigger content switching.                                           |
| `itemNav `  | CSS selector | `false`              | Related nav container. By default, nav items are found in related items container only.                  |
| `active `   | Number       | `0`                  | Active index on init. Providing a negative number indicates a position starting from the end of the set. |
| `animation` | String       | `false`              | The space separated names of animations to use. Comma separate for animation out.                        |
| `duration`  | Number       | `200`                | The animation duration.                                                                                  |
| `swiping`   | Boolean      | `true`               | Use swiping.                                                                                             |

`connect` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span vds-switcher=".switcher-container"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.switcher(element, options);
```

### Events

The following events will be triggered on the connected items of the elements with this component attached:

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

#### Show

```js
ViraDesignSystem.switcher(element).show(index);
```

Shows the Switcher item with given index.

| Name    | Type                 | Default | Description                           |
|:--------|:---------------------|:--------|:--------------------------------------|
| `index` | String, Number, Node | 0       | Switcher item to show. 0 based index. |
