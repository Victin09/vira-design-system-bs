# List

<p class="vds-text-lead">Easily create nice looking lists, which come in different styles.</p>

## Usage

To apply this component, add the `.vds-list` class to an unordered or ordered list. The list will now display without any spacing or list-style.

```html
<ul class="vds-list">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

```example
<ul class="vds-list">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Style type modifiers

Add one of the following classes to set the marker of a list item.

| Class              | Description                                      |
|:-------------------|:-------------------------------------------------|
| `.vds-list-disc`    | Use filled circle as marker.                     |
| `.vds-list-circle`  | Use a hollow circle as marker.                   |
| `.vds-list-square`  | Use a filled square as marker                    |
| `.vds-list-decimal` | Use decimal numbers as marker. Beginning with 1. |
| `.vds-list-hyphen`  | Use a hyphen as marker                           |

```html
<ul class="vds-list vds-list-disc">...</ul>
```

```example
<div class="vds-child-width-expand@s" vds-grid>

    <div>
        <h4>Disc</h4>
        <ul class="vds-list vds-list-disc">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Circle</h4>
        <ul class="vds-list vds-list-circle">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Square</h4>
        <ul class="vds-list vds-list-square">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Decimal</h4>
        <ul class="vds-list vds-list-decimal">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Hyphen</h4>
        <ul class="vds-list vds-list-hyphen">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>
```

***

## Color modifiers

Add one of the following classes to set the marker color.

| Class                | Description                                                      |
|:---------------------|:-----------------------------------------------------------------|
| `.vds-list-muted`     | Add this class to mute the marker.                               |
| `.vds-list-emphasis`  | Add this class to emphasize the marker.                          |
| `.vds-list-primary`   | Add this class to emphasize the marker with the primary color.   |
| `.vds-list-secondary` | Add this class to emphasize the marker with the secondary color. |

```html
<ul class="vds-list vds-list-disc vds-list-primary">...</ul>
```

```example
<div class="vds-child-width-expand@s" vds-grid>

    <div>
        <h4>Muted</h4>
        <ul class="vds-list vds-list-disc vds-list-muted">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Emphasis</h4>
        <ul class="vds-list vds-list-disc vds-list-emphasis">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Primary</h4>
        <ul class="vds-list vds-list-disc vds-list-primary">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Secondary</h4>
        <ul class="vds-list vds-list-disc vds-list-secondary">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>
```

**Note** The color modifiers don't work in Chrome and Edge because the `::marker` pseudo-element is not supported yet. Vote this [Chromium issue](https://bugs.chromium.org/p/chromium/issues/detail?id=457718) up, to give it more attention.

***

## Image bullet modifier

Add the `.vds-list-bullet` class to set a custom image bullet as marker of a list item. Mind, that it can not be combined with color modifiers.

```html
<ul class="vds-list vds-list-bullet">...</ul>
```

```example
<ul class="vds-list vds-list-bullet">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Divider modifier

Add the `.vds-list-divider` class to separate list items with lines.

```html
<ul class="vds-list vds-list-divider">...</ul>
```

```example
<ul class="vds-list vds-list-divider">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Striped modifier

Add zebra-striping to a list using the `.vds-list-striped` class.

```html
<ul class="vds-list vds-list-striped">...</ul>
```

```example
<ul class="vds-list vds-list-striped">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Size modifier

Add one of the following classes to increase or decrease the spacing between list items. You can combine this with any of the other list modifiers.

| Class               | Description                              |
|:--------------------|:-----------------------------------------|
| `.vds-list-large`    | Increase the spacing between list items. |
| `.vds-list-collapse` | Remove the spacing between list items.   |

```html
<ul class="vds-list vds-list-large">...</ul>
```

```example
<h4>Large</h4>

<div class="vds-child-width-expand@s" vds-grid>

    <div>
        <ul class="vds-list vds-list-large">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="vds-list vds-list-large vds-list-disc">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="vds-list vds-list-large vds-list-divider">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="vds-list vds-list-large vds-list-striped">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>

<h4>Collapse</h4>

<div class="vds-child-width-expand@s" vds-grid>

    <div>
        <ul class="vds-list vds-list-collapse">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="vds-list vds-list-collapse vds-list-disc">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="vds-list vds-list-collapse vds-list-divider">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="vds-list vds-list-collapse vds-list-striped">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>
```
