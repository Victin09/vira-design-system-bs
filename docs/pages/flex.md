# Flex

<p class="vds-text-lead">Utilize the power of flexbox to create a wide range of layouts.</p>

The Flex component has an essential role in building layouts in ViraDesignSystem. A lot of components, for example the [Grid](grid.md) as well as horizontal navigations, like the [Navbar](navbar.md), [Subnav](subnav.md), [Breadcrumb](breadcrumb.md), [Pagination](pagination.md), [Tab](tab.md) and [Dotnav](dotnav.md) are built with flexbox and can be used together with the utility classes from this component.

***

## Usage

To apply the flexbox layout model, use one of the following classes. By default, all flex items are aligned to the left, as wide as their content and matched in height.

| Class             | Description                                                  |
|:------------------|:-------------------------------------------------------------|
| `.vds-flex`        | Create the flex container and behave like a block element.   |
| `.vds-flex-inline` | Create the flex container and behave like an inline element. |

```html
<div class="vds-flex">
    <div></div>
</div>
```

```example
<div class="vds-flex">
    <div class="vds-card vds-card-default vds-card-body">Item 1</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 2</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 3</div>
</div>
```

***

## Horizontal alignment

These classes define the horizontal alignment of flex items and distribute the space between them. Add one or more of them to the flex container in order to configure the alignments of the flex items. By default, flex items are aligned to the left as does the `.vds-flex-left` class.

| Class              | Description                                                                                        |
|:-------------------|:---------------------------------------------------------------------------------------------------|
| `.vds-flex-left`    | Add this class to align flex items to the left.                                                    |
| `.vds-flex-center`  | Add this class to center flex items along the main axis.                                           |
| `.vds-flex-right`   | Add this class to align flex items to the right.                                                   |
| `.vds-flex-between` | Add this class to distribute items evenly, with equal space between the items along the main axis. |
| `.vds-flex-around`  | Add this class to distribute items evenly with equal space on both sides of each item.             |

```html
<div class="vds-flex vds-flex-center">
    <div></div>
</div>
```

```example
<div class="vds-flex vds-flex-center">
    <div class="vds-card vds-card-default vds-card-body">Item 1</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 2</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 3</div>
</div>
```

***

### Responsive

Vira Design System provides a number of responsive flex classes for horizontal alignment. Basically, they work just like the usual flex alignment classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| Class                                                                                                                  | Description                                        |
|:-----------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| `.vds-flex-left@s`<br> `.vds-flex-center@s`<br> `.vds-flex-right@s`<br> `.vds-flex-between@s`<br> `.vds-flex-around@s`      | Only affects device widths of _640px_ and higher.  |
| `.vds-flex-left@m`<br> `.vds-flex-center@m`<br> `.vds-flex-right@m`<br> `.vds-flex-between@m`<br> `.vds-flex-around@m`      | Only affects device widths of _960px_ and higher.  |
| `.vds-flex-left@l`<br> `.vds-flex-center@l`<br> `.vds-flex-right@l`<br> `.vds-flex-between@l`<br> `.vds-flex-around@l`      | Only affects device widths of _1200px_ and higher. |
| `.vds-flex-left@xl`<br> `.vds-flex-center@xl`<br> `.vds-flex-right@xl`<br> `.vds-flex-between@xl`<br> `.vds-flex-around@xl` | Only affects device widths of _1600px_ and higher. |

```html
<div class="vds-flex vds-flex-center@m vds-flex-right@l">
    <div></div>
</div>
```

```example
<div class="vds-flex vds-flex-center@m vds-flex-right@l">
    <div class="vds-card vds-card-default vds-card-body">Item 1</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 2</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 3</div>
</div>
```

***

## Vertical alignment

These classes define the vertical alignment of flex items. By default, flex items fill the height of their container as does the `.vds-flex-stretch` class.


| Class              | Description                                                             |
|:-------------------|:------------------------------------------------------------------------|
| `.vds-flex-stretch` | Add this class to expand flex items to fill the height of their parent. |
| `.vds-flex-top`     | Add this class to align flex items to the top.                          |
| `.vds-flex-middle`  | Add this class to center flex items along the cross axis.               |
| `.vds-flex-bottom`  | Add this class to align flex items to the bottom.                       |

```html
<div class="vds-flex vds-flex-middle"></div>
```

```example
<div class="vds-flex vds-flex-middle vds-text-center">
    <div class="vds-card vds-card-default vds-card-body">Item 1</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 2<br>...</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 3<br>...<br>...</div>
</div>
```

***

## Direction modifiers

These classes define the axis that flex items are placed on and their direction. By default, items run horizontally from left to right as does the `.vds-flex-row` class.

| Class                     | Description                                               |
|:--------------------------|:----------------------------------------------------------|
| `.vds-flex-row`            | Add this class to lay out flex items as horizontal rows.  |
| `.vds-flex-row-reverse`    | Add this class to lay out flex items from right to left.  |
| `.vds-flex-column`         | Add this class to lay out flex items as vertical columns. |
| `.vds-flex-column-reverse` | Add this class to lay out flex items from bottom to top.  |

```html
<div class="vds-flex vds-flex-column"></div>
```

```example
<div class="vds-flex vds-flex-column vds-width-1-3">
    <div class="vds-card vds-card-default vds-card-body">Item 1</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-top">Item 2</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-top">Item 3</div>
</div>
```

***

## Wrap modifiers

By default, flex items are fit into one line and run from left to right. Add one of these classes to modify the behavior of wrapping flex items.

| Class                   | Description                                                                                       |
|:------------------------|:--------------------------------------------------------------------------------------------------|
| `.vds-flex-wrap`         | Add this class to make flex items wrap into another line when they no longer fit their container. |
| `.vds-flex-wrap-reverse` | Add this class to change the items' direction so that they run from right to left.                |
| `.vds-flex-nowrap`       | Add this class to force the flex items into one line. This is the default behavior.               |

The following classes modify the alignment of wrapping flex items.

| Class                   | Description                                                                                                                |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| `.vds-flex-wrap-stretch` | Add this class, so that item lines stretch to take up the remaining space                                                  |
| `.vds-flex-wrap-between` | Add this class to distribute item lines evenly, with the first row at the top and last row at the bottom of the container. |
| `.vds-flex-wrap-around`  | Add this class to distribute lines evenly with equal space at the top and bottom of each row.                              |
| `.vds-flex-wrap-top`     | Add this class to align multiline flex items to the top.                                                                   |
| `.vds-flex-wrap-middle`  | Add this class to vertically center multirow flex items.                                                                   |
| `.vds-flex-wrap-bottom`  | Add this class to align multiline flex items to the bottom.                                                                |

```html
<div class="vds-flex vds-flex-wrap vds-flex-wrap-around"></div>
```

```example
<div class="vds-flex vds-flex-wrap vds-flex-wrap-around vds-background-muted vds-height-medium">
    <div class="vds-width-1-3 vds-card vds-card-default vds-card-body vds-card-small">Item 1</div>
    <div class="vds-width-1-2 vds-card vds-card-default vds-card-body vds-card-small vds-margin-left">Item 2</div>
    <div class="vds-width-1-3 vds-card vds-card-default vds-card-body vds-card-small">Item 3</div>
    <div class="vds-width-1-3 vds-card vds-card-default vds-card-body vds-card-small vds-margin-left">Item 4</div>
    <div class="vds-width-1-2 vds-card vds-card-default vds-card-body vds-card-small">Item 5</div>
    <div class="vds-width-1-3 vds-card vds-card-default vds-card-body vds-card-small vds-margin-left">Item 6</div>
</div>
```

***

## Item order

By default, flex items are laid out according to the source order. To display a certain item as the first or last one, just add one of these classes.

| Class                                      | Description                                   |
|:-------------------------------------------|:----------------------------------------------|
| `.vds-flex-first`                           | Displays the item as the first one.           |
| `.vds-flex-last`                            | Displays the item as the last one.            |
| `.vds-flex-first@s`<br> `.vds-flex-last@s`   | Affects device widths of _640px_ and higher.  |
| `.vds-flex-first@m`<br> `.vds-flex-last@m`   | Affects device widths of _960px_ and higher.  |
| `.vds-flex-first@l`<br> `.vds-flex-last@l`   | Affects device widths of _1200px_ and higher. |
| `.vds-flex-first@xl`<br> `.vds-flex-last@xl` | Affects device widths of _1600px_ and higher. |

```html
<div class="vds-flex">
  <div></div>
  <div class="vds-flex-first"></div>
</div>
```

```example
<div class="vds-flex">
    <div class="vds-card vds-card-default vds-card-body vds-flex-last vds-margin-left">Item 1</div>
    <div class="vds-card vds-card-default vds-card-body vds-flex-first">Item 2</div>
    <div class="vds-card vds-card-default vds-card-body vds-margin-left">Item 3</div>
</div>
```

***

## Item dimensions

To determine how much space a flex item should take up, add one of the following classes to the item. By default, items determine their size by their content, but are allowed to shrink.

| Class           | Description                                            |
|:----------------|:-------------------------------------------------------|
| `.vds-flex-none` | The box's size is determined by its content.           |
| `.vds-flex-auto` | The space is allocated considering the item's content. |
| `.vds-flex-1`    | The space is allocated solely based on flex.           |

***

## Flex and grid

The Flex component can be combined with a grid from the [Grid component](grid.md).

```example
<div class="vds-flex-middle" vds-grid>
    <div class="vds-width-2-3@m">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <div class="vds-width-1-3@m vds-flex-first">
        <img src="images/light.jpg" width="1800" height="1200" alt="Image">
    </div>
</div>
```
