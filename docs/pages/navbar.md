# Navbar

<p class="vds-text-lead">Create a navigation bar that can be used for your main site navigation.</p>

## Usage

The Navbar component consists of a navbar container, the navbar itself and one or more navigations.

| Element                                                           | Description                                                                                                    |
|:------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| `vds-navbar`                                                       | Add this attribute to a `<nav>` element to define the Navbar component.                                        |
| `.vds-navbar-container`                                            | Add this class to the same `<nav>` element or a parent element to add the navbar background style.             |
| `.vds-navbar-left`<br> `.vds-navbar-center`<br>  `.vds-navbar-right` | Add one of these classes to a `<div>` element to align the navigation.                                         |
| `.vds-navbar-nav`                                                  | Add this class to a `<ul>` element to create the navigation. Use `<a>` elements as menu items within the list. |
| `.vds-parent`                                                      | Add this class to indicate a parent menu item.                                                                 |
| `.vds-active`                                                      | Add this class to indicate an active menu item.                                                                |

```html
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">
        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href=""></a></li>
            <li class="vds-parent"><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="vds-navbar-dropdown">
                    <ul class="vds-nav vds-navbar-dropdown-nav">
                        <li class="vds-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
</nav>
```

***

## Multiple navigations

You can place more than one navigation inside a navbar container. That way you can have a left aligned, a centered and a right aligned navigation inside the same navbar.

```html
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">...</div>
    <div class="vds-navbar-center">...</div>
    <div class="vds-navbar-right">...</div>
</nav>
```

```example
<nav class="vds-navbar-container" vds-navbar>

    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="vds-navbar-dropdown">
                    <ul class="vds-nav vds-navbar-dropdown-nav">
                        <li class="vds-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>

    <div class="vds-navbar-right">

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="vds-navbar-dropdown">
                    <ul class="vds-nav vds-navbar-dropdown-nav">
                        <li class="vds-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>

</nav>
```

***

## Click mode

A parent item inside the navbar can be enabled by either hovering or clicking the toggle. Just add the `mode: click` option to the `vds-navbar` attribute.

```html
<nav class="vds-navbar-container" vds-navbar="mode: click">...</nav>
```

```example
<nav class="vds-navbar-container vds-margin" vds-navbar="mode: click">
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="vds-navbar-dropdown">
                    <ul class="vds-nav vds-navbar-dropdown-nav">
                        <li class="vds-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
</nav>
```

***

## Transparent modifier

When using an image or colored background for the hero section of your website, you might want to turn the navbar transparent. Just add the `.vds-navbar-transparent` class to the `<nav>` element. If necessary, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md) to adjust the navbar's color.

```html
<nav class="vds-navbar-container vds-navbar-transparent" vds-navbar>...</nav>
```

```example
<div class="vds-position-relative">
    <img src="images/light.jpg" width="1800" height="1200" alt="">
    <div class="vds-position-top">
        <nav class="vds-navbar-container vds-navbar-transparent" vds-navbar>
            <div class="vds-navbar-left">
                <ul class="vds-navbar-nav">
                    <li class="vds-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
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
    </div>
</div>
```

***

## Subtitle

To define a subtitle, create a `<div>` element inside an item's `<a>` element. Add the `.vds-navbar-subtitle` class to another `<div>` element.

```html
<li>
    <a href="">
        <div>
            ...
            <div class="vds-navbar-subtitle"></div>
        </div>
    </a>
</li>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li class="vds-active">
                <a href="#">
                    <div>
                        Active
                        <div class="vds-navbar-subtitle">Subtitle</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        Parent
                        <div class="vds-navbar-subtitle">Subtitle</div>
                    </div>
                </a>
                <div class="vds-navbar-dropdown">
                    <ul class="vds-nav vds-navbar-dropdown-nav">
                        <li class="vds-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">
                    <div>
                        Item
                        <div class="vds-navbar-subtitle">Subtitle</div>
                    </div>
                </a>
            </li>
        </ul>

    </div>
</nav>
```

***

## Content item

You can also add custom content to the navbar, like text, icons, buttons or forms. Add the `.vds-navbar-item` class to a `<div>` element that serves as a container for your content

```html
<div class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">
        <a href="" class="vds-navbar-item vds-logo"></a>
        <ul class="vds-navbar-nav">...</ul>
        <div class="vds-navbar-item">...</div>
    </div>
</div>
```

Add the `.vds-logo` class from the [Utility component](utility.md) to an `<a>` or `<div>` element to indicate your brand.

