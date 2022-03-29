# Background

<p class="vds-text-lead">A collection of utility classes to add different backgrounds to elements.</p>

## Usage

To apply a background color to an element, add one of the following classes. The actual color for each modifier is defined by the Vira Design System style that you have chosen or customized.

| Class                       | Description                           |
| :-------------------------- | :------------------------------------ |
| `.vds-background-default`   | Applies the default background color. |
| `.vds-background-muted`     | Applies a muted background color.     |
| `.vds-background-primary`   | Applies the primary background color. |
| `.vds-background-secondary` | Applies a secondary background color. |

```html
<div class="vds-background-primary"></div>
```

**Note** To adapt your content for better visibility on each background, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md). Use the [Padding component](padding.md) to add some padding to the elements.

```example
<div class="vds-child-width-1-2@s vds-text-center" vds-grid>
    <div>
        <div class="vds-background-default vds-padding vds-panel">
            <p class="vds-h4">Default</p>
        </div>
    </div>
    <div>
        <div class="vds-background-muted vds-padding vds-panel">
            <p class="vds-h4">Muted</p>
        </div>
    </div>
    <div>
        <div class="vds-background-primary vds-light vds-padding vds-panel">
            <p class="vds-h4">Primary</p>
        </div>
    </div>
    <div>
        <div class="vds-background-secondary vds-light vds-padding vds-panel">
            <p class="vds-h4">Secondary</p>
        </div>
    </div>
</div>
```

---

## Size modifiers

This component features classes to specify the size of background images by keeping its intrinsic ratio.

| Class                        | Description                                                                                    |
| :--------------------------- | :--------------------------------------------------------------------------------------------- |
| `.vds-background-cover`      | Scales the background image to completely cover the containing area.                           |
| `.vds-background-contain`    | Scales the background image as far as its width and height can fit inside the containing area. |
| `.vds-background-width-1-1`  | Scales the background image to fill 100% of the available width.                               |
| `.vds-background-height-1-1` | Scales the background image to fill 100% of the available height.                              |

**Note** When using these classes, the background position automatically shifts to the middle and background-repeat is set to no-repeat.

```html
<div class="vds-background-cover"></div>
```

```example
<div class="vds-child-width-1-2@s vds-light" vds-grid>
    <div>
        <div class="vds-background-cover vds-height-medium vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/dark.jpg);">
            <p class="vds-h4">Cover</p>
        </div>
    </div>
    <div>
        <div class="vds-background-contain vds-background-muted vds-height-medium vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/dark.jpg);">
            <p class="vds-h4">Contain</p>
        </div>
    </div>
</div>
```

---

## Position modifiers

To alter the background position of your image — which is in the top left-hand corner of the area by default, add one of the following classes.

| Class                           | Description                                                           |
| :------------------------------ | :-------------------------------------------------------------------- |
| `.vds-background-top-left`      | The initial position of the image is in the top left hand corner.     |
| `.vds-background-top-center`    | The initial position of the image is at the top.                      |
| `.vds-background-top-right`     | The initial position of the image is in the top right hand corner.    |
| `.vds-background-center-left`   | The initial position of the image is on the left.                     |
| `.vds-background-center-center` | The initial position of the image is in the middle.                   |
| `.vds-background-center-right`  | The initial position of the image is on the right.                    |
| `.vds-background-bottom-left`   | The initial position of the image is in the bottom left hand corner.  |
| `.vds-background-bottom-center` | The initial position of the image is at the bottom.                   |
| `.vds-background-bottom-right`  | The initial position of the image is in the bottom right hand corner. |

```html
<div class="vds-background-top-left"></div>
```

```example
<div class="vds-child-width-1-2@s vds-light" vds-grid>
    <div>
        <div class="vds-background-top-right vds-background-cover vds-height-medium vds-panel vds-flex vds-flex-middle vds-flex-center" style="background-image: url(images/dark.jpg);">
            <p class="vds-h4">Top Right</p>
        </div>
    </div>
    <div>
        <div class="vds-background-top-left vds-background-cover vds-height-medium vds-panel vds-flex vds-flex-middle vds-flex-center" style="background-image: url(images/dark.jpg);">
            <p class="vds-h4">Top Left</p>
        </div>
    </div>
</div>
```

---

