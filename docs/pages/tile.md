# Tile

<p class="vds-text-lead">Create layout boxes with different backgrounds that can be arranged seamlessly next to each other.</p>

## Usage

To apply this component, add the `.vds-tile` class to a `<div>` element. By default, a tile is blank. That is why it is important to add one of the following modifier classes for styling.

| Class                | Description                          |
|:---------------------|:-------------------------------------|
| `.vds-tile-default`   | Applies the default tile background. |
| `.vds-tile-muted`     | Applies a muted tile background.     |
| `.vds-tile-primary`   | Applies the primary tile background. |
| `.vds-tile-secondary` | Applies a secondary tile background. |

```html
<div class="vds-tile vds-tile-default"></div>
```

```example
<div class="vds-child-width-1-2@s vds-grid-collapse vds-text-center" vds-grid>
    <div>
        <div class="vds-tile vds-tile-default">
            <p class="vds-h4">Default</p>
        </div>
    </div>
    <div>
        <div class="vds-tile vds-tile-muted">
            <p class="vds-h4">Muted</p>
        </div>
    </div>
    <div>
        <div class="vds-tile vds-tile-primary">
            <p class="vds-h4">Primary</p>
        </div>
    </div>
    <div>
        <div class="vds-tile vds-tile-secondary">
            <p class="vds-h4">Secondary</p>
        </div>
    </div>
</div>
```

***

## Tile and padding

The tile component has some padding by default. To remove this or to apply different spacing, add one of the classes from the [Padding component](padding.md).

```html
<div class="vds-tile vds-tile-default vds-padding-large"></div>
```

```example
<div class="vds-child-width-1-3@s vds-grid-small vds-text-center" vds-grid>
    <div>
        <div class="vds-tile vds-tile-muted vds-padding-remove">
            <p class="vds-h4">Remove</p>
        </div>
    </div>
    <div>
        <div class="vds-tile vds-tile-primary vds-padding-small">
            <p class="vds-h4">Small</p>
        </div>
    </div>
    <div>
        <div class="vds-tile vds-tile-secondary vds-padding-large">
            <p class="vds-h4">Large</p>
        </div>
    </div>
</div>
```
