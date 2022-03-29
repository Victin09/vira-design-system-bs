# Grid

<p class="vds-text-lead">Create a fully responsive, fluid and nestable grid layout.</p>

The Grid system of Vira Design System allows you to arrange block elements in columns. It works closely together with the [Width component](width.md) to determine how much space of the container each item will take up, and it can also be combined with the [Flex component](flex.md) to align and order grid items.

***

## Usage

To create the grid container, add the `vds-grid` attribute to a `<div>` element. Add child `<div>` elements to create the cells. By default, all grid cells are stacked. To place them side by side, add one of the classes from the [Width component](width.md). Using `.vds-child-width-expand` will automatically apply equal width to items, regardless of how many there are.

**Note** There's no need to add a `.vds-grid` class as it will be added via JavaScript. However, if Vira Design System's JavaScript is [deferred](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer), the class should be added to prevent stacking while loading.

```html
<div vds-grid>
    <div></div>
    <div></div>
</div>
```
**Note** Often cards from the [Card component](card.md) are used inside a grid. This also goes for the following examples for visualization.

```example
<div class="vds-child-width-expand@s vds-text-center" vds-grid>
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

## Gap modifiers

The Grid component comes with a default gap that is decreased automatically from a certain breakpoint usually on a smaller desktop viewport width. To apply a different gap, add one of the following classes.

| Class               | Description                                                                          |
|:--------------------|:-------------------------------------------------------------------------------------|
| `.vds-grid-small`    | Add this class to apply a small gap.                                                 |
| `.vds-grid-medium`   | Add this class to apply a medium gap like the default one, but without a breakpoint. |
| `.vds-grid-large`    | Add this class to apply a large gap with breakpoints.                                |
| `.vds-grid-collapse` | Add this class to remove the grid gap entirely.                                      |

```html
<div class="vds-grid-small" vds-grid>...</div>
```

```example
<div class="vds-grid-small vds-child-width-expand@s vds-text-center" vds-grid>
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

<div class="vds-grid-medium vds-child-width-expand@s vds-text-center" vds-grid>
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

<div class="vds-grid-large vds-child-width-expand@s vds-text-center" vds-grid>
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

<div class="vds-grid-collapse vds-child-width-expand@s vds-text-center vds-margin-large-top" vds-grid>
    <div>
        <div class="vds-background-muted vds-padding">Item</div>
    </div>
    <div>
        <div class="vds-background-primary vds-padding vds-light">Item</div>
    </div>
    <div>
        <div class="vds-background-secondary vds-padding vds-light">Item</div>
    </div>
</div>
```

***

### Column and Row

To apply a different gap to just the column or row, add one of the following classes.

| Class                                                 | Description                                                                      |
|:------------------------------------------------------|:---------------------------------------------------------------------------------|
| `.vds-grid-column-small`<br>`.vds-grid-row-small`       | Add one of these classes to apply a small gap to the column or row.              |
| `.vds-grid-column-medium`<br>`.vds-grid-row-medium`     | Add one of these classes to apply a medium gap to the column or row.             |
| `.vds-grid-column-large`<br>`.vds-grid-row-large`       | Add one of these classes to apply a large gap to the column or row.              |
| `.vds-grid-column-collapse`<br>`.vds-grid-row-collapse` | Add one of these classes to remove the grid gap entirely from the column or row. |

```html
<div class="vds-grid-column-small vds-grid-row-large" vds-grid>...</div>
```

```example
<div class="vds-grid-column-small vds-grid-row-large vds-child-width-1-3@s vds-text-center" vds-grid>
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
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
</div>
```

***

## Nested grid

You can easily extend your grid layout with nested grids.

```html
<div vds-grid>
    <div>
        <div vds-grid>
            <div></div>
            <div></div>
        </div>
    </div>
    <div>
        <div vds-grid>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
```

```example
<div class="vds-child-width-1-2 vds-text-center" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-child-width-1-2 vds-text-center" vds-grid>
            <div>
                <div class="vds-card vds-card-primary vds-card-body">Item</div>
            </div>
            <div>
                <div class="vds-card vds-card-primary vds-card-body">Item</div>
            </div>
        </div>
    </div>
</div>
```

***

## Divider modifier

Add the `.vds-grid-divider` class to separate grid cells with lines. This class can be combined with the gap modifiers. As soon as the grid stacks, the divider lines will become horizontal.

```html
<div class="vds-grid-divider" vds-grid>...</div>
```

```example
<div class="vds-grid-divider vds-child-width-expand@s" vds-grid>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
</div>
```

***

## Match height

To match the height of the direct child of each cell, add the `.vds-grid-match` class. This is needed to match the height of cards from the [Card component](card.md).

```html
<div class="vds-grid-match" vds-grid>....</div>
```

```example
<div class="vds-grid-match vds-child-width-expand@s vds-text-center" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
     </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item<br>...</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item<br>...<br>...</div>
    </div>
</div>
```

***

### Match only one cell

You can also match the height of the direct child of just one cell. To do so, add the `.vds-grid-item-match` class to the grid item whose child you want to match.

```html
<div vds-grid>
    <div class="vds-grid-item-match"></div>
    <div></div>
