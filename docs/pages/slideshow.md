# Slideshow

<p class="vds-text-lead">Create a responsive slideshow with images and videos.</p>

The Slideshow component is fully responsive and supports touch and swipe navigation as well as mouse drag for desktops. When swiping between slides, the animation literally sticks at your fingertips or mouse cursor. It even accelerates to keep up with your pace when you click through previous and next navigation. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `vds-slideshow` attribute to a container element and create a list of slides with the `.vds-slideshow-items` class.

Add an image in the background of each slide using the `vds-cover` attribute from the [Cover component](cover.md).

```html
<div vds-slideshow>
    <ul class="vds-slideshow-items">
        <li>
            <img src="" alt="" vds-cover>
        </li>
    </ul>
</div>
```

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

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

**Note** To lazy load images in the slides, use the `loading="lazy"` attribute. The Slideshow will automatically remove the attribute from images in adjacent slides.

***

## Animations

By default, the slideshow uses a `slide` animation. You can set the `animation` option to use a different animation. Possible values are as follows:

| Animation | Description                        |
|:----------|:-----------------------------------|
| `slide`   | Slides slide in side by side.      |
| `fade`    | Slides fade in.                    |
| `scale`   | Slides are scaled up and fade out. |
| `pull`    | Slides are pulled from the deck.   |
| `push`    | Slides are pushed to the deck.     |


```html
<div vds-slideshow="animation: fade">...</div>
```

```example
<div class="vds-child-width-1-2@m" vds-grid>
    <div>

        <div class="vds-h3">Slide</div>

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

            <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
            <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="vds-h3">Fade</div>

        <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: fade">

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

            <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
            <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="vds-h3">Scale</div>

        <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: scale">

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

            <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
            <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="vds-h3">Pull</div>

        <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: pull">

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

            <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
            <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="vds-h3">Push</div>

        <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: push">

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

            <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
            <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

        </div>

    </div>
</div>
```

***

## Autoplay

To activate autoplay, just add the `autoplay: true` option to the attribute. You can also set the interval in milliseconds between switching slides using `autoplay-interval: 6000`. To pause autoplay when hovering the slideshow, use `pause-on-hover: true`.

```html
<div vds-slideshow="autoplay: true">...</div>
```

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, just add the `finite: true` option to the attribute.

```html
<div vds-slideshow="finite: true">...</div>
```

***

## Ratio

The slideshow always takes up the full width of its parent container. The height adapts according to the defined ratio. To change the default ratio of 16:9, just add the `ratio` option to the attribute. It's recommended to use the same ratio as the background images. For example, just use their width and height, like `1600:1200`.

```html
<div vds-slideshow="ratio: 7:3">...</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="ratio: 7:3; animation: push">

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

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

***

## Min/Max height

By default, the slideshow height adopts to the defined ratio. A minimum or maximum height can be set using the `min-height` and `max-height` options.

```html
<div vds-slideshow="min-height: 300; max-height: 600">...</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="min-height: 300; max-height: 600; animation: push">

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

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

***

## Viewport height

