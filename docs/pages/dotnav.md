# Dotnav

<p class="vds-text-lead">Create a dot navigation to operate slideshows or to scroll to different page sections.</p>

## Usage

To create a navigation with dots, use the following classes. This component is built with Flexbox. So to align a dotnav, you can use [Flex component](flex.md).

| Class         | Description                                                                                                         |
|:--------------|:--------------------------------------------------------------------------------------------------------------------|
| `.vds-dotnav`  | Add this class to a `<ul>` element to define the Dotnav component. Use `<a>` elements as nav items within the list. |
| `.vds-active ` | Add this class to a list item to apply an active state.                                                             |                                                         |

```html
<ul class="vds-dotnav">
    <li class="vds-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

```example
<ul class="vds-dotnav">
    <li class="vds-active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ul>
```

***

## Vertical alignment

The dotnav can also be displayed vertically. Just add the `.vds-dotnav-vertical` modifier.

```html
<ul class="vds-dotnav vds-dotnav-vertical">...</ul>
```

```example
<ul class="vds-dotnav vds-dotnav-vertical">
    <li class="vds-active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ul>
```


***

## Position as overlay

To position the dotnav on top of an element or the [Slideshow component](slideshow.md) for example, add one of the `.vds-position-*` classes from the [Position component](position.md) to a `div` element wrapping the dotnav. To create a position context on the container, add the `.vds-position-relative` class.

Use the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md) to apply a light or dark color for better visibility.

```html
<div class="vds-position-relative vds-light">

    <!-- The element which is wrapped goes here -->

    <div class="vds-position-bottom-center vds-position-small">
        <ul class="vds-dotnav">...</ul>
    </div>

</div>
```

```example
<div class="vds-position-relative vds-light" vds-slideshow>

    <ul class="vds-slideshow-items">
        <li>
            <img src="images/photo.jpg" alt="" vds-cover>
        </li>
        <li>
            <img src="images/dark.jpg" alt="" vds-cover>
        </li>
        <li>
            <img src="images/size1.jpg" alt="" vds-cover>
        </li>
    </ul>

    <div class="vds-position-bottom-center vds-position-small">
        <ul class="vds-dotnav">
            <li vds-slideshow-item="0"><a href="#">Item 1</a></li>
            <li vds-slideshow-item="1"><a href="#">Item 2</a></li>
            <li vds-slideshow-item="2"><a href="#">Item 3</a></li>
        </ul>
    </div>

</div>
```

***

## Vertically center in viewport

The dotnav can also be centered vertically inside your viewport by adding the `.vds-position-center-right` and `.vds-position-fixed` classes from the [Position component](position.md). This is useful for typical onepage websites.

```html
<div class="vds-position-center-right vds-position-medium vds-position-fixed">
    <ul class="vds-dotnav vds-dotnav-vertical">...</ul>
</div>
```