```example
<nav class="vds-navbar-container vds-margin" vds-navbar>
    <div class="vds-navbar-left">

        <a class="vds-navbar-item vds-logo" href="#">Logo</a>

        <ul class="vds-navbar-nav">
            <li>
                <a href="#">
                    <span class="vds-icon vds-margin-small-right" vds-icon="icon: star"></span>
                    Features
                </a>
            </li>
        </ul>

        <div class="vds-navbar-item">
            <div>Some <a href="#">Link</a></div>
        </div>

        <div class="vds-navbar-item">
            <form action="javascript:void(0)">
                <input class="vds-input vds-form-width-small" type="text" placeholder="Input">
                <button class="vds-button vds-button-default">Button</button>
            </form>
        </div>

    </div>
</nav>
```

***

## Centered logo

You can create a split menu with a centered logo. Just add the `vds-navbar-center-left` class to one navbar and the `vds-navbar-center-right` class to another within the same navbar container. This will keep your logo centered and align the menus to the left and right.

**Note** An extra `div` element is required to support IE 11.

```html
<div class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-center">
        <div class="vds-navbar-center-left"><div>...</div></div>
        <a href="" class="vds-navbar-item vds-logo"></a>
        <div class="vds-navbar-center-right"><div>...</div></div>
    </div>
</div>
```

```example
<nav class="vds-navbar-container vds-margin" vds-navbar>
    <div class="vds-navbar-center">

        <div class="vds-navbar-center-left"><div>
            <ul class="vds-navbar-nav">
                <li class="vds-active"><a href="#">Active</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div class="vds-navbar-dropdown">
                        <ul class="vds-nav vds-navbar-dropdown-nav">
                            <li class="vds-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div></div>
        <a class="vds-navbar-item vds-logo" href="#">Logo</a>
        <div class="vds-navbar-center-right"><div>
            <ul class="vds-navbar-nav">
                <li><a href="#">Item</a></li>
            </ul>
        </div></div>

    </div>
</nav>
```


***

## Toggle item

Add the `.vds-navbar-toggle` class and the `vds-navbar-toggle-icon` attribute to an `<a>` or `<div>` element to create an icon as a toggle. By default, there is no JavaScript attached to the toggle. As an example, you can add an off-canvas navigation from the [Off-canvas component](offcanvas.md) or a modal from the [Modal component](modal.md).

```html
<div class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">
        <a class="vds-navbar-toggle" vds-navbar-toggle-icon href=""></a>
    </div>
</div>
```

```example
<nav class="vds-navbar vds-navbar-container vds-margin">
    <div class="vds-navbar-left">
        <a class="vds-navbar-toggle" vds-navbar-toggle-icon href="#"></a>
    </div>
</nav>

<nav class="vds-navbar vds-navbar-container vds-margin">
    <div class="vds-navbar-left">
        <a class="vds-navbar-toggle" href="#">
            <span vds-navbar-toggle-icon></span> <span class="vds-margin-small-left">Menu</span>
        </a>
    </div>
</nav>
```

***

## Dropdowns

A navbar can contain a dropdown from the [Dropdown component](dropdown.md). Just add the `.vds-navbar-dropdown` modifier to the dropdown, so it fits perfectly into the navbar's styling. Add the `.vds-navbar-dropdown-nav` class to navs inside the dropdown.

```html
<ul class="vds-navbar-nav">
    <li>
        <a href=""></a>
        <div class="vds-navbar-dropdown">
            <ul class="vds-nav vds-navbar-dropdown-nav">...</ul>
        </div>
    </li>
</ul>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
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
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="vds-navbar-right">

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

### Multiple columns

The [Dropdown component](dropdown.md) allows you to arrange the dropdown content in columns. To accommodate up to five columns, you also need to add one of the following classes. Columns will stack, if they no longer fit into the container.

| Class                         | Description                                              |
|:------------------------------|:---------------------------------------------------------|
| `.vds-navbar-dropdown-width-2` | Add this class to double the dropdown's width.           |
| `.vds-navbar-dropdown-width-3` | Add this class to triple the dropdown's width.           |
| `.vds-navbar-dropdown-width-4` | Add this class to multiply the dropdown's width by four. |
| `.vds-navbar-dropdown-width-5` | Add this class to multiply the dropdown's width by five. |

```html
<div class="vds-navbar-dropdown vds-navbar-dropdown-width-2">
    <div class="vds-navbar-dropdown-grid vds-child-width-1-2" vds-grid>
        <div>
            <ul class="vds-nav vds-navbar-dropdown-nav">...</ul>
        </div>
        <div>...</div>
    </div>
