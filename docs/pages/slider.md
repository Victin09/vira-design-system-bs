# Slider

<p class="vds-text-lead">Create a responsive carousel slider.</p>

The Slider component is fully responsive and supports touch and swipe navigation as well as mouse drag for desktops. It even accelerates to keep up with your pace when you click through previous and next navigation. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `vds-slider` attribute to a container element and create a list of slides with the `.vds-slider-items` class. Add an image or any other content to each item.

To define the widths of the slider items, use the [Width component](width.md). Either apply the `.vds-child-width-*` classes to define the width of all slider items or apply individual widths for each list item using the `.vds-width-*` classes. If no specific width is set, each item's width depends on the dimensions of the content itself.

```html
<div vds-slider>
    <ul class="vds-slider-items vds-child-width-1-3@s vds-child-width-1-4@">
        <li>
            <img src="" width="" height="" alt="">
        </li>
    </ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider>

    <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@s vds-child-width-1-4@m">
        <li>
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

**Note** To lazy load images in the slides, use the `loading="lazy"` attribute. The Slider will automatically remove the attribute from images in adjacent slides.

***

## Container

The `.vds-slider-container` class is responsible for the clipping of the slider items. By default, the `vds-slider` attribute applies this class to the same element. Alternatively, you can add this class manually to any element within the slider. That way, you can control which container clips the slider items.

```html
<div vds-slider>

    <div class="vds-slider-container">
        <ul class="vds-slider-items vds-child-width-1-4">
            <li>
                <img src="" width="" height="" alt="">
            </li>
        </ul>
    </div>

</div>
```

Since the slider effect needs a clipping container, box shadows of content items are also clipped. To widen the container to prevent box-shadows from clipping, add the `.vds-slider-container-offset` class.

***

## Gap

To apply a gap to the slider items, use the [Grid component](grid.md) and add the `.vds-grid` class to the slider. The elements will then be spaced according to the grid gap. You can use the modifiers like `.vds-grid-small` to change the gap.

```html
<div vds-slider>
    <ul class="vds-slider-items vds-child-width-1-2@s vds-child-width-1-3@m vds-grid">
        <li>
            <img src="" width="" height="" alt="">
        </li>
    </ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider>

    <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@m vds-grid">
        <li>
            <div class="vds-panel">
                <img src="images/slider1.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>1</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider2.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>2</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider3.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>3</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider4.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>4</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider5.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>5</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider1.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>6</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider2.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>7</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider3.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>8</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider4.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>9</h1></div>
            </div>
        </li>
        <li>
            <div class="vds-panel">
                <img src="images/slider5.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>10</h1></div>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

***

## Center

By default, items of the slider always are aligned to the left. To center the list items, just add `center: true` to the attribute.

```html
<div vds-slider="center: true">...</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider="center: true">

    <ul class="vds-slider-items vds-grid">
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/photo.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>1</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/dark.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>2</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/light.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>3</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/photo2.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>4</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/photo3.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>5</h1></div>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

**Note** In this example, we add the `.vds-width-3-4` class to each item, which makes the slider look very similar to a slideshow.

***

## Autoplay

To activate autoplay, just add the `autoplay: true` option to the attribute. You can also set the interval in milliseconds between switching slides using `autoplay-interval: 6000`. To pause autoplay when hovering the slider, use `pause-on-hover: true`.

```html
<div vds-slider="autoplay: true">...</div>
```

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, just add the `finite: true` option to the attribute.

```html
<div vds-slider="finite: true">...</div>
```

***

## Slide Sets

To loop through a set of slides instead of single items, just add `sets: true` to the attribute.

```html
<div vds-slider="sets: true">...</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider="sets: true">

    <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@m">
        <li>
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

***

## Navigation

To navigate through your slides, just use the `vds-slider-item` attribute. To target the slides, set the attribute of every nav item to the index number of the respective slider item. The elements with the `vds-slider-item` attribute need to be inside the `vds-slider` container. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div vds-slider>

    <ul class="vds-slider-items">...</ul>

    <a href="#" vds-slider-item="previous">...</a>
    <a href="#" vds-slider-item="next">...</a>

    <ul>
        <li vds-slider-item="0"><a href="#">...</a></li>
        <li vds-slider-item="1"><a href="#">...</a></li>
        <li vds-slider-item="2"><a href="#">...</a></li>
    </ul>

