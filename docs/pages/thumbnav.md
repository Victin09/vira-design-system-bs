# Thumbnav

<p class="vds-text-lead">Create a flexible thumbnail navigation.</p>

## Usage

To create a navigation with thumbnails, use the following classes. This component is built with Flexbox. So to align a thumbnav, you can use [Flex component](flex.md).

| Class          | Description                                                                                                                            |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| `.vds-thumbnav` | Add this class to a `<ul>` element to define the Thumbnav component. Nest your thumbnail images inside `<a>` elements within the list. |
| `.vds-active `  | Add this class to a list item to apply an active state.                                                                                |

```html
<ul class="vds-thumbnav">
    <li class="vds-active"><a href=""><img src="" width="" height="" alt=""></a></li>
    <li><a href=""><img src="" alt=""></a></li>
</ul>
```

**Note** For a better layout, if items should wrap into the next row, add the `vds-margin` attribute from the [Margin component](margin.md).

```example
<ul class="vds-thumbnav" vds-margin>
    <li class="vds-active"><a href="#"><img src="images/photo.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="images/dark.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="images/light.jpg" width="100" height="67" alt=""></a></li>
</ul>
```

***

## Vertical alignment

The thumbnav can also be displayed vertically. Just add the `.vds-thumbnav-vertical` modifier.

```html
<ul class="vds-thumbnav vds-thumbnav-vertical">...</ul>
```

```example
<ul class="vds-thumbnav vds-thumbnav-vertical" vds-margin>
    <li class="vds-active"><a href="#"><img src="images/photo.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="images/dark.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="images/light.jpg" width="100" height="67" alt=""></a></li>
</ul>
```


***

## Position as overlay

To position the thumbnav on top of an element or the [Slideshow component](slideshow.md) for example, add one of the `.vds-position-*` classes from the [Position component](position.md) to a `div` element wrapping the thumbnav. To create a position context on the container, add the `.vds-position-relative` class.

```html
<div class="vds-position-relative">

    <!-- The element which is wrapped goes here -->

    <div class="vds-position-bottom-center vds-position-small">
        <ul class="vds-thumbnav">...</ul>
    </div>

</div>
```

```example
<div class="vds-position-relative" vds-slideshow="animation: fade">

    <ul class="vds-slideshow-items">
        <li>
            <img src="images/photo.jpg" alt="" vds-cover>
        </li>
        <li>
            <img src="images/dark.jpg" alt="" vds-cover>
        </li>
        <li>
            <img src="images/light.jpg" alt="" vds-cover>
        </li>
    </ul>

    <div class="vds-position-bottom-center vds-position-small">
        <ul class="vds-thumbnav">
            <li vds-slideshow-item="0"><a href="#"><img src="images/photo.jpg" width="100" height="67" alt=""></a></li>
            <li vds-slideshow-item="1"><a href="#"><img src="images/dark.jpg" width="100" height="67" alt=""></a></li>
            <li vds-slideshow-item="2"><a href="#"><img src="images/light.jpg" width="100" height="67" alt=""></a></li>
        </ul>
    </div>

</div>
```
