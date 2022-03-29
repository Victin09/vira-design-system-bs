# Slidenav

<p class="vds-text-lead">Defines a navigation with previous and next buttons to flip through slideshows.</p>

## Usage

To create a navigation with previous and next buttons, just add the `vds-slidenav` attribute to `<a>` elements. Add the `previous` or `next` parameter to the attribute to style the nav items as previous or next buttons.

```html
<a href="" vds-slidenav-next></a>
<a href="" vds-slidenav-previous></a>
```

```example
<a href="#" vds-slidenav-previous></a>
<a href="#" vds-slidenav-next></a>
```

***

## Large modifier

To increase the size of the slidenav icons, add the `.vds-slidenav-large` class.

```html
<a href="" class="vds-slidenav-large" vds-slidenav-next></a>
<a href="" class="vds-slidenav-large" vds-slidenav-previous></a>
```

```example
<a href="#" class="vds-slidenav-large" vds-slidenav-previous></a>
<a href="#" class="vds-slidenav-large" vds-slidenav-next></a>
```

***

## Slidenav container

To display a conjoint slidenav, wrap the slidenav items inside a `<div>` element and add the `.vds-slidenav-container` class, as well as one of the `.vds-position-*` classes.

```html
<div class="vds-slidenav-container">
    <a href="" vds-slidenav-previous></a>
    <a href="" vds-slidenav-next></a>
</div>
```

```example
<div class="vds-slidenav-container">
    <a href="" vds-slidenav-previous></a>
    <a href="" vds-slidenav-next></a>
</div>
```

***

## Position as overlay

To position the slidenav on top of an element or the [Slideshow component](slideshow.md) for example, just add one of the `.vds-position-*` classes from the [Position component](position.md). To create a position context on the container, add the `.vds-position-relative` class.

Use the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md) to apply a light or dark color for better visibility.

```html
<div class="vds-position-relative vds-light">

    <!-- The element which is wrapped goes here -->

    <a class="vds-position-center-left" href="" vds-slidenav-previous></a>
    <a class="vds-position-center-right" href="" vds-slidenav-next></a>

</div>
```

**Note** You can also apply the [Visibility component](visibility.md#show-on-hover), so that the slidenav only appears on hover.

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow>

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

    <a class="vds-slidenav-large vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-slidenav-large vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```
