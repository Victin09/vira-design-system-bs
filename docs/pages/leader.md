# Leader

<p class="vds-text-lead">Create dot leaders for pricing menus or tables of contents.</p>

A leader, also known as a dot leader or a tab leader, is a repeating pattern used to visually connect content across horizontal spaces. It is most commonly used for restaurant menus, between the meals and prices, and for tables of contents, between titles and page numbers.

***

## Usage

To apply this component, add the `vds-leader` attribute to the element on the left. A line of characters, by default dots, will then fill the remaining space between the item and its adjacent element.

```html
<div vds-leader></div>
```

```example
<div class="vds-grid-small" vds-grid>
    <div class="vds-width-expand" vds-leader>Lorem ipsum dolor sit amet</div>
    <div>$20.90</div>
</div>
```

***

## Fill character

To change the dot to any custom character, just add the `fill: STRING` option to the attribute.

```html
<div vds-leader="fill: -"></div>
```

```example
<div class="vds-grid-small" vds-grid>
    <div class="vds-width-expand" vds-leader="fill: -">Lorem ipsum dolor sit amet</div>
    <div>$20.90</div>
</div>
```

**Note** The default fill character can be set through CSS or a Less variable.

```css
.vds-leader-fill-content::before { content: '.'; }
:root { --vds-leader-fill-content: '.'; }
```

```less
@leader-fill-content: '.';
```

***

## Responsive

It's possible to disable the leader for different device widths by applying the `media` option to the attribute and adding the appropriate viewport width. Add a number in pixels, for example `media: 640`, or a breakpoint, for example `media: @m`. The leader will be shown from the specified viewport width and upwards, but not below.

```html
<div vds-leader="media: @m"></div>
```

***

## Component options

The table below lists the available settings of the `vds-leader` attribute. [Learn more](javascript.md#component-configuration)

| Option  | Value          | Default | Description                                                                                                                                                |
|:--------|:---------------|:--------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `fill`  | String         | ``      | Optional fill character.                                                                                                                                   |
| `media` | Number, String | `false` | Condition for the space filling - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.leader(element, options);
```
