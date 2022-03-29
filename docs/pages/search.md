# Search

<p class="vds-text-lead">Easily create a nice looking search.</p>

## Usage

The Search component consists of a search form and the search input itself.

| Class/Attribute    | Description                                                           |
|:-------------------|:----------------------------------------------------------------------|
| `.vds-search`       | Add this class to a container element to define the Search component. |
| `.vds-search-input` | Add this class to an `<input>` element to create the search field.    |

```html
<form class="vds-search">
    <input class="vds-search-input" type="search" placeholder="">
</form>
```

By default, the search has no additional styling. In this example we are using the `.vds-search-default` modifier.

```example
<form class="vds-search vds-search-default">
    <input class="vds-search-input" type="search" placeholder="Search">
</form>
```

***

## Search icon

To create a search icon, add the `vds-search-icon` attribute to a `<span>` element. To change the alignment, add the `.vds-search-icon-flip` class.

```html
<form class="vds-search vds-search-default">
    <span vds-search-icon></span>
    <input class="vds-search-input" type="search" placeholder="">
</form>
```

```example
<div class="vds-margin">
    <form class="vds-search vds-search-default">
        <span vds-search-icon></span>
        <input class="vds-search-input" type="search" placeholder="Search">
    </form>
</div>

<div class="vds-margin">
    <form class="vds-search vds-search-default">
        <span class="vds-search-icon-flip" vds-search-icon></span>
        <input class="vds-search-input" type="search" placeholder="Search">
    </form>
</div>
```

***

### Clickable

To enable an action, use an `<a>` or `<button>` element to create the icon.

```html
<form class="vds-search vds-search-default">
    <a href="" vds-search-icon></a>
    <input class="vds-search-input" type="search" placeholder="">
</form>
```

```example
<div class="vds-margin">
    <form class="vds-search vds-search-default">
        <a href="" vds-search-icon></a>
        <input class="vds-search-input" type="search" placeholder="Search">
    </form>
</div>

<div class="vds-margin">
    <form class="vds-search vds-search-default">
        <a href="" class="vds-search-icon-flip" vds-search-icon></a>
        <input class="vds-search-input" type="search" placeholder="Search">
    </form>
</div>
```

***

## Default modifier

To apply the default search styling, add the `.vds-search-default` class.

```html
<form class="vds-search vds-search-default">...</form>
```

```example
<form class="vds-search vds-search-default">
    <span vds-search-icon></span>
    <input class="vds-search-input" type="search" placeholder="Search">
</form>
```

***

## Large modifier

To increase the size of the search, for example when creating an overlay search, add the `.vds-search-large` class.

```html
<form class="vds-search vds-search-large">...</form>
```

```example
<form class="vds-search vds-search-large">
    <span vds-search-icon></span>
    <input class="vds-search-input" type="search" placeholder="Search">
</form>
```

***

## Navbar modifier

A search can be used inside a navbar from the [Navbar component](navbar.md). Just add the `.vds-search-navbar` class.

```html
<form class="vds-search vds-search-navbar">...</form>
```

```example
<nav class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">

        <div class="vds-navbar-item">
            <form class="vds-search vds-search-navbar">
                <span vds-search-icon></span>
                <input class="vds-search-input" type="search" placeholder="Search">
            </form>
        </div>

    </div>
</nav>
```

***

## Toggle

To apply a hover state to the search icon when using an `<a>` or `<button>` element, add the `.vds-search-toggle` class. To create the search icon itself, add the `vds-search-icon` attribute.

```html
<a class="vds-search-toggle" href="" vds-search-icon></a>
```

```example
<a class="vds-search-toggle" href="" vds-search-icon></a>
```

***

## Search in navbar

The search icon can be used as a toggle to open the search inside a navbar – as an overlay, drop or dropdown – or outside in a modal. Just add the `.vds-navbar-toggle` class to the icon.

```html
<div class="vds-navbar-container" vds-navbar>
    <div class="vds-navbar-left">
        <a class="vds-navbar-toggle" vds-search-icon vds-toggle href=""></a>
    </div>
</div>
```

### Overlay

```example
<nav class="vds-navbar-container vds-margin" vds-navbar>

    <div class="nav-overlay vds-navbar-left">

        <a class="vds-navbar-item vds-logo" href="#">Logo</a>

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>

    <div class="nav-overlay vds-navbar-right">

        <a class="vds-navbar-toggle" vds-search-icon vds-toggle="target: .nav-overlay; animation: vds-animation-fade" href="#"></a>

    </div>

    <div class="nav-overlay vds-navbar-left vds-flex-1" hidden>

        <div class="vds-navbar-item vds-width-expand">
            <form class="vds-search vds-search-navbar vds-width-1-1">
                <input class="vds-search-input" type="search" placeholder="Search" autofocus>
            </form>
        </div>

        <a class="vds-navbar-toggle" vds-close vds-toggle="target: .nav-overlay; animation: vds-animation-fade" href="#"></a>

    </div>

</nav>
```

### Drop

```example
<nav class="vds-navbar-container vds-margin" vds-navbar>
    <div class="vds-navbar-left">

        <a class="vds-navbar-item vds-logo" href="#">Logo</a>

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="vds-navbar-right">

        <div>
            <a class="vds-navbar-toggle" vds-search-icon href="#"></a>
            <div class="vds-drop" vds-drop="mode: click; pos: left-center; offset: 0">
                <form class="vds-search vds-search-navbar vds-width-1-1">
                    <input class="vds-search-input" type="search" placeholder="Search" autofocus>
                </form>
            </div>
        </div>

    </div>
</nav>
```

### Dropdown

```example
<nav class="vds-navbar-container vds-margin" vds-navbar>
    <div class="vds-navbar-left">

        <a class="vds-navbar-item vds-logo" href="#">Logo</a>

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="vds-navbar-right">

        <div>
            <a class="vds-navbar-toggle" href="#" vds-search-icon></a>
            <div class="vds-navbar-dropdown" vds-drop="mode: click; cls-drop: vds-navbar-dropdown; boundary: !nav">

                <div class="vds-grid-small vds-flex-middle" vds-grid>
                    <div class="vds-width-expand">
                        <form class="vds-search vds-search-navbar vds-width-1-1">
                            <input class="vds-search-input" type="search" placeholder="Search" autofocus>
                        </form>
                    </div>
                    <div class="vds-width-auto">
                        <a class="vds-navbar-dropdown-close" href="#" vds-close></a>
                    </div>
                </div>

            </div>
        </div>

    </div>
</nav>
```

### Modal

```example
<nav class="vds-navbar vds-navbar-container vds-margin">
    <div class="vds-navbar-left">

        <a class="vds-navbar-item vds-logo" href="#">Logo</a>

        <ul class="vds-navbar-nav">
            <li class="vds-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="vds-navbar-right">

        <a class="vds-navbar-toggle" href="#modal-full" vds-search-icon vds-toggle></a>

    </div>
</nav>

<div id="modal-full" class="vds-modal-full vds-modal" vds-modal>
    <div class="vds-modal-dialog vds-flex vds-flex-center vds-flex-middle" vds-height-viewport>
        <button class="vds-modal-close-full" type="button" vds-close></button>
        <form class="vds-search vds-search-large">
            <input class="vds-search-input vds-text-center" type="search" placeholder="Search" autofocus>
        </form>
    </div>
</div>
```