Adding the `vds-height-viewport` attribute from the [Height component](height.md#viewport-height) to the list of slideshow items will stretch the height to fill the whole viewport. You can set the `min-height` option to define a minimum height.

```html
<div vds-slideshow="ratio: false">
    <ul class="vds-slideshow-items" vds-height-viewport="min-height: 300">...</ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="ratio: false">

    <ul class="vds-slideshow-items" vds-height-viewport="offset-top: true; offset-bottom: 30">
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

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

**Note** This example is set to 70% of the viewport height.

***

## Navigation

To navigate through your slides, just use the `vds-slideshow-item` attribute. To target the slides, set the attribute of every nav item to the index number of the respective slideshow item. The elements with the `vds-slideshow-item` attribute need to be inside the `vds-slideshow` container. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div vds-slideshow>

    <ul class="vds-slideshow-items">...</ul>

    <a href="#" vds-slideshow-item="previous">...</a>
    <a href="#" vds-slideshow-item="next">...</a>

    <ul>
        <li vds-slideshow-item="0"><a href="#">...</a></li>
        <li vds-slideshow-item="1"><a href="#">...</a></li>
        <li vds-slideshow-item="2"><a href="#">...</a></li>
    </ul>

</div>
```

The flexibility of the Slideshow component allows you to use any of the other Vira Design System components to navigate through items. For example the [Slidenav](slidenav.md), [Dotnav](dotnav.md) and [Thumbnav](thumbnav.md) components can be used to style the slideshow navigations.

If there is no item specific content in the navigation items, you can also add the `.vds-slideshow-nav` class instead of adding navigation items manually. It will generate its items automatically using `<li><a href="#"></a></li>` as markup. This is a useful shortcut when using the [Dotnav](dotnav.md).

```html
<div vds-slideshow>

    <ul class="vds-slideshow-items">...</ul>

    <ul class="vds-slideshow-nav vds-dotnav"></ul>

</div>
```

```example
<div vds-slideshow="animation: push">

    <div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1">

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

        <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
        <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

    </div>

    <ul class="vds-slideshow-nav vds-dotnav vds-flex-center vds-margin"></ul>

</div>
```

**Note** For better visibility of overlaying navigations, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md).

***

## Videos

The slideshow is not restricted to images. Other media, like videos, can be positioned in the background of each slide using the `vds-cover` attribute from the [Cover component](cover.md). Videos are muted, and play automatically. The video will pause whenever it's not visible, and resume once it becomes visible again.

```html
<div vds-slideshow>
    <ul class="vds-slideshow-items">
        <li>
            <video src="" autoplay loop muted playsinline vds-cover></video>
        </li>
        <li>
            <iframe src="" vds-cover></iframe>
        </li>
    </ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: push">

    <ul class="vds-slideshow-items">
        <li>
            <img src="images/photo.jpg" alt="" vds-cover>
        </li>
        <li>
            <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" autoplay loop muted playsinline vds-cover></video>
        </li>
        <li>
            <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent&amp;playsinline=1" width="1920" height="1080" allowfullscreen vds-cover></iframe>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

***

## Ken Burns effect

To add a simple Ken Burns effect, wrap the image with a `div` and add the `.vds-position-cover` and `.vds-animation-kenburns` classes. You can also apply the `.vds-animation-reverse` or one of the `.vds-transform-origin-*` classes from the [Utility component](utility.md#transform-origin) to modify the effect.

```html
<div vds-slideshow>
    <ul class="vds-slideshow-items">
        <li>
            <div class="vds-position-cover vds-animation-kenburns vds-animation-reverse vds-transform-origin-center-left">
                <img src="" alt="" vds-cover>
            </div>
        </li>
    </ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: push">

    <ul class="vds-slideshow-items">
        <li>
            <div class="vds-position-cover vds-animation-kenburns vds-animation-reverse vds-transform-origin-center-left">
                <img src="images/photo.jpg" alt="" vds-cover>
            </div>
        </li>
        <li>
            <div class="vds-position-cover vds-animation-kenburns vds-animation-reverse vds-transform-origin-top-right">
                <img src="images/dark.jpg" alt="" vds-cover>
            </div>
        </li>
        <li>
            <div class="vds-position-cover vds-animation-kenburns vds-animation-reverse vds-transform-origin-bottom-left">
                <img src="images/light.jpg" alt="" vds-cover>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

***

## Content overlays

Add content overlays using the [Position component](position.md). It allows you to place the content anywhere inside the slide.

```html
<div vds-slideshow>
    <ul class="vds-slideshow-items">
        <li>
            <img src="" alt="" vds-cover>
            <div class="vds-position-center vds-position-small">

                <!-- The content goes here -->

            </div>
        </li>
    </ul>
</div>
```

**Note** To adapt your content for better visibility on each image, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md) or use the [Overlay](overlay.md) to add any style to the overlay box.

