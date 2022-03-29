# Margin

<p class="vds-text-lead">A collection of utility classes to add spacing between elements.</p>

## Usage

Add one or more of the following classes to any element to create the same vertical and/or horizontal margin that a paragraph usually has.

| Class               | Description                                                                      |
|:--------------------|:---------------------------------------------------------------------------------|
| `.vds-margin`        | Adds top margin, if it is preceded by another element, and always bottom margin. |
| `.vds-margin-top`    | Adds top margin.                                                                 |
| `.vds-margin-bottom` | Adds bottom margin.                                                              |
| `.vds-margin-left`   | Adds left margin.                                                                |
| `.vds-margin-right`  | Adds right margin.                                                               |

```html
<div class="vds-margin"></div>
```

```example
<div class="vds-margin vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
<div class="vds-margin vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## Small margin

Add one of the following classes to add small spacing to block elements.

| Class                     | Description                                                                            |
|:--------------------------|:---------------------------------------------------------------------------------------|
| `.vds-margin-small`        | Adds small top margin, if it is preceded by another element, and always bottom margin. |
| `.vds-margin-small-top`    | Adds small top margin.                                                                 |
| `.vds-margin-small-bottom` | Adds small bottom margin.                                                              |
| `.vds-margin-small-left`   | Adds small left margin.                                                                |
| `.vds-margin-small-right`  | Adds small right margin.                                                               |

```example
<div class="vds-margin-small vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
<div class="vds-margin-small vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## Medium margin

Add one of the following classes to add medium spacing to block elements.

| Class                      | Description                                                                             |
|:---------------------------|:----------------------------------------------------------------------------------------|
| `.vds-margin-medium`        | Adds medium top margin, if it is preceded by another element, and always bottom margin. |
| `.vds-margin-medium-top`    | Adds medium top margin.                                                                 |
| `.vds-margin-medium-bottom` | Adds medium bottom margin.                                                              |
| `.vds-margin-medium-left`   | Adds medium left margin.                                                                |
| `.vds-margin-medium-right`  | Adds medium right margin.                                                               |

```example
<div class="vds-margin-medium vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
<div class="vds-margin-medium vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## Large margin

Add one of the following classes to add large spacing to block elements.

| Class                     | Description                                                                        |
|:--------------------------|:-----------------------------------------------------------------------------------|
| `.vds-margin-large`        | Adds large margin, if it is preceded by another element, and always bottom margin. |
| `.vds-margin-large-top`    | Adds large top margin.                                                             |
| `.vds-margin-large-bottom` | Adds large bottom margin.                                                          |
| `.vds-margin-large-left`   | Adds large left margin.                                                            |
| `.vds-margin-large-right`  | Adds large right margin.                                                           |

```example
<div class="vds-margin-large vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
<div class="vds-margin-large vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## X-Large margin

Add one of the following classes to add very large spacing to block elements.

| Class                      | Description                                                                         |
|:---------------------------|:------------------------------------------------------------------------------------|
| `.vds-margin-xlarge`        | Adds larger margin, if it is preceded by another element, and always bottom margin. |
| `.vds-margin-xlarge-top`    | Adds larger top margin.                                                             |
| `.vds-margin-xlarge-bottom` | Adds larger bottom margin.                                                          |
| `.vds-margin-xlarge-left`   | Adds larger left margin.                                                            |
| `.vds-margin-xlarge-right`  | Adds larger right margin.                                                           |

