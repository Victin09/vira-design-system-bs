# Link

<p class="vds-text-lead">Define different styles to integrate links into specific content.</p>

## Muted modifier

The [Base component](base.md) determines the default link color. If you want the link to apply a muted style instead, just add the `.vds-link-muted` class to the anchor element. You can also add the class to a parent element, and it will be applied to all `<a>` elements inside it.

```html
<a class="vds-link-muted" href="#"></a>
```

```example
<a class="vds-link-muted" href="#">Link</a>

<p class="vds-link-muted">Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit, sed do <a href="#">eiusmod</a> tempor incididunt ut <a href="#">labore et</a> dolore magna aliqua.</p>
```

***

## Text modifier

To make a link appear like body text and apply a hover effect, add the `.vds-link-text` class to the anchor element. You can also add the class to a parent element, and it will be applied to all `<a>` elements inside it. This is useful for link lists in the page footer.

```html
<a class="vds-link-text" href="#"></a>
```

```example
<ul class="vds-list vds-link-text">
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
</ul>
```

***

## Heading modifier

To style a link inside a heading element, add the `.vds-link-heading` class to the anchor element.

```html
<h3><a class="vds-link-heading" href="#"></a></h3>
```

```example
<h3><a class="vds-link-heading" href="#">Heading</a></h3>
```

***

## Reset modifier

To reset a link's color, so that it inherits the color from its parent, add the `.vds-link-reset` class. There won't be any hover effect at all. This is useful for links inside heading elements. You can also add the class to a parent element, and it will be applied to all `<a>` elements inside it.

```example
<a class="vds-link-reset" href="#">Link</a>

<h3><a class="vds-link-reset" href="#">Heading</a></h3>
```

***

## Toggle

To use an anchor as parent element and apply the link style on one of its child elements, just add the `.vds-link-toggle` class to the parent element and one of the `.vds-link-*` classes to the child element. For instance, you can link the whole card and still have the hover effect on the heading.

```html
<a class="vds-link-toggle" href="#">
    <span class="vds-link-heading"></span>
</a>
```

```example
<a href class="vds-display-block vds-card vds-card-body vds-card-default vds-link-toggle vds-width-medium">
    <h3 class="vds-card-title"><span class="vds-link-heading">Heading</span></h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</a>
```
