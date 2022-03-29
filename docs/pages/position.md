# Position

<p class="vds-text-lead">A collection of utility classes to position content.</p>

## Usage

To apply this component, add one of the `.vds-position-*` classes to a block element. When using this component to place content on top of an image, add the `.vds-inline` class from the [Utility component](utility.md#inline) to a container element around the image and the element to create a position context.

**Note** This is often used to position an overlay from the [Overlay component](overlay.md). Use the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md) to apply a light or dark color for better visibility.

| Class                 | Description                          |
|:----------------------|:-------------------------------------|
| `.vds-position-top`    | Positions the element at the top.    |
| `.vds-position-left`   | Positions the element at the left.   |
| `.vds-position-right`  | Positions the element at the right.  |
| `.vds-position-bottom` | Positions the element at the bottom. |

```html
<div class="vds-inline">

    <!-- Place any content, like an image, here -->

    <div class="vds-position-center"></div>

</div>
```

```example
<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-top vds-overlay vds-overlay-default vds-text-center">Top</div>
    <div class="vds-position-bottom vds-overlay vds-overlay-default vds-text-center">Bottom</div>
    <div class="vds-position-left vds-overlay vds-overlay-default vds-flex vds-flex-middle">Left</div>
    <div class="vds-position-right vds-overlay vds-overlay-default vds-flex vds-flex-middle">Right</div>

</div>
```

***

### X and Y directions

You can also apply more specific positions that won't spread over one side of the parent container by adding one of the following classes.

| Class                        | Description                                              |
|:-----------------------------|:---------------------------------------------------------|
| `.vds-position-top-left`      | Positions the element at the top left.                   |
| `.vds-position-top-center`    | Positions the element at the top center.                 |
| `.vds-position-top-right`     | Positions the element at the top right.                  |
| `.vds-position-center`        | Positions the element vertically centered in the middle. |
| `.vds-position-center-left`   | Positions the element vertically centered on the left.   |
| `.vds-position-center-right`  | Positions the element vertically centered on the right.  |
| `.vds-position-bottom-left`   | Positions the element at the bottom left.                |
| `.vds-position-bottom-center` | Positions the element at the bottom center.              |
| `.vds-position-bottom-right`  | Positions the element at the bottom right.               |


```html
<div class="vds-position-top-right"></div>
```

```example
<div class="vds-inline">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-top-left vds-overlay vds-overlay-default">Top Left</div>
    <div class="vds-position-top-center vds-overlay vds-overlay-default">Top Center</div>
    <div class="vds-position-top-right vds-overlay vds-overlay-default">Top Right</div>
    <div class="vds-position-center-left vds-overlay vds-overlay-default">Center Left</div>
    <div class="vds-position-center vds-overlay vds-overlay-default">Center</div>
    <div class="vds-position-center-right vds-overlay vds-overlay-default">Center Right</div>
    <div class="vds-position-bottom-left vds-overlay vds-overlay-default">Bottom Left</div>
    <div class="vds-position-bottom-center vds-overlay vds-overlay-default">Bottom Center</div>
    <div class="vds-position-bottom-right vds-overlay vds-overlay-default">Bottom Right</div>

</div>
```

***

### Cover

If you want a position element to cover its container, just add the `.vds-position-cover` class.


```html
<div class="vds-position-cover"></div>
```

```example
<div class="vds-inline">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-cover vds-overlay vds-overlay-default vds-flex vds-flex-center vds-flex-middle">Cover</div>

</div>
```

***

### Outside

There are two classes to center elements outside on the left and right of the parent container. This is useful to position the [Slidenav component](slidenav.md) outside of a [Slideshow](slideshow.md) or [Slider](slider.md) component.

| Class                           | Description                                                     |
|:--------------------------------|:----------------------------------------------------------------|
| `.vds-position-center-left-out`  | Positions the element vertically centered outside on the left.  |
| `.vds-position-center-right-out` | Positions the element vertically centered outside on the right. |

**Note** Once the outside positioned element sticks out of the viewport to the right, it will cause a horizontal scrollbar. Use the [Visibility component](visibility.md) to hide the outside positioned element on a smaller viewports and show an inside positioned element instead.

```html
<div class="vds-position-center-left-out"></div>
```

```example
<div class="vds-inline">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-center-left-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>
    <div class="vds-position-center-right-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>

</div>
```

***

## Small modifier

To apply a small margin to positioned elements, add the `.vds-position-small` class.

```html
<div class="vds-position-small vds-position-center"></div>
```

```example
<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-small vds-position-top-left vds-overlay vds-overlay-default">Top Left</div>
    <div class="vds-position-small vds-position-top-center vds-overlay vds-overlay-default">Top Center</div>
    <div class="vds-position-small vds-position-top-right vds-overlay vds-overlay-default">Top Right</div>
    <div class="vds-position-small vds-position-center-left vds-overlay vds-overlay-default">Center Left</div>
    <div class="vds-position-small vds-position-center vds-overlay vds-overlay-default">Center</div>
    <div class="vds-position-small vds-position-center-right vds-overlay vds-overlay-default">Center Right</div>
    <div class="vds-position-small vds-position-bottom-left vds-overlay vds-overlay-default">Bottom Left</div>
    <div class="vds-position-small vds-position-bottom-center vds-overlay vds-overlay-default">Bottom Center</div>
    <div class="vds-position-small vds-position-bottom-right vds-overlay vds-overlay-default">Bottom Right</div>

</div>

<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-small vds-position-top vds-overlay vds-overlay-default vds-text-center">Top</div>
    <div class="vds-position-small vds-position-bottom vds-overlay vds-overlay-default vds-text-center">Bottom</div>
    <div class="vds-position-small vds-position-left vds-overlay vds-overlay-default vds-flex vds-flex-middle">Left</div>
    <div class="vds-position-small vds-position-right vds-overlay vds-overlay-default vds-flex vds-flex-middle">Right</div>

</div>

<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-small vds-position-cover vds-overlay vds-overlay-default vds-flex vds-flex-center vds-flex-middle">Cover</div>

</div>

<div class="vds-margin vds-text-center">
    <div class="vds-inline-block vds-width-large">

        <img src="images/photo.jpg" width="1800" height="1200" alt="">

        <div class="vds-position-small vds-position-center-left-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>
        <div class="vds-position-small vds-position-center-right-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>

    </div>
</div>
```

