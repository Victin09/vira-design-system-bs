# Overlay

<p class="vds-text-lead">Create an image overlay, which comes in different styles.</p>

## Usage

Add the `.vds-overlay` class to an element following an image to create the overlay panel. To create a position context, add the `.vds-inline` class from the [Utility component](utility.md#inline) to a container element around both. Finally, add one of the `.vds-position-*` classes from the [Position component](position.md) to align the overlay.

```html
<div class="vds-inline">
    <img src="" width="" height="" alt="">
    <div class="vds-overlay vds-position-bottom"></div>
</div>
```

**Note** Add the `.vds-light` or `.vds-dark` class, so that elements will be optimized for better visibility on dark or light images.

```example
<div class="vds-inline">
    <img src="images/photo.jpg" width="1800" height="1200" alt="">
    <div class="vds-overlay vds-light vds-position-bottom">
        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
```

***

## Style modifiers

By default, the overlay has padding, but no additional styling. Add one of these modifier classes to add a background color to the overlay.

### Default

For a simple background color, add the `.vds-overlay-default` class.

```example
<div class="vds-child-width-1-2@m" vds-grid>
    <div>

        <div class="vds-inline">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay vds-overlay-default vds-position-bottom">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
    <div>

        <div class="vds-inline">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay-default vds-position-cover"></div>
            <div class="vds-overlay vds-position-bottom vds-dark">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
</div>
```

***

### Primary

For a prominent background color, add the `.vds-overlay-primary` class.

```example
<div class="vds-child-width-1-2@m" vds-grid>
    <div>

        <div class="vds-inline">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay vds-overlay-primary vds-position-bottom">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
    <div>

        <div class="vds-inline">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay-primary vds-position-cover"></div>
            <div class="vds-overlay vds-position-bottom vds-light">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
</div>
```

***

## Overlay icon

To display an overlay icon, add the `vds-overlay-icon` attribute to a `<span>` element inside the overlay.

```html
<div class="vds-position-center">
    <span vds-overlay-icon></span>
</div>
```

```example
<div class="vds-child-width-1-2@m" vds-grid>
    <div>

        <div class="vds-inline vds-light">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <div class="vds-position-center">
                <span vds-overlay-icon></span>
            </div>
        </div>

    </div>
    <div>

        <div class="vds-inline vds-dark">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay-default vds-position-cover">
                <div class="vds-position-center">
                    <span vds-overlay-icon></span>
                </div>
            </div>
        </div>

    </div>
</div>
```

***

## Position

Add one of the `.vds-position-*` classes from the [Position component](position.md) to align the overlay.

```html
<div class="vds-overlay vds-position-top"></div>
```

```example
<div class="vds-child-width-1-2@m" vds-grid>
    <div>
        <div class="vds-inline">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay vds-overlay-default vds-position-top">
                <p>Top</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
            <div class="vds-overlay vds-overlay-default vds-position-center">
                <p>Center</p>
            </div>
        </div>
    </div>
</div>
```