</div>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li>
                <a href="#">Two Columns</a>
                <div class="vds-navbar-dropdown vds-navbar-dropdown-width-2">
                    <div class="vds-navbar-dropdown-grid vds-child-width-1-2" vds-grid>
                        <div>
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
                        <div>
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
                    </div>
                </div>
            </li>
        </ul>

    </div>

</nav>
```

***

### Boundary alignment

Dropdowns can be aligned to the navbar's boundary. Just append the `boundary-align: true` parameter to the `vds-navbar` attribute. Add the `align: left`, `align: center` or `align: right` option to change the alignment. By default, dropdowns are aligned to the left.

```html
<nav class="vds-navbar-container" vds-navbar="boundary-align: true; align: center;">...</nav>
```

```example
<nav class="vds-navbar-container" vds-navbar="boundary-align: true; align: center;">
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li>
                <a href="#">Item</a>
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
            <li>
                <a href="#">Item</a>
                <div class="vds-navbar-dropdown vds-navbar-dropdown-width-2">
                    <div class="vds-navbar-dropdown-grid vds-child-width-1-2" vds-grid>
                        <div>
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
                        <div>
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
                    </div>
                </div>
            </li>
            <li>
                <a href="#">Item</a>
                <div class="vds-navbar-dropdown vds-navbar-dropdown-width-3">
                    <div class="vds-navbar-dropdown-grid vds-child-width-1-3" vds-grid>
                        <div>
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
                        <div>
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
                        <div>
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
                    </div>
                </div>
            </li>
        </ul>

    </div>

    <div class="vds-navbar-right">
        <ul class="vds-navbar-nav">
            <li>
                <a href="#">Item</a>
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

### Justify

To justify a dropdown, use the [Drop component](drop.md) and its position feature. In the following example it is aligned to the boundary of the parent navbar.

```html
<div class="vds-navbar-dropdown" vds-drop="boundary: .parent; boundary-align: true; pos: bottom-justify;">...</div>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <ul class="vds-navbar-nav">
            <li>
                <a href="#">Item</a>
                <div class="vds-navbar-dropdown" vds-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
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
           <li>
               <a href="#">Item</a>
               <div class="vds-navbar-dropdown" vds-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                   <div class="vds-navbar-dropdown-grid vds-child-width-1-2" vds-grid>
                       <div>
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
                       <div>
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
                   </div>
               </div>
           </li>
       </ul>

    </div>
</nav>
```

***

## Dropbar

A dropbar extends to the full width of the navbar and displays the dropdown without its default styling. To place dropdowns inside such a dropbar, add the `dropbar: true` option to the `vds-navbar`.

```html
<nav class="vds-navbar-container" vds-navbar="dropbar: true;">...</nav>
<div class="vds-navbar-dropbar"></div>
```

```example
<div class="vds-position-relative">

    <nav class="vds-navbar-container" vds-navbar="dropbar: true">

        <div class="vds-navbar-left">

            <ul class="vds-navbar-nav">
                <li>
                    <a href="#">Item</a>
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
                <li>
                    <a href="#">Item</a>
                    <div class="vds-navbar-dropdown vds-navbar-dropdown-width-2">
                        <div class="vds-navbar-dropdown-grid vds-child-width-1-2" vds-grid>
                            <div>
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
                            <div>
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
                        </div>
                    </div>
                </li>
            </ul>

        </div>

        <div class="vds-navbar-right">

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

    <div class="vds-navbar-dropbar"></div>

</div>
```

***

## Sticky Navbar

For a basic sticky navbar, wrap the navbar inside a container with the `vds-sticky` attribute from the [Sticky component](sticky.md).

The navbar itself has a modifier class `vds-navbar-sticky` that ensures an optimized styling for the sticky state (for example an additional box shadow). To let the sticky component dynamically add and remove that class, set `cls-active: vds-navbar-sticky`. To ensure that the class is added to the navbar container, set `sel-target: .vds-navbar-container`.

**Note** You can view more examples in the tests for the [Sticky Navbar](../assets/vds/tests/sticky-navbar.html).

```html
<div vds-sticky="sel-target: .vds-navbar-container; cls-active: vds-navbar-sticky">
    <nav class="vds-navbar-container" vds-navbar>...</nav>
</div>
```