</div>
```

The flexibility of the Slideshow component allows you to use any of the other Vira Design System components to navigate through items. For example the [Slidenav](slidenav.md), [Dotnav](dotnav.md) and [Thumbnav](thumbnav.md) components can be used to style the slideshow navigations.

If there is no item specific content in the navigation items, you can also add the `.vds-slider-nav` class instead of adding navigation items manually. It will generate its items automatically using `<li><a href="#"></a></li>` as markup. This is a useful shortcut when using the [Dotnav](dotnav.md).

```html
<div vds-slider>

    <ul class="vds-slider-items">...</ul

    <ul class="vds-slider-nav vds-dotnav"></ul>

</div>
```

```example
<div vds-slider>

    <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1">

        <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@s vds-child-width-1-4@m">
            <li>
                <img src="images/slider1.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>1</h1></div>
            </li>
            <li>
                <img src="images/slider2.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>2</h1></div>
            </li>
            <li>
                <img src="images/slider3.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>3</h1></div>
            </li>
            <li>
                <img src="images/slider4.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>4</h1></div>
            </li>
            <li>
                <img src="images/slider5.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>5</h1></div>
            </li>
            <li>
                <img src="images/slider1.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>6</h1></div>
            </li>
            <li>
                <img src="images/slider2.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>7</h1></div>
            </li>
            <li>
                <img src="images/slider3.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>8</h1></div>
            </li>
            <li>
                <img src="images/slider4.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>9</h1></div>
            </li>
            <li>
                <img src="images/slider5.jpg" width="400" height="600" alt="">
                <div class="vds-position-center vds-panel"><h1>10</h1></div>
            </li>
        </ul>

        <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
        <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

    </div>

    <ul class="vds-slider-nav vds-dotnav vds-flex-center vds-margin"></ul>

</div>
```

**Note** For better visibility of overlaying navigations, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md).

***

## Navigation outside

To place a navigation outside of a slider, add the `.vds-position-center-left-out` and the `.vds-position-center-right-out` class from the [Position component](position.md) to the `previous` and `next` navigation. Make sure the `.vds-slider-container` class, which is responsible for the clipping of the slider items, doesn't clip the navigation, too.

```html
<div vds-slider>

    <div class="vds-position-relative">

        <div class="vds-slider-container">
            <ul class="vds-slider-items">...</ul>
        </div>

        <a class="vds-position-center-left-out" href="#" vds-slider-item="previous">...</a>
        <a class="vds-position-center-right-out" href="#" vds-slider-item="next">...</a>

    </div>

    <ul class="vds-slider-nav vds-dotnav"></ul>

</div>
```

```example
<div vds-slider>

    <div class="vds-position-relative">

        <div class="vds-slider-container vds-light">
            <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@s vds-child-width-1-4@m">
                <li>
                    <img src="images/slider1.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>1</h1></div>
                </li>
                <li>
                    <img src="images/slider2.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>2</h1></div>
                </li>
                <li>
                    <img src="images/slider3.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>3</h1></div>
                </li>
                <li>
                    <img src="images/slider4.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>4</h1></div>
                </li>
                <li>
                    <img src="images/slider5.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>5</h1></div>
                </li>
                <li>
                    <img src="images/slider1.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>6</h1></div>
                </li>
                <li>
                    <img src="images/slider2.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>7</h1></div>
                </li>
                <li>
                    <img src="images/slider3.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>8</h1></div>
                </li>
                <li>
                    <img src="images/slider4.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>9</h1></div>
                </li>
                <li>
                    <img src="images/slider5.jpg" width="400" height="600" alt="">
                    <div class="vds-position-center vds-panel"><h1>10</h1></div>
                </li>
            </ul>
        </div>

        <div class="vds-hidden@s vds-light">
            <a class="vds-position-center-left vds-position-small" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
            <a class="vds-position-center-right vds-position-small" href="#" vds-slidenav-next vds-slider-item="next"></a>
        </div>

        <div class="vds-visible@s">
            <a class="vds-position-center-left-out vds-position-small" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
            <a class="vds-position-center-right-out vds-position-small" href="#" vds-slidenav-next vds-slider-item="next"></a>
        </div>

    </div>

    <ul class="vds-slider-nav vds-dotnav vds-flex-center vds-margin"></ul>

