# Width

<p class="vds-text-lead">Define the width of elements for different viewport sizes.</p>

Vira Design System's Width component is often used in combination with [grids](grid.md) to split content into responsive columns. You can apply fractions, automatic width or expand units to fill the remaining space and combine these modes.

***

## Usage

Add one of the `.vds-width-*` classes to an element to determine its size. Typically, you would use a grid from the [Grid component](grid.md) and its child elements to create the units.

| Class                              | Description                                           |
|:-----------------------------------|:------------------------------------------------------|
| `.vds-width-1-1`                    | Fills 100% of the available width.                    |
| `.vds-width-1-2`                    | The element takes up halves of its parent container.  |
| `.vds-width-1-3` to `.vds-width-2-3` | The element takes up thirds of its parent container.  |
| `.vds-width-1-4` to `.vds-width-3-4` | The element takes up fourths of its parent container. |
| `.vds-width-1-5` to `.vds-width-4-5` | The element takes up fifths of its parent container.  |
| `.vds-width-1-6` to `.vds-width-5-6` | The element takes up sixths of its parent container.  |

**Note** We remove redundancy into each set of unit classes, so that for instance instead of .vds-width-3-6 you should use .vds-width-1-2.

```html
<div vds-grid>
    <div class="vds-width-1-2"></div>
    <div class="vds-width-1-2"></div>
</div>
```

```example
<div class="vds-text-center" vds-grid>
    <div class="vds-width-1-3">
        <div class="vds-card vds-card-default vds-card-body">1-3</div>
    </div>
    <div class="vds-width-1-3">
        <div class="vds-card vds-card-default vds-card-body">1-3</div>
    </div>
    <div class="vds-width-1-3">
        <div class="vds-card vds-card-default vds-card-body">1-3</div>
    </div>
</div>

<div class="vds-text-center" vds-grid>
    <div class="vds-width-1-2">
        <div class="vds-card vds-card-default vds-card-body">1-2</div>
    </div>
    <div class="vds-width-1-2">
        <div class="vds-card vds-card-default vds-card-body">1-2</div>
    </div>
</div>

<div class="vds-text-center" vds-grid>
    <div class="vds-width-1-4">
        <div class="vds-card vds-card-default vds-card-body">1-4</div>
    </div>
    <div class="vds-width-3-4">
        <div class="vds-card vds-card-default vds-card-body">3-4</div>
    </div>
</div>
```

***

## Auto & expand

The Width component provides additional modifiers to give you more flexibility in the distribution of items.

| Class              | Description                                                            |
|:-------------------|:-----------------------------------------------------------------------|
| `.vds-width-auto`   | The item expands only to the width of its own content.                 |
| `.vds-width-expand` | The item expands to fill up the remaining space of the grid container. |

```html
<div vds-grid>
    <div class="vds-width-auto"></div>
    <div class="vds-width-expand"></div>
</div>
```

```example
<div class="vds-text-center" vds-grid>
    <div class="vds-width-auto">
        <div class="vds-card vds-card-default vds-card-body">Auto</div>
    </div>
    <div class="vds-width-expand">
        <div class="vds-card vds-card-default vds-card-body">Expand</div>
    </div>
</div>
```

***

## Equal child widths

To create a grid whose child elements' widths are evenly split, you don't have to apply the same class to each list item within the grid. Just add one of the `.vds-child-width-*` classes to the grid itself.

| Class                    | Description                                                         |
|:-------------------------|:--------------------------------------------------------------------|
| `.vds-child-width-1-2`    | All elements take up half of their parent container.                |
| `.vds-child-width-1-3`    | All elements take up a third of their parent container.             |
| `.vds-child-width-1-4`    | All elements take up a fourth of their parent container.            |
| `.vds-child-width-1-5`    | All elements take up a fifth of their parent container.             |
| `.vds-child-width-1-6`    | All elements take up a sixth of their parent container.             |
| `.vds-child-width-auto`   | Divides the grid into equal units depending on the content size.    |
| `.vds-child-width-expand` | Divides the grid into equal units depending on the available space. |

```html
<div class="vds-child-width-1-4" vds-grid>
    <div></div>
    <div></div>
    ...
</div>
```

```example
<div class="vds-child-width-1-4 vds-grid-small vds-text-center" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
</div>
```

Items that use width classes with fractions will break into a new row, if they no longer fit their container's width. When using one of the _expand_ classes, however, the space will be evenly distributed among items that always stay in the same row.

```html
<div class="vds-child-width-expand" vds-grid>
    <div></div>
    <div></div>
    ...
</div>
```

```example
<div class="vds-child-width-expand vds-grid-small vds-text-center" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
</div>
```