```example
<div class="vds-margin-xlarge vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
<div class="vds-margin-xlarge vds-card vds-card-default vds-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## Remove margin

Add one of the following classes to remove margin from block elements.

| Class                           | Description                                                |
|:--------------------------------|:-----------------------------------------------------------|
| `.vds-margin-remove`             | Removes all margins.                                       |
| `.vds-margin-remove-top`         | Removes top margin.                                        |
| `.vds-margin-remove-bottom`      | Removes bottom margin.                                     |
| `.vds-margin-remove-left`        | Removes left margin.                                       |
| `.vds-margin-remove-right`       | Removes right margin.                                      |
| `.vds-margin-remove-vertical`    | Removes all vertical margins.                              |
| `.vds-margin-remove-adjacent`    | Removes the top margin of the directly succeeding element. |
| `.vds-margin-remove-first-child` | Removes the top margin of the first child element.         |
| `.vds-margin-remove-last-child`  | Removes the bottom margin of the last child element.       |

```html
<h1 class="vds-margin-remove"></h1>
```

***

### Responsive

Vira Design System provides a number of responsive classes to remove margin. Basically, they work just like the usual margin remove classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| Class                                                        | Description                                   |
|:-------------------------------------------------------------|:----------------------------------------------|
| `.vds-margin-remove-left@s`<br> `.vds-margin-remove-right@s`   | Affects device widths of _640px_ and larger.  |
| `.vds-margin-remove-left@m`<br> `.vds-margin-remove-right@m`   | Affects device widths of _960px_ and larger.  |
| `.vds-margin-remove-left@l`<br> `.vds-margin-remove-right@l`   | Affects device widths of _1200px_ and larger. |
| `.vds-margin-remove-left@xl`<br> `.vds-margin-remove-right@xl` | Affects device widths of _1600px_ and larger. |

***

## Auto margin

Add one of the following classes to set auto margin. This can be useful to center or otherwise align block elements with a fixed width as well as flex elements.

| Class                      | Description                                                                         |
|:---------------------------|:------------------------------------------------------------------------------------|
| `.vds-margin-auto`          | Sets left and right margin to auto, horizontally centering block and flex elements. |
| `.vds-margin-auto-top`      | Sets top margin to auto, pushing block and flex elements to the bottom.             |
| `.vds-margin-auto-bottom`   | Sets bottom margin to auto, pushing block and flex elements to the top.             |
| `.vds-margin-auto-left`     | Sets left margin to auto, pushing block and flex elements to the right.             |
| `.vds-margin-auto-right`    | Sets right margin to auto, pushing block and flex elements to the left              |
| `.vds-margin-auto-vertical` | Sets top and bottom margin to auto, vertically centering only flex elements.        |

```example
<div class="vds-margin vds-margin-auto-left vds-width-1-2@s vds-card vds-card-default vds-card-body vds-text-center">Block element</div>

<div class="vds-flex vds-height-medium vds-background-muted vds-margin vds-text-center">
    <div class="vds-margin-auto vds-margin-auto-vertical vds-width-1-2@s vds-card vds-card-default vds-card-body">Flex item</div>
</div>
```

***

### Responsive

Vira Design System provides a number of responsive margin auto classes. Basically, they work just like the usual margin auto classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| Class                                                                             | Description                                   |
|:----------------------------------------------------------------------------------|:----------------------------------------------|
| `.vds-margin-auto-left@s`<br> `.vds-margin-auto@s`<br> `.vds-margin-auto-right@s`    | Affects device widths of _640px_ and larger.  |
| `.vds-margin-auto-left@m`<br> `.vds-margin-auto@m`<br>   `.vds-margin-auto-right@m`  | Affects device widths of _960px_ and larger.  |
| `.vds-margin-auto-left@l`<br> `.vds-margin-auto@l`<br> `.vds-margin-auto-right@l`    | Affects device widths of _1200px_ and larger. |
| `.vds-margin-auto-left@xl`<br> `.vds-margin-auto@xl`<br> `.vds-margin-auto-right@xl` | Affects device widths of _1600px_ and larger. |

```example
<div class="vds-margin vds-margin-auto-right vds-margin-auto@m vds-width-1-2@s vds-card vds-card-default vds-card-body vds-text-center">Block element</div>
<div class="vds-margin vds-margin-auto vds-margin-auto-left@m vds-width-1-2@s vds-card vds-card-default vds-card-body vds-text-center">Block element</div>
<div class="vds-margin vds-margin-auto-left vds-margin-auto-right@m vds-width-1-2@s vds-card vds-card-default vds-card-body vds-text-center">Block element</div>
```

***

## Dynamic wrapping

To add spacing to stacking elements, for example inline elements that wrap on smaller viewports, just add the `vds-margin` attribute to their parent container. It will automatically add the `.vds-margin-small-top` class to the lower element.

```html
<div vds-margin>
    <button></button>
    <button></button>
</div>
```

```example
<div vds-margin>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default">Button</button>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option         | Value  | Default             | Description                                                                                                |
|----------------|--------|---------------------|------------------------------------------------------------------------------------------------------------|
| `margin `      | String | vds-margin-small-top | This class is added to items that break into the next row, typically to create margin to the previous row. |
| `first-column` | String | vds-first-column     | This class is added to the first element in each row.                                                      |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.margin(element, options);
```