</div>
```

***

## Viewport height

Adding the `vds-height-viewport` attribute from the [Height component](height.md#viewport-height) to the list of slider items will stretch the height of the `<ul>` and `<li>` elements to fill the whole viewport height. Since the width and height now aren't defined by the item's content anymore, you have to use absolute positioning for the content.

Use the [Cover component](cover.md) so that images cover the whole item area and are clipped. The `.vds-grid-match` class from the [Grid component](grid.md#match-height) matches the height of the direct child of each item. This is useful in this example, since the child element now applies the same width and height as the list item.

```html
<div vds-slider>
    <ul class="vds-slider-items vds-child-width-1-3@m vds-grid-match" vds-height-viewport="min-height: 300">
        <li>
            <div class="vds-cover-container">
                <img src="" alt="" vds-cover>
            </div>
        </li>
    </ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider="center: true">

    <ul class="vds-slider-items vds-grid vds-grid-match" vds-height-viewport="offset-top: true; offset-bottom: 30">
        <li class="vds-width-3-4">
            <div class="vds-cover-container">
                <img src="images/photo.jpg" alt="" vds-cover>
                <div class="vds-position-center vds-panel"><h1>1</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-cover-container">
                <img src="images/dark.jpg" alt="" vds-cover>
                <div class="vds-position-center vds-panel"><h1>2</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-cover-container">
                <img src="images/light.jpg" alt="" vds-cover>
                <div class="vds-position-center vds-panel"><h1>3</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-cover-container">
                <img src="images/photo2.jpg" alt="" vds-cover>
                <div class="vds-position-center vds-panel"><h1>4</h1></div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-cover-container">
                <img src="images/photo3.jpg" alt="" vds-cover>
                <div class="vds-position-center vds-panel"><h1>5</h1></div>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

**Note** This example is set to 70% of the viewport height.

***

## Content

The slider is not restricted to images. Any content can be used like text, videos, images with text overlays or ken burns effect. Here is an example using the [Card component](card.md).

```example
<div class="vds-slider-container-offset" vds-slider>

    <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1">

        <ul class="vds-slider-items vds-child-width-1-2@s vds-grid">
            <li>
                <div class="vds-card vds-card-default">
                    <div class="vds-card-media-top">
                        <img src="images/photo.jpg" width="1800" height="1200" alt="">
                    </div>
                    <div class="vds-card-body">
                        <h3 class="vds-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="vds-card vds-card-default">
                    <div class="vds-card-media-top">
                        <img src="images/dark.jpg" width="1800" height="1200" alt="">
                    </div>
                    <div class="vds-card-body">
                        <h3 class="vds-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="vds-card vds-card-default">
                    <div class="vds-card-media-top">
                        <img src="images/light.jpg" width="1800" height="1200" alt="">
                    </div>
                    <div class="vds-card-body">
                        <h3 class="vds-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="vds-card vds-card-default">
                    <div class="vds-card-media-top">
                        <img src="images/photo2.jpg" width="1800" height="1200" alt="">
                    </div>
                    <div class="vds-card-body">
                        <h3 class="vds-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="vds-card vds-card-default">
                    <div class="vds-card-media-top">
                        <img src="images/photo3.jpg" width="1800" height="1200" alt="">
                    </div>
                    <div class="vds-card-body">
                        <h3 class="vds-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
        </ul>

        <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
        <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

    </div>

    <ul class="vds-slider-nav vds-dotnav vds-flex-center vds-margin"></ul>

</div>
```

**Note** Since the slider effect needs a clipping container, box shadows of content items are also clipped. To widen the container to prevent box-shadows from clipping, add the `.vds-slider-container-offset` class. Alternatively, use the `vds-slider="center: true"` mode if your content items have a box shadow.

***

## Content overlays

Add content overlays using the [Position component](position.md). It allows you to place the content anywhere inside the slide.

```html
<div vds-slider>
    <ul class="vds-slider-items">
        <li>
            <img src="" width="" height="" alt="">
            <div class="vds-position-center">

                <!-- The content goes here -->

            </div>
        </li>
    </ul>
</div>
```

**Note** To adapt your content for better visibility on each image, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md) or use the [Overlay](overlay.md) to add any style to the overlay box.

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider>

    <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@s vds-child-width-1-4@m">
        <li>
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

***

## Content parallax

Add the `vds-slider-parallax` attribute to any element inside the slides to animate it together with the slider animation. Add an option with the desired animation values for each CSS property you want to animate. Define at least one start and end value. It can be done by passing two values separated by a comma.

This functionality is inherited from the [Parallax component](parallax.md), and it allows animating CSS properties depending on the scroll position of the slider animation. Take a look at the [possible properties](parallax.md#animated-properties) that can be animated.

```html
<div vds-slider>
    <ul class="vds-slider-items">
        <li>
            <img src="" width="" height="" alt="">
            <div class="vds-position-center">

                <div vds-slider-parallax="x: 100,-100">

                    <!-- The content goes here -->

                </div>

            </div>
        </li>
    </ul>
</div>
```

In the example above, the content will start at `100` and animate half way to `0` while the slide moves in. When the slide starts again to move out, the content will continue to animate to `-100`. This works because the start and end values have the same distance. For different distances, three values are needed: _Start_ (Slide animates in), _Middle_ (Slide is centered), _End_ (Slide animates out).

```html
<div vds-slider-parallax="x: 300,0,-100">...</div>
```

The next example defines different in and out animations. The content slides in by moving from `100` to `0` and fades out from `1` to `0`.

```html
<div vds-slider-parallax="x: 100,0,0; opacity: 1,1,0">...</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider>

    <ul class="vds-slider-items vds-grid">
        <li class="vds-width-4-5">
            <div class="vds-panel">
                <img src="images/photo.jpg" width="1800" height="1200" alt="">
                <div class="vds-position-center vds-text-center">
                    <h2 vds-slider-parallax="x: 100,-100">Heading</h2>
                    <p vds-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-4-5">
            <div class="vds-panel">
                <img src="images/dark.jpg" width="1800" height="1200" alt="">
                <div class="vds-position-center vds-text-center">
                    <h2 vds-slider-parallax="x: 100,-100">Heading</h2>
                    <p vds-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-4-5">
            <div class="vds-panel">
                <img src="images/light.jpg" width="1800" height="1200" alt="">
                <div class="vds-position-center vds-text-center">
                    <h2 vds-slider-parallax="x: 100,-100">Heading</h2>
                    <p vds-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-4-5">
            <div class="vds-panel">
                <img src="images/photo2.jpg" width="1800" height="1200" alt="">
                <div class="vds-position-center vds-text-center">
                    <h2 vds-slider-parallax="x: 100,-100">Heading</h2>
                    <p vds-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-4-5">
            <div class="vds-panel">
                <img src="images/photo3.jpg" width="1800" height="1200" alt="">
                <div class="vds-position-center vds-text-center">
                    <h2 vds-slider-parallax="x: 100,-100">Heading</h2>
                    <p vds-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

***

## Content transitions

Add `clsActivated: vds-transition-active` to the attribute to trigger transition classes from the [Transition component](transition.md) automatically inside slides. Contrary to the parallax effect, transitions are not attached to the slider animation and start playing independently after the slider animation.


```html
<div vds-slider="clsActivated: vds-transition-active">
    <ul class="vds-slider-items">
        <li>
            <img src="" width="" height="" alt="">
            <div class="vds-position-bottom">

                <div class="vds-transition-slide-bottom">

                    <!-- The content goes here -->

                </div>

            </div>
        </li>
    </ul>
</div>
```

Together with the [Overlay component](overlay.md), content transitions are used to build a classic caption for the slider.

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slider="clsActivated: vds-transition-active; center: true">

    <ul class="vds-slider-items vds-grid">
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/photo.jpg" width="1800" height="1200" alt="">
                <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                    <h3 class="vds-margin-remove">Bottom</h3>
                    <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/dark.jpg" width="1800" height="1200" alt="">
                <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                    <h3 class="vds-margin-remove">Bottom</h3>
                    <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/light.jpg" width="1800" height="1200" alt="">
                <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                    <h3 class="vds-margin-remove">Bottom</h3>
                    <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/photo2.jpg" width="1800" height="1200" alt="">
                <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                    <h3 class="vds-margin-remove">Bottom</h3>
                    <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </li>
        <li class="vds-width-3-4">
            <div class="vds-panel">
                <img src="images/photo3.jpg" width="1800" height="1200" alt="">
                <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                    <h3 class="vds-margin-remove">Bottom</h3>
                    <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slider-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slider-item="next"></a>

</div>
```

***

### Toggle on hover

To toggle transitions on hover, use the `.vds-transition-toggle` class from the [Transition component](transition.md) and `tabindex="0"`. This will trigger the transition when the element is hovered or focused.

```html
<div vds-slider>
    <ul class="vds-slider-items">
        <li class="vds-transition-toggle" tabindex="0">
            <img src="" width="" height="" alt="">
            <div class="vds-position-bottom">

                <div class="vds-transition-slide-bottom">

                    <!-- The content goes here -->

                </div>

            </div>
        </li>
    </ul>
</div>
```

```example
<div vds-slider>

    <ul class="vds-slider-items vds-child-width-1-2 vds-child-width-1-3@s vds-child-width-1-4@m vds-light">
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">1</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">2</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">3</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">4</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">5</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider1.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">6</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider2.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">7</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider3.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">8</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider4.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">9</h1></div>
        </li>
        <li class="vds-transition-toggle" tabindex="0">
            <img src="images/slider5.jpg" width="400" height="600" alt="">
            <div class="vds-position-center vds-panel"><h1 class="vds-transition-slide-bottom-small">10</h1></div>
        </li>
    </ul>

    <ul class="vds-slider-nav vds-dotnav vds-flex-center vds-margin"></ul>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Slider

| Option              | Value   | Default | Description                                                  |
|:--------------------|:--------|:--------|:-------------------------------------------------------------|
| `autoplay`          | Boolean | `false` | Slider autoplays.                                            |
| `autoplay-interval` | Number  | `7000`  | The delay between switching slides in autoplay mode.         |
| `center`            | Boolean | `false` | Center the active slide.                                     |
| `draggable`         | Boolean | `true ` | Enable pointer dragging.                                     |
| `easing`            | String  | `ease`  | The animation easing (CSS timing functions or cubic-bezier). |
| `finite`            | Boolean | `false` | Disable infinite sliding.                                    |
| `index`             | Number  | `0`     | Slider item to show. 0 based index.                          |
| `pause-on-hover`    | Boolean | `true`  | Pause autoplay mode on hover.                                |
| `sets`              | Boolean | `false` | Slide in sets.                                               |
| `velocity`          | Number  | `1`     | The animation velocity (pixel/ms).                           |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.slider(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name             | Description                                               |
|:-----------------|:----------------------------------------------------------|
| `beforeitemshow` | Fires before an item is shown.                            |
| `itemshow`       | Fires after an item is shown.                             |
| `itemshown`      | Fires after an item's show animation has completed.       |
| `beforeitemhide` | Fires before an item is hidden.                           |
| `itemhide`       | Fires after an item's hide animation has started.         |
| `itemhidden`     | Fires after an item's hide animation has completed.       |

### Methods

The following methods are available for the component:

#### Show

```js
ViraDesignSystem.slider(element).show(index);
```

Shows the slider item.

#### startAutoplay

```js
ViraDesignSystem.slider(element).startAutoplay();
```

Starts the slider autoplay.

#### stopAutoplay

```js
ViraDesignSystem.slider(element).stopAutoplay();
```

Stops the slider autoplay.