</div>
```

```example
<div class="vds-child-width-expand@s" vds-grid>
    <div class="vds-grid-item-match">
        <div class="vds-card vds-card-default vds-card-body">
            <h3>Heading</h3>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
     </div>
    <div>
        <h3>Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
</div>
```

***

### Targets

For a more specific selection of the elements whose heights should be matched, add the `target: SELECTOR` option to the `vds-height-match` attribute from the [Height component](height.md#match-height).

```html
<div vds-grid vds-height-match="target: > div > .vds-card">
    <div>
        <div class="vds-card vds-card-default"></div>
    </div>
    <div>
        <div class="vds-card vds-card-default"></div>
    </div>
</div>
```

```example
<div class="vds-child-width-expand@s vds-text-center" vds-grid vds-height-match="target: > div > .vds-card">
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
     </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item<br>...</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item<br>...<br>...</div>
    </div>
</div>
```

***

## Grid and width

The grid is mostly used in combination with the [Width component](width.md). This allows for great flexibility when determining the column widths.

```html
<div vds-grid>
    <div class="vds-width-auto@m"></div>
    <div class="vds-width-1-3@m"></div>
    <div class="vds-width-expand@m"></div>
</div>
```

```example
<div class="vds-text-center" vds-grid>
    <div class="vds-width-auto@m">
        <div class="vds-card vds-card-default vds-card-body">Auto</div>
    </div>
    <div class="vds-width-1-3@m">
        <div class="vds-card vds-card-default vds-card-body">1-3</div>
    </div>
    <div class="vds-width-expand@m">
        <div class="vds-card vds-card-default vds-card-body">Expand</div>
    </div>
</div>
```

***

### Child width

If the grid columns are evenly split, you can add one of the `.vds-child-width-*` classes to the grid container instead of adding a class to each of the items.

```html
<div class="vds-child-width-1-2@s vds-child-width-1-3@m" vds-grid>...</div>
```

```example
<div class="vds-child-width-1-2@s vds-child-width-1-3@m vds-text-center" vds-grid>
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

For more detailed information, take a look at the [Width component](width.md).

***

## Grid and flex

You can easily combine the grid with the [Flex component](flex.md). That way you can modify the items' alignment, ordering, direction and wrapping. This allows you, for example, to flip the cells' display order for wider viewports. All this works together with the gap and divider modifiers.

```html
<div class="vds-flex-center" vds-grid>
    <div></div>
    <div class="vds-flex-first"></div>
</div>
```

```example
<div class="vds-grid-small vds-child-width-1-4@s vds-flex-center vds-text-center" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item 1</div>
    </div>
    <div class="vds-flex-last">
        <div class="vds-card vds-card-secondary vds-card-body">Item 2</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item 3</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item 4</div>
    </div>
    <div class="vds-flex-first">
        <div class="vds-card vds-card-primary vds-card-body">Item 5</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item 6</div>
    </div>
</div>
```

***

## Masonry

If grid cells have different heights, a layout free of gaps can be created by adding `masonry: true` to the attribute.

```html
<div vds-grid="masonry: true">...</div>
```

```example
<div class="vds-child-width-1-2@s vds-child-width-1-3@m" vds-grid="masonry: true">
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 100px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 130px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 150px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 160px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 120px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 140px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 200px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 180px">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-flex vds-flex-center vds-flex-middle" style="height: 140px">Item</div>
    </div>
</div>
```

**Note** You can view more examples in the tests for the [Grid Masonry](../assets/vds/tests/grid-masonry.html).

***

## Filter and order

Grid items can also be filtered and sorted by category, date or other meta data. Take a look at the [Filter component](filter.md).

***

## Parallax

To move single columns of a grid at different speeds while scrolling, just add `parallax: NUMBER` to the attribute. The number sets the parallax translation in pixels.

```html
<div vds-grid="parallax: 150">...</div>
```

This effect can be applied to two types of markup. The following example uses three defined columns with three items each.

```example
<div class="vds-child-width-expand@s vds-text-center" vds-grid="parallax: 150">
    <div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
        <div class="vds-card vds-card-default vds-card-body vds-grid-margin">Item</div>
    </div>
</div>
```

The parallax effect is also applied if grid columns wrap into the next row, as shown in the next example.

```example
<div class="vds-child-width-1-2@s vds-child-width-1-3@m vds-child-width-1-4@l vds-text-center" vds-grid="parallax: 150">
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
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-body">Item</div>
    </div>
</div>
```

**Note** You can view more examples in the [Grid Parallax](../assets/vds/tests/grid-parallax.html) tests.

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option         | Value   | Default         | Description                                                                                                     |
|:---------------|:--------|:----------------|:----------------------------------------------------------------------------------------------------------------|
| `margin `      | String  | vds-grid-margin  | This class is added to items that break into the next row, typically to create margin to the previous row.      |
| `first-column` | String  | vds-first-column | This class is added to the first element in each row.                                                           |
| `masonry`      | Boolean | false           | Enables masonry layout for this grid.                                                                           |
| `parallax`     | Number  | 0               | Parallax translation value. The value must be a positive integer. Falsy disables the parallax effect (default). |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.grid(element, options);
```