## No repeat

To keep smaller images from repeating to fill the background area, add the `.vds-background-norepeat` class.

```html
<div class="vds-background-norepeat"></div>
```

---

## Attachment

You can also apply a fixed background attachment, so that the image remains in its position while scrolling the site.

```html
<div class="vds-background-fixed"></div>
```

```example
<div class="vds-background-fixed vds-background-center-center vds-height-medium vds-width-large" style="background-image: url(images/dark.jpg);"></div>
```

---

## Responsive

Add one of the following classes to limit the display of background images to certain viewport sizes. This is great in cases where the image and content overlap on a phone screen in a way that would make text illegible.

| Class                      | Description                                                            |
| :------------------------- | :--------------------------------------------------------------------- |
| `.vds-background-image@s`  | Displays the background image on device widths of _640px_ and larger.  |
| `.vds-background-image@m`  | Displays the background image on device widths of _960px_ and larger.  |
| `.vds-background-image@l`  | Displays the background image on device widths of _1200px_ and larger. |
| `.vds-background-image@xl` | Displays the background image on device widths of _1600px_ and larger. |

```html
<div class="vds-background-image@m"></div>
```

Resize your browser window to see the effect in the example below.

```example
<div class="vds-background-image@m vds-background-cover vds-background-muted vds-height-medium vds-width-large vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/dark.jpg);">
    <p class="vds-h4 vds-margin-remove vds-visible@m vds-light">Image shown</p>
    <p class="vds-h4 vds-margin-remove vds-hidden@m">Image not shown</p>
</div>
```

---

## Blend modes

Add one of the following classes to apply different blend modes to your background image. You can combine these with the background color classes, as well. For a better understanding of how background blend modes work, take a look at this [CSS Tricks article](https://css-tricks.com/almanac/properties/b/background-blend-mode/).

| Class                               | Description                                    |
| :---------------------------------- | :--------------------------------------------- |
| `.vds-background-blend-multiply`    | This class sets the blend mode to multiply.    |
| `.vds-background-blend-screen`      | This class sets the blend mode to screen.      |
| `.vds-background-blend-overlay`     | This class sets the blend mode to overlay.     |
| `.vds-background-blend-darken`      | This class sets the blend mode to darken.      |
| `.vds-background-blend-lighten`     | This class sets the blend mode to lighten.     |
| `.vds-background-blend-color-dodge` | This class sets the blend mode to color dodge. |
| `.vds-background-blend-color-burn`  | This class sets the blend mode to color burn.  |
| `.vds-background-blend-hard-light`  | This class sets the blend mode to hard light.  |
| `.vds-background-blend-soft-light`  | This class sets the blend mode to soft light.  |
| `.vds-background-blend-difference`  | This class sets the blend mode to difference.  |
| `.vds-background-blend-exclusion`   | This class sets the blend mode to exclusion.   |
| `.vds-background-blend-hue`         | This class sets the blend mode to hue.         |
| `.vds-background-blend-saturation`  | This class sets the blend mode to saturation.  |
| `.vds-background-blend-color`       | This class sets the blend mode to color.       |
| `.vds-background-blend-luminosity`  | This class sets the blend mode to luminosity.  |

```html
<div class="vds-background-blend-multiply vds-background-primary"></div>
```

```example
<div class="vds-child-width-1-2 vds-child-width-1-3@s vds-grid-small vds-light" vds-grid>
    <div>
        <div class="vds-background-blend-multiply vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Multiply</p>
       </div>
    </div>
    <div>
        <div class="vds-background-blend-screen vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Screen</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-overlay vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Overlay</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-darken vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Darken</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-lighten vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Lighten</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-color-dodge vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Color Dodge</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-color-burn vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Color Burn</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-hard-light vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Hard Light</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-soft-light vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Soft Light</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-difference vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Difference</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-exclusion vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Exclusion</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-hue vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Hue</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-saturation vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Saturation</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-color vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Color</p>
        </div>
    </div>
    <div>
        <div class="vds-background-blend-luminosity vds-background-primary vds-background-cover vds-height-small vds-panel vds-flex vds-flex-center vds-flex-middle" style="background-image: url(images/photo.jpg);">
            <p class="vds-h4">Luminosity</p>
        </div>
    </div>
</div>
```