```example
<div vds-sticky="sel-target: .vds-navbar-container; cls-active: vds-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="vds-navbar-container" vds-navbar style="position: relative; z-index: 980;">
        <div class="vds-navbar-left">

            <ul class="vds-navbar-nav">
                <li class="vds-active"><a href="#">Active</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div class="vds-navbar-dropdown">
                        <ul class="vds-nav vds-navbar-dropdown-nav">
                            <li class="vds-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>

        </div>
    </nav>
</div>
```

Instead of using a Dropdown, you can show a Dropbar, which means that the subnavigation is displayed in full width below the navbar. Simply set `dropbar: true` inside the `vds-navbar` attribute.

```html
<div vds-sticky="sel-target: .vds-navbar-container; cls-active: vds-navbar-sticky">
    <nav class="vds-navbar-container" vds-navbar="dropbar: true;">...</nav>
</div>
```

```example
<div vds-sticky="sel-target: .vds-navbar-container; cls-active: vds-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="vds-navbar-container" vds-navbar="dropbar: true;" style="position: relative; z-index: 980;">
        <div class="vds-navbar-left">

            <ul class="vds-navbar-nav">
                <li class="vds-active"><a href="#">Active</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div class="vds-navbar-dropdown">
                        <ul class="vds-nav vds-navbar-dropdown-nav">
                            <li class="vds-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>

        </div>
    </nav>
</div>
```

***

### Transparent Sticky Navbar

When you use a [transparent navbar](navbar.md#transparent-modifier), your markup contains the `.vds-navbar-transparent` class together with `.vds-light` or `.vds-dark`. When the navbar is sticky, it is usually required to remove these classes and add them when the navbar returns to the non-sticky state. To do that, set `cls-inactive: vds-navbar-transparent vds-light`.

By default, the immediate toggling of classes does not look ideal. Instead, we can set `top: 200` to let the navbar disappear and then re-appear when the user has scrolled 200px past the navbar. In that case we can also define to have the navbar slide in with an animation, just set `animation: vds-animation-slide-top`.

```html
<div vds-sticky="animation: vds-animation-slide-top; sel-target: .vds-navbar-container; cls-active: vds-navbar-sticky; cls-inactive: vds-navbar-transparent vds-light; top: 200">
    <nav class="vds-navbar-container" vds-navbar>...</nav>
</div>
```

```example
<div class="vds-section-primary vds-preserve-color">

    <div vds-sticky="animation: vds-animation-slide-top; sel-target: .vds-navbar-container; cls-active: vds-navbar-sticky; cls-inactive: vds-navbar-transparent vds-light; top: 200">

        <nav class="vds-navbar-container">
            <div class="vds-container vds-container-expand">
                <div vds-navbar>

                    <ul class="vds-navbar-nav">
                        <li class="vds-active"><a href="#">Active</a></li>
                        <li>
                            <a href="#">Parent</a>
                            <div class="vds-navbar-dropdown">
                                <ul class="vds-nav vds-navbar-dropdown-nav">
                                    <li class="vds-active"><a href="#">Active</a></li>
                                    <li><a href="#">Item</a></li>
                                    <li><a href="#">Item</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Item</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>

    <div class="vds-section vds-light">
        <div class="vds-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option           | Value           | Default        | Description                                                                                                            |
|:-----------------|:----------------|:---------------|:-----------------------------------------------------------------------------------------------------------------------|
| `align`          | String          | `left`         | Dropdown alignment: `left`, `right`, `center`                                                                          |
| `mode`           | String          | `click, hover` | Comma separated list of dropdown trigger behavior modes: `click`, `hover`                                              |
| `delay-show`     | Number          | `0`            | Delay time in hover mode before a dropdown is shown in milliseconds.                                                   |
| `delay-hide`     | Number          | `800`          | Delay time in hover mode before a dropdown is hidden in milliseconds.                                                  |
| `boundary`       | Boolean, String | `true`         | CSS selector of referenced element to keep the dropdown's visibility. By default, it's the navbar component's element. |
| `boundary-align` | Boolean         | `false`        | Align the dropdown to the boundary.                                                                                    |
| `offset`         | Number          | `0`            | The offset of the dropdown container.                                                                                  |
| `dropbar `       | Boolean         | `false`        | Enable or disable dropbar behavior.                                                                                    |
| `duration`       | Number          | `200`          | The dropbar transition duration.                                                                                       |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.navbar(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
|:-------------|:-----------------------------------------------------------------------------------------------|
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |
