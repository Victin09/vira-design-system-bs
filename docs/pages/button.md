# Button

<p class="vds-text-lead">Easily create nice looking buttons, which come in different styles.</p>

## Usage

To apply this component, add the `.vds-button` class and a modifier such as `.vds-button-default` to an `<a>` or `<button>` element. Add the `disabled` attribute to a `<button>` element to disable the button.

```html
<a class="vds-button vds-button-default" href=""></a>

<button class="vds-button vds-button-default"></button>

<button class="vds-button vds-button-default" disabled></button>
```

```example
<p vds-margin>
    <a class="vds-button vds-button-default" href="#">Link</a>
    <button class="vds-button vds-button-default">Button</button>
    <button class="vds-button vds-button-default" disabled>Disabled</button>
</p>
```

**Note** If you are displaying a number of buttons in a row, you can add a top margin to them, when they stack on smaller viewports. Just add the `vds-margin` attribute from the [Margin component](margin.md) to their parent element.

***

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

| Class                  | Description                               |
|:-----------------------|:------------------------------------------|
| `.vds-button-default`   | Default button style.                     |
| `.vds-button-primary`   | Indicates the primary action.             |
| `.vds-button-secondary` | Indicates an important action.            |
| `.vds-button-danger`    | Indicates a dangerous or negative action. |
| `.vds-button-text`      | Applies an typographic style.             |
| `.vds-button-link`      | Applies an plain link style.              |

```html
<button class="vds-button vds-button-primary"></button>
```

```example
<p vds-margin>
    <button class="vds-button vds-button-default">Default</button>
    <button class="vds-button vds-button-primary">Primary</button>
    <button class="vds-button vds-button-secondary">Secondary</button>
    <button class="vds-button vds-button-danger">Danger</button>
    <button class="vds-button vds-button-text">Text</button>
    <button class="vds-button vds-button-link">Link</button>
</p>
```

***

## Size modifiers

Add the `.vds-button-small` or `.vds-button-large` class to a button to make it smaller or larger.


```html
<button class="vds-button vds-button-default vds-button-small"></button>

<button class="vds-button vds-button-default vds-button-large"></button>
```

```example
<p vds-margin>
    <button class="vds-button vds-button-default vds-button-small">Small button</button>
    <button class="vds-button vds-button-primary vds-button-small">Small button</button>
    <button class="vds-button vds-button-secondary vds-button-small">Small button</button>
</p>

<p vds-margin>
    <button class="vds-button vds-button-default vds-button-large">Large button</button>
    <button class="vds-button vds-button-primary vds-button-large">Large button</button>
    <button class="vds-button vds-button-secondary vds-button-large">Large button</button>
</p>
```

***

## Width modifiers

Add the `.vds-width-1-1` class from the [Width component](width.md) and the button will take up full width.

### Example

```example
<button class="vds-button vds-button-default vds-width-1-1 vds-margin-small-bottom">Button</button>
<button class="vds-button vds-button-primary vds-width-1-1 vds-margin-small-bottom">Button</button>
<button class="vds-button vds-button-secondary vds-width-1-1">Button</button>
```

***

## Group

To create a button group, add the `.vds-button-group` class to a `<div>` element around the buttons. That's it! No further markup needed.

```html
<div class="vds-button-group">
    <button class="vds-button vds-button-default"></button>
    <button class="vds-button vds-button-default"></button>
    <button class="vds-button vds-button-default"></button>
</div>
```

```example
<div>
    <div class="vds-button-group">
        <button class="vds-button vds-button-secondary">Button</button>
        <button class="vds-button vds-button-secondary">Button</button>
        <button class="vds-button vds-button-secondary">Button</button>
    </div>
</div>

<div class="vds-margin-small">
    <div class="vds-button-group">
        <button class="vds-button vds-button-primary">Button</button>
        <button class="vds-button vds-button-primary">Button</button>
        <button class="vds-button vds-button-primary">Button</button>
    </div>
</div>

<div>
    <div class="vds-button-group">
        <button class="vds-button vds-button-danger">Button</button>
        <button class="vds-button vds-button-danger">Button</button>
        <button class="vds-button vds-button-danger">Button</button>
    </div>
</div>
```

***

## Button with dropdowns

A button can be used to trigger a dropdown menu from the [Dropdown component](dropdown.md).

```html
<!-- A button toggling a dropdown -->
<button class="vds-button vds-button-default" type="button"></button>
<div vds-dropdown></div>
```

```example
<div class="vds-inline">
    <button class="vds-button vds-button-default" type="button">Dropdown</button>
    <div vds-dropdown>
        <ul class="vds-nav vds-dropdown-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="vds-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="vds-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>
```

***

### Button group with dropdowns

Use button groups to split buttons into a standard action on the left and a dropdown toggle on the right. Just wrap the toggling button and the drop or dropdown inside a `<div>` element and add the `.vds-inline` class from the [Utility component](utility.md#inline).

```html
<!-- A button group with a dropdown -->
<div class="vds-button-group">
    <button class="vds-button vds-button-default"></button>
    <div class="vds-inline">

        <!-- The button toggling the dropdown -->
        <button class="vds-button vds-button-default" type="button"></button>
        <div vds-dropdown="mode: click; boundary: ! .vds-button-group; boundary-align: true;"></div>

    </div>
</div>
```

```example

<div class="vds-button-group">
    <button class="vds-button vds-button-default">Dropdown</button>
    <div class="vds-inline">
        <button class="vds-button vds-button-default" type="button"><span vds-icon="icon:  triangle-down"></span></button>
        <div vds-dropdown="mode: click; boundary: ! .vds-button-group; boundary-align: true;">
            <ul class="vds-nav vds-dropdown-nav">
                <li class="vds-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li class="vds-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li class="vds-nav-divider"></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </div>
</div>
```