***

## Medium modifier

To apply a medium margin to positioned elements, add the `.vds-position-medium` class.

```html
<div class="vds-position-medium vds-position-center"></div>
```

```example
<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-medium vds-position-top-left vds-overlay vds-overlay-default">Top Left</div>
    <div class="vds-position-medium vds-position-top-center vds-overlay vds-overlay-default">Top Center</div>
    <div class="vds-position-medium vds-position-top-right vds-overlay vds-overlay-default">Top Right</div>
    <div class="vds-position-medium vds-position-center-left vds-overlay vds-overlay-default">Center Left</div>
    <div class="vds-position-medium vds-position-center vds-overlay vds-overlay-default">Center</div>
    <div class="vds-position-medium vds-position-center-right vds-overlay vds-overlay-default">Center Right</div>
    <div class="vds-position-medium vds-position-bottom-left vds-overlay vds-overlay-default">Bottom Left</div>
    <div class="vds-position-medium vds-position-bottom-center vds-overlay vds-overlay-default">Bottom Center</div>
    <div class="vds-position-medium vds-position-bottom-right vds-overlay vds-overlay-default">Bottom Right</div>

</div>

<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-medium vds-position-top vds-overlay vds-overlay-default vds-text-center">Top</div>
    <div class="vds-position-medium vds-position-bottom vds-overlay vds-overlay-default vds-text-center">Bottom</div>
    <div class="vds-position-medium vds-position-left vds-overlay vds-overlay-default vds-flex vds-flex-middle">Left</div>
    <div class="vds-position-medium vds-position-right vds-overlay vds-overlay-default vds-flex vds-flex-middle">Right</div>

</div>

<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-medium vds-position-cover vds-overlay vds-overlay-default vds-flex vds-flex-center vds-flex-middle">Cover</div>

</div>

<div class="vds-margin vds-text-center">
    <div class="vds-inline-block vds-width-large">

        <img src="images/photo.jpg" width="1800" height="1200" alt="">

        <div class="vds-position-medium vds-position-center-left-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>
        <div class="vds-position-medium vds-position-center-right-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>

    </div>
</div>
```

***

## Large modifier

To apply a large margin to positioned elements, add the `.vds-position-large` class.

```html
<div class="vds-position-large vds-position-center"></div>
```

```example
<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-large vds-position-top-left vds-overlay vds-overlay-default">Top Left</div>
    <div class="vds-position-large vds-position-top-center vds-overlay vds-overlay-default">Top Center</div>
    <div class="vds-position-large vds-position-top-right vds-overlay vds-overlay-default">Top Right</div>
    <div class="vds-position-large vds-position-center-left vds-overlay vds-overlay-default">Center Left</div>
    <div class="vds-position-large vds-position-center vds-overlay vds-overlay-default">Center</div>
    <div class="vds-position-large vds-position-center-right vds-overlay vds-overlay-default">Center Right</div>
    <div class="vds-position-large vds-position-bottom-left vds-overlay vds-overlay-default">Bottom Left</div>
    <div class="vds-position-large vds-position-bottom-center vds-overlay vds-overlay-default">Bottom Center</div>
    <div class="vds-position-large vds-position-bottom-right vds-overlay vds-overlay-default">Bottom Right</div>

</div>

<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-large vds-position-top vds-overlay vds-overlay-default vds-text-center">Top</div>
    <div class="vds-position-large vds-position-bottom vds-overlay vds-overlay-default vds-text-center">Bottom</div>
    <div class="vds-position-large vds-position-left vds-overlay vds-overlay-default vds-flex vds-flex-middle">Left</div>
    <div class="vds-position-large vds-position-right vds-overlay vds-overlay-default vds-flex vds-flex-middle">Right</div>

</div>

<div class="vds-inline vds-margin">

    <img src="images/photo.jpg" width="1800" height="1200" alt="">

    <div class="vds-position-large vds-position-cover vds-overlay vds-overlay-default vds-flex vds-flex-center vds-flex-middle">Cover</div>

</div>

<div class="vds-margin vds-text-center">
    <div class="vds-inline-block vds-width-large">

        <img src="images/photo.jpg" width="1800" height="1200" alt="">

        <div class="vds-position-large vds-position-center-left-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>
        <div class="vds-position-large vds-position-center-right-out vds-overlay vds-overlay-primary vds-visible@s">Out</div>

    </div>
</div>
```

***

## Utility classes

This component features a number of general position utility classes:

| Class                   | Description                                   |
|:------------------------|:----------------------------------------------|
| `.vds-position-relative` | Add this class to apply relative positioning. |
| `.vds-position-absolute` | Add this class to apply absolute positioning. |
| `.vds-position-fixed`    | Add this class to apply fixed positioning.    |
| `.vds-position-z-index`  | Add this class to apply a z-index of 1.       |