```example
<div class="vds-position-relative vds-visible-toggle" tabindex="-1" vds-slideshow="animation: push">

    <ul class="vds-slideshow-items">
        <li>
            <img src="images/photo.jpg" alt="" vds-cover>
            <div class="vds-position-center vds-position-small vds-text-center vds-light">
                <h2 class="vds-margin-remove">Center</h2>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="images/dark.jpg" alt="" vds-cover>
            <div class="vds-position-bottom vds-position-medium vds-text-center vds-light">
                <h3 class="vds-margin-remove">Bottom</h3>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="images/light.jpg" alt="" vds-cover>
            <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center">
                <h3 class="vds-margin-remove">Overlay Bottom</h3>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="images/dark.jpg" alt="" vds-cover>
            <div class="vds-overlay vds-overlay-default vds-position-bottom-right vds-position-small">
                <h3 class="vds-margin-remove">Overlay Bottom Right</h3>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
    </ul>

    <div class="vds-light">
        <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
        <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>
    </div>

</div>
```

***

## Content parallax

Add the `vds-slideshow-parallax` attribute to any element inside the slides to animate it together with the slideshow animation. Add an option with the desired animation values for each CSS property you want to animate. Define at least one start and end value. It can be done by passing two values separated by a comma.

This functionality is inherited from the [Parallax component](parallax.md), and it allows animating CSS properties depending on the scroll position of the slideshow animation. Take a look at the [possible properties](parallax.md#animated-properties) that can be animated.

```html
<div vds-slideshow>
    <ul class="vds-slideshow-items">
        <li>
            <img src="" alt="" vds-cover>
            <div class="vds-position-center vds-position-small">

                <div vds-slideshow-parallax="x: 100,-100">

                    <!-- The content goes here -->

                </div>

            </div>
        </li>
    </ul>
</div>
```

In the example above, the content will start at `100` and animate half way to `0` while the slide moves in. When the slide starts again to move out, the content will continue to animate to `-100`. This works because the start and end values have the same distance. For different distances, three values are needed: _Start_ (Slide animates in), _Middle_ (Slide is centered), _End_ (Slide animates out).

```html
<div vds-slideshow-parallax="x: 300,0,-100">...</div>
```

The next example defines different in and out animations. The content slides in by moving from `100` to `0` and fades out from `1` to `0`.

```html
<div vds-slideshow-parallax="x: 100,0,0; opacity: 1,1,0">...</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: push">

    <ul class="vds-slideshow-items">
        <li>
            <img src="images/photo.jpg" alt="" vds-cover>
            <div class="vds-position-center vds-position-small vds-text-center">
                <h2 vds-slideshow-parallax="x: 100,-100">Heading</h2>
                <p vds-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
        <li>
            <img src="images/dark.jpg" alt="" vds-cover>
            <div class="vds-position-center vds-position-small vds-text-center">
                <h2 vds-slideshow-parallax="x: 100,-100">Heading</h2>
                <p vds-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
        <li>
            <img src="images/light.jpg" alt="" vds-cover>
            <div class="vds-position-center vds-position-small vds-text-center">
                <h2 vds-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading</h2>
                <p vds-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

***

### Advanced effects

The parallax attribute can be used to add additional effects to the slideshow animations. In the following example the `push` animation is extended by dimming out and scaling down the image when it's sliding out.

```html
<div vds-slideshow="animation: push">
    <ul class="vds-slideshow-items">
        <li>
            <div class="vds-position-cover" vds-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="" alt="" vds-cover>
            </div>
            <div class="vds-position-cover" vds-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
        </li>
    </ul>
</div>
```

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: push">

    <ul class="vds-slideshow-items">
        <li>
            <div class="vds-position-cover" vds-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="images/photo.jpg" alt="" vds-cover>
            </div>
            <div class="vds-position-cover" vds-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="vds-position-center vds-position-medium vds-text-center">
                <div vds-slideshow-parallax="scale: 1,1,0.8">
                    <h2 vds-slideshow-parallax="x: 200,0,0">Heading</h2>
                    <p vds-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="vds-position-cover" vds-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="images/dark.jpg" alt="" vds-cover>
            </div>
            <div class="vds-position-cover" vds-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="vds-position-center vds-position-medium vds-text-center">
                <div vds-slideshow-parallax="scale: 1,1,0.8">
                    <h2 vds-slideshow-parallax="x: 200,0,0">Heading</h2>
                    <p vds-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="vds-position-cover" vds-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="images/light.jpg" alt="" vds-cover>
            </div>
            <div class="vds-position-cover" vds-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="vds-position-center vds-position-medium vds-text-center">
                <div vds-slideshow-parallax="scale: 1,1,0.8">
                    <h2 vds-slideshow-parallax="x: 200,0,0">Heading</h2>
                    <p vds-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

## Content transitions

Transition classes from the [Transition component](transition.md) are triggered automatically inside slides. Contrary to the parallax effect, transitions are not attached to the slideshow animation and start playing independently after the slideshow animation.

```html
<div vds-slideshow>
    <ul class="vds-slideshow-items">
        <li>
            <img src="" alt="" vds-cover>
            <div class="vds-position-bottom vds-position-small">

                <div class="vds-transition-slide-bottom">

                    <!-- The content goes here -->

                </div>

            </div>
        </li>
    </ul>
</div>
```

Together with the [Overlay component](overlay.md), content transitions are used to build a classic caption for the slideshow.

```example
<div class="vds-position-relative vds-visible-toggle vds-light" tabindex="-1" vds-slideshow="animation: fade">

    <ul class="vds-slideshow-items">
        <li>
            <img src="images/photo.jpg" alt="" vds-cover>
            <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                <h3 class="vds-margin-remove">Bottom</h3>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="images/dark.jpg" alt="" vds-cover>
            <div class="vds-overlay vds-overlay-primary vds-position-bottom vds-text-center vds-transition-slide-bottom">
                <h3 class="vds-margin-remove">Bottom</h3>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="images/light.jpg" alt="" vds-cover>
            <div class="vds-overlay vds-overlay-primary vds-position-right vds-text-center vds-transition-slide-right vds-width-medium">
                <h3 class="vds-margin-remove">Left</h3>
                <p class="vds-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
    </ul>

    <a class="vds-position-center-left vds-position-small vds-hidden-hover" href="#" vds-slidenav-previous vds-slideshow-item="previous"></a>
    <a class="vds-position-center-right vds-position-small vds-hidden-hover" href="#" vds-slidenav-next vds-slideshow-item="next"></a>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Slideshow

| Option              | Value           | Default | Description                                                           |
|:--------------------|:----------------|:--------|:----------------------------------------------------------------------|
| `animation`         | String          | `slide` | Slideshow animation mode: `slide`, `fade`, `scale`, `pull` or `push`. |
| `autoplay`          | Boolean         | `false` | Slideshow autoplays.                                                  |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                  |
| `draggable`         | Boolean         | `true ` | Enable pointer dragging.                                              |
| `easing`            | String          | `ease`  | The animation easing (CSS timing functions or cubic-bezier).          |
| `finite`            | Boolean         | `false` | Disable infinite sliding.                                             |
| `pause-on-hover`    | Boolean         | `true`  | Pause autoplay mode on hover.                                         |
| `index`             | Number          | `0`     | Slideshow item to show. 0 based index.                                |
| `velocity`          | Number          | `1`     | The animation velocity (pixel/ms).                                    |
| `ratio`             | Boolean, String | `16:9`  | The ratio. (`false` prevents height adjustment)                       |
| `min-height`        | Boolean, Number | `false` | The minimum height.                                                   |
| `max-height`        | Boolean, Number | `false` | The maximum height.                                                   |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.slideshow(element, options);
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
ViraDesignSystem.slideshow(element).show(index);
```

Shows the slideshow item.

#### startAutoplay

```js
ViraDesignSystem.slideshow(element).startAutoplay();
```

Starts the slideshow autoplay.

#### stopAutoplay

```js
ViraDesignSystem.slideshow(element).stopAutoplay();
```

Stops the slideshow autoplay.