***

## Fixed width

In addition to the calculated width classes, you can also add one of the following classes, which apply fixed widths.

| Class               | Description                       |
|:--------------------|:----------------------------------|
| `.vds-width-small`   | Applies a fixed width of _150px_. |
| `.vds-width-medium`  | Applies a fixed width of _300px_. |
| `.vds-width-large`   | Applies a fixed width of _450px_. |
| `.vds-width-xlarge`  | Applies a fixed width of _600px_. |
| `.vds-width-2xlarge` | Applies a fixed width of _750px_. |

```html
<div class="vds-width-medium"></div>
```

```example
<div class="vds-width-small vds-margin"><div class="vds-card vds-card-small vds-card-default vds-card-body">Small</div></div>
<div class="vds-width-medium vds-margin"><div class="vds-card vds-card-small vds-card-default vds-card-body">Medium</div></div>
<div class="vds-width-large vds-margin"><div class="vds-card vds-card-small vds-card-default vds-card-body">Large</div></div>
<div class="vds-width-xlarge vds-margin"><div class="vds-card vds-card-small vds-card-default vds-card-body">X-Large</div></div>
<div class="vds-width-2xlarge vds-margin"><div class="vds-card vds-card-small vds-card-default vds-card-body">2X-Large</div></div>
```

***

## Mixing widths

You can also combine `.vds-child-width-*` classes with `.vds-width-*` classes for individual items. That way it is possible, for example, to create a grid with one item that has a specific width and all other items expanding to fill the remaining space.

```html
<div class="vds-child-width-expand" vds-grid>
    <div></div>
    <div class="vds-width-1-3"></div>
    <div></div>
    ...
</div>
```

```example
<div class="vds-child-width-expand vds-grid-small vds-text-center" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Expand</div>
    </div>
    <div class="vds-width-1-3">
        <div class="vds-card vds-card-default vds-card-body">1-3</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Expand</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Expand</div>
    </div>
</div>
```

***

## Responsive width

Vira Design System provides a number of responsive widths classes. Basically they work just like the usual width classes, except that they have suffixes that represent the breakpoint from which they come to effect. These classes can be combined with the [Visibility component](visibility.md). This is great to adjust your layout and content for different device sizes.

| Class                                       | Description                                                                             |
|:--------------------------------------------|:----------------------------------------------------------------------------------------|
| `.vds-width-*`<br> `.vds-child-width-*`       | Affects all device widths, grid columns stay side by side.                              |
| `.vds-width-*@s`<br> `.vds-child-width-*@s`   | Affects device widths of _640px_ and larger. Grid columns will stack on smaller sizes.  |
| `.vds-width-*@m`<br> `.vds-child-width-*@m`   | Affects device widths of _960px_ and larger. Grid columns will stack on smaller sizes.  |
| `.vds-width-*@l`<br> `.vds-child-width-*@l`   | Affects device widths of _1200px_ and larger. Grid columns will stack on smaller sizes. |
| `.vds-width-*@xl`<br> `.vds-child-width-*@xl` | Affects device widths of _1600px_ and larger. Grid columns will stack on smaller sizes. |

```example
<div class="vds-grid-match vds-grid-small vds-text-center" vds-grid>
    <div class="vds-width-1-2@m">
        <div class="vds-card vds-card-default vds-card-body">1-2@m</div>
    </div>
    <div class="vds-width-1-4@m">
        <div class="vds-card vds-card-default vds-card-body">1-4@m</div>
    </div>
    <div class="vds-width-1-4@m">
        <div class="vds-card vds-card-default vds-card-body">1-4@m</div>
    </div>
    <div class="vds-width-1-5@m vds-hidden@l">
        <div class="vds-card vds-card-secondary vds-card-body">1-5@m<br>hidden@l</div>
    </div>
    <div class="vds-width-1-5@m vds-width-1-3@l">
        <div class="vds-card vds-card-default vds-card-body">1-5@m<br>1-3@l</div>
    </div>
    <div class="vds-width-3-5@m vds-width-2-3@l">
        <div class="vds-card vds-card-default vds-card-body">3-5@m<br>2-3@l</div>
    </div>
</div>

<div class="vds-grid-match vds-grid-small vds-text-center" vds-grid>
    <div class="vds-width-auto@m vds-visible@l">
        <div class="vds-card vds-card-primary vds-card-body">auto@m<br>visible@l</div>
    </div>
    <div class="vds-width-1-3@m">
        <div class="vds-card vds-card-default vds-card-body">1-3@m</div>
    </div>
    <div class="vds-width-expand@m">
        <div class="vds-card vds-card-default vds-card-body">expand@m</div>
    </div>
</div>
```
