# Sortable

<p class="vds-text-lead">Create sortable grids and lists to rearrange the order of its elements.</p>

Drag and drop an element to a new location within the sortable grid, while the other items adjust to fit. This is great, if you want to sort items like gallery or menu items, for example.

***

## Usage

To apply this component, add the `vds-sortable` attribute to a container and create child elements.

```html
<div vds-sortable>
    <div></div>
    <div></div>
</div>
```

```example
<ul class="vds-grid-small vds-child-width-1-2 vds-child-width-1-4@s" vds-sortable="handle: .vds-card" vds-grid>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 1</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 2</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 3</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 4</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 5</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 6</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 7</div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body vds-text-center">Item 8</div>
    </li>
</ul>
```

***

## Handle

By default, the entire sortable element can be used for drag and drop sorting. To create a handle which will be used instead, just add the `handle: SELECTOR` option to the attribute and add the handle class to the element that you want to use as a handle.

```html
<ul vds-sortable="handle: .vds-sortable-handle">
    <li>
        <div class="vds-sortable-handle"></div>
        ...
    </li>
</ul>
```

```example
<ul class="vds-grid-small vds-child-width-1-2 vds-child-width-1-4@s" vds-sortable="handle: .vds-sortable-handle" vds-grid>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 1
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 2
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 3
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 4
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 5
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 6
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 7
        </div>
    </li>
    <li>
        <div class="vds-card vds-card-default vds-card-body">
            <span class="vds-sortable-handle vds-margin-small-right vds-text-center" vds-icon="icon: table"></span>Item 8
        </div>
    </li>
</ul>
```

***

## Group

To be able to sort items from one list to another, you can group them by adding the `group: GROUP-NAME` option to the `vds-sortable` attribute on each list.

```html
<div vds-sortable="group: my-group">
    <div></div>
</div>

<div vds-sortable="group: my-group">
    <div></div>
</div>
```

```example
<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <h4>Group 1</h4>
        <div vds-sortable="group: sortable-group">
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 1</div>
            </div>
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 2</div>
            </div>
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 3</div>
            </div>
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 4</div>
            </div>
        </div>
    </div>
    <div>
        <h4>Group 2</h4>
        <div vds-sortable="group: sortable-group">
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 1</div>
            </div>
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 2</div>
            </div>
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 3</div>
            </div>
            <div class="vds-margin">
                <div class="vds-card vds-card-default vds-card-body vds-card-small">Item 4</div>
            </div>
        </div>
    </div>
    <div>
        <h4>Empty Group</h4>
        <div vds-sortable="group: sortable-group">
    </div>
</div>
```

***

## Custom class

You can also apply one or more custom classes to items when they are being dragged. To do so, add the `cls-custom: MY-CLASS` option to the attribute.

```html
<ul vds-sortable="cls-custom: my-class">...</ul>
```

**Note** In this example, we are using a nav from the [Nav component](nav.md). When dragging an item it will get a box-shadow and background.

```example
<ul class="vds-nav vds-nav-default vds-width-medium" vds-sortable="cls-custom: vds-box-shadow-small vds-flex vds-flex-middle vds-background">
    <li class="vds-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option            | Value           | Default                   | Description                                   |
|:------------------|:----------------|:--------------------------|:----------------------------------------------|
| `group`           | String          | `''`                      | The group                                     |
| `animation`       | String, Boolean | 'slide'                   | Animation mode: `slide`, `false`.             |
| `duration`        | Number          | 250                       | Animation duration in milliseconds.           |
| `threshold`       | Number          | `5`                       | Mouse move threshold before dragging starts.  |
| `cls-item`        | String          | `vds-sortable-item`        | The item class.                               |
| `cls-placeholder` | String          | `vds-sortable-placeholder` | The placeholder class.                        |
| `cls-drag`        | String          | `vds-sortable-drag`        | The ghost class.                              |
| `cls-drag-state`  | String          | `vds-drag`                 | The body's dragging class.                    |
| `cls-base`        | String          | `vds-sortable`             | The list's class.                             |
| `cls-no-drag`     | String          | `vds-sortable-nodrag`      | Disable dragging on elements with this class. |
| `cls-empty`       | String          | `vds-sortable-empty`       | The empty list class.                         |
| `cls-custom`      | String          | `''`                      | The ghost's custom class.                     |
| `handle`          | String          | `false`                   | The handle selector.                          |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.sortable(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name      | Description                              |
|:----------|:-----------------------------------------|
| `start`   | Fires after dragging starts.             |
| `stop`    | Fires after dragging stops.              |
| `moved`   | Fires after an element has been moved.   |
| `added`   | Fires after an element has been added.   |
| `removed` | Fires after an element has been removed. |
