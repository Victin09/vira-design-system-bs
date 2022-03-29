# Subnav

<p class="vds-text-lead">Defines different styles for a sub navigation.</p>

## Usage

To apply this component, use the following classes. To align a subnav, for example to horizontally center it, you can use the [Flex component](flex.md).

| Class         | Description                                                                                                         |
|:--------------|:--------------------------------------------------------------------------------------------------------------------|
| `.vds-subnav`  | Add this class to a `<ul>` element to define the Subnav component. Use `<a>` elements as nav items within the list. |
| `.vds-active ` | Add this class to a list item to apply an active state.                                                             |

To add list items without a link, use a `<span>` element instead of an `<a>`. Alternatively, disable an `<a>` element by adding the `.vds-disabled` class to the `<li>` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

```html
<ul class="vds-subnav">
    <li class="vds-active"><a href=""></a></li>
    <li><a href=""></a></li>
    <li><span></span></li>
</ul>
```

```example
<ul class="vds-subnav" vds-margin>
    <li class="vds-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><span>Disabled</span></li>
</ul>
```

**Note** For a better layout, if items should wrap into the next row, add the `vds-margin` attribute from the [Margin component](margin.md).

***

## Divider modifier

Add the `.vds-subnav-divider` class to separate menu items with lines.

```html
<ul class="vds-subnav vds-subnav-divider">...</ul>
```

```example
<ul class="vds-subnav vds-subnav-divider" vds-margin>
    <li class="vds-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>
```

***

## Pill modifier

Add the `.vds-subnav-pill` class to highlight the active menu item with a background.

```html
<ul class="vds-subnav vds-subnav-pill">...</ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-margin>
    <li class="vds-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>
```

***

## Subnav and Dropdown

You can also use a dropdown from the [Dropdown component](dropdown.md) with a subnav.

```html
<ul class="vds-subnav">
    <li>

        <!-- This is the menu item toggling the dropdown -->
        <a href=""></a>

        <!-- This is the dropdown -->
        <div vds-dropdown="mode: click">
            <ul class="vds-nav vds-dropdown-nav">...</ul>
        </div>

    </li>
</ul>
```

```example
<ul class="vds-subnav vds-subnav-pill" vds-margin>
    <li class="vds-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li>
        <a href="#">More <span vds-icon="icon: triangle-down"></span></a>
        <div vds-dropdown="mode: click">
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
    </li>
</ul>
```
