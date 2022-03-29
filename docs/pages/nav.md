# Nav

<p class="vds-text-lead">Defines different styles for list navigations.</p>

## Usage

To apply this component, use the following classes.

| Class         | Description                                                                                                      |
|:--------------|:-----------------------------------------------------------------------------------------------------------------|
| `.vds-nav`     | Add this class to a `<ul>` element to define the Nav component. Use `<a>` elements as nav items within the list. |
| `.vds-active ` | Add this class to a list item to apply an active state to a menu item.                                           |

```html
<ul class="vds-nav">
    <li class="vds-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

```example
<div class="vds-width-1-2@s vds-width-2-5@m">
    <ul class="vds-nav vds-nav-default">
        <li class="vds-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

**Note** By default, the nav has no styling. That's why it is important to add a modifier class. In our example we are using the `.vds-nav-default` class.

***

## Nested navs

Add the `.vds-parent` class to an item to turn it into a parent. Add the `.vds-nav-sub` class to a `<ul>` element inside the item to create the subnav.

```html
<ul class="vds-nav">
    <li class="vds-parent">
        <a href=""></a>
        <ul class="vds-nav-sub">
            <li><a href=""></a></li>
            <li>
                <a href=""></a>
                <ul>...</ul>
            </li>
        </ul>
    </li>
</ul>
```

```example
<div class="vds-width-1-2@s vds-width-2-5@m">
    <ul class="vds-nav vds-nav-default">
        <li class="vds-active"><a href="#">Active</a></li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```


***

## Accordion

By default, child menu items are always visible. To apply an accordion effect, just add the `vds-nav` attribute to the main `<ul>`. Add the `.vds-nav-parent-icon` class to apply icons, indicating parent items.

**Note** The attribute automatically sets the `.vds-nav` class, so you don't have to apply it manually.

```html
<ul class="vds-nav-parent-icon" vds-nav>...</ul>
```

```example
<div class="vds-width-1-2@s vds-width-2-5@m">
    <ul class="vds-nav-default vds-nav-parent-icon" vds-nav>
        <li class="vds-active"><a href="#">Active</a></li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
    </ul>
</div>
```

***

### Multiple open subnavs

When clicking on a parent item, an open one will close, allowing only one open nested list at a time. To allow multiple open subnavs, just add the `multiple: true` option to the attribute.

```html
<ul class="vds-nav-parent-icon" vds-nav="multiple: true">...</ul>
```

```example
<div class="vds-width-1-2@s vds-width-2-5@m">
    <ul class="vds-nav-default vds-nav-parent-icon" vds-nav="multiple: true">
        <li class="vds-active"><a href="#">Active</a></li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
    </ul>
</div>
```

***

## Header & divider

Add one of the following classes to a list item to create a header or a divider between items.

| Element           | Description                                                                  |
|:------------------|:-----------------------------------------------------------------------------|
| `.vds-nav-header`  | Add this class to a `<li>` element to create a header.                       |
| `.vds-nav-divider` | Add this class to a `<li>` element to create a divider separating nav items. |

```html
<li class="vds-nav-header"></li>

<li class="vds-nav-divider"></li>
```

```example
<div class="vds-width-1-2@s vds-width-2-5@m">
    <ul class="vds-nav vds-nav-default">
        <li class="vds-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="vds-nav-divider"></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

***

## Default modifier

Add the `.vds-nav-default` class to give the nav its default style. You can place the nav inside cards or anywhere else in your content.

```html
<ul class="vds-nav vds-nav-default">...</ul>
```

```example
<div class="vds-card vds-card-default vds-card-body vds-width-1-2@s">
    <ul class="vds-nav-default vds-nav-parent-icon" vds-nav>
        <li class="vds-active"><a href="#">Active</a></li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
        <li class="vds-nav-header">Header</li>
        <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: table"></span> Item</a></li>
        <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: thumbnails"></span> Item</a></li>
        <li class="vds-nav-divider"></li>
        <li><a href="#"><span class="vds-margin-small-right" vds-icon="icon: trash"></span> Item</a></li>
    </ul>
</div>
```

***

## Primary modifier

Add the `.vds-nav-primary` class to give the nav a more distinct styling, for example when placing it inside a modal.

```html
<ul class="vds-nav vds-nav-primary">...</ul>
```

```example
<div class="vds-width-1-2@s">
    <ul class="vds-nav-primary vds-nav-parent-icon" vds-nav>
        <li class="vds-active"><a href="#">Active</a></li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
        <li class="vds-parent">
            <a href="#">Parent</a>
            <ul class="vds-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

***

## Center modifier

Add the `.vds-nav-center` class to center nav items. This can be combined with the default and primary style modifiers.

```html
<ul class="vds-nav vds-nav-default vds-nav-center">...</ul>
```

```example
<div class="vds-card vds-card-default vds-card-body vds-width-1-2@s">
    <ul class="vds-nav-default vds-nav-center" vds-nav>
        <li class="vds-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

***

## Divider modifier

Add the `.vds-nav-divider` class to separate nav items with lines. This can be combined with the default and primary style modifiers.

```html
<ul class="vds-nav vds-nav-default vds-nav-divider">...</ul>
```

```example
<div class="vds-width-1-2@s">
    <ul class="vds-nav-default vds-nav-divider" vds-nav>
        <li class="vds-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

***

## Nav in Dropdown

Add the `.vds-dropdown-nav` class to place a nav inside a default dropdown from the [Dropdown component](dropdown.md).

```html
<div vds-dropdown>
    <ul class="vds-nav vds-dropdown-nav">...</ul>
</div>
```

```example
<button class="vds-button vds-button-default" type="button">Hover</button>
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
```

***

## Nav in Navbar

Add the `.vds-navbar-dropdown-nav` class to place the nav inside a navbar dropdown from the [Navbar component](navbar.md).

```html
<div class="vds-navbar-dropdown">
    <ul class="vds-nav vds-navbar-dropdown-nav">...</ul>
</div>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li>
                <a href="#">Parent</a>
                <div class="vds-navbar-dropdown">
                    <ul class="vds-nav vds-navbar-dropdown-nav">
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

    </div>
</nav>
```

***

## Nav in Off-canvas

A nav can be used inside an off-canvas from the [Off-canvas component](offcanvas.md). No modifier class needs to be added.

```example
<a href="#offcanvas-slide" class="vds-button vds-button-default" vds-toggle>Open</a>

<div id="offcanvas-slide" vds-offcanvas>
    <div class="vds-offcanvas-bar">

        <ul class="vds-nav vds-nav-default">
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

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option        | Value        | Default        | Description                                                                       |
|:--------------|:-------------|:---------------|:----------------------------------------------------------------------------------|
| `targets`     | CSS selector | `> .vds-parent` | The element(s) to toggle.                                                         |
| `toggle `     | CSS selector | `> a`          | The toggle element(s).                                                            |
| `content`     | CSS selector | `> ul`         | The content element(s).                                                           |
| `collapsible` | Boolean      | `true`         | Allow all items to be closed.                                                     |
| `multiple`    | Boolean      | `false`        | Allow multiple open items.                                                        |
| `transition`  | String       | `ease`         | The transition to use.                                                            |
| `animation`   | String       | `true`         | The space separated names of animations to use. Comma separate for animation out. |
| `duration`    | Number       | `200`          | The animation duration in milliseconds.                                           |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.nav(element, options);
```

### Methods

The following methods are available for the component:

#### Toggle

```js
ViraDesignSystem.nav(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
|:----------|:---------------------|:--------|:---------------------------------------------|
| `index`   | String, Number, Node | 0       | Nav pane to toggle. 0 based index.           |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |
