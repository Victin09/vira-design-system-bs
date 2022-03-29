# Cover

<p class="vds-text-lead">Expand images, videos or iframes to cover their entire container and place your own content on top.</p>

## Usage

To have an image cover its parent element, add the `.vds-cover-container` class to the parent and the `vds-cover` attribute to the image.

```html
<div class="vds-cover-container">
    <img src="" alt="" vds-cover>
</div>
```

**Note** To position content on top of the covering element, use the [Position component](position.md). To adapt your content for better visibility, add the `.vds-light` or `.vds-dark` class from the [Inverse component](inverse.md).

```example
<div class="vds-cover-container vds-height-medium">
    <img src="images/dark.jpg" alt="" vds-cover>
</div>
```

***

## Video

To create a video that covers its parent container, add the `vds-cover` attribute to a video. Wrap a container element around the video and add the `.vds-cover-container` class to clip the content.

The Cover component inherits all properties from the [Video component](video.md) which means videos are muted and play automatically. The video will pause whenever it's not visible and resume once it becomes visible again.

```html
<div class="vds-cover-container">
    <video vds-cover></video>
</div>
```

```example
<div class="vds-cover-container vds-height-medium">
    <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" autoplay loop muted playsinline vds-cover></video>
</div>
```

***

## Iframe

To apply the Cover component to an iframe, you need to add the `vds-cover` attribute to the iframe. Now add the `.vds-cover-container` class to a container element around the iframe to clip the content.

```html
<div class="vds-cover-container">
    <iframe src="" vds-cover></iframe>
</div>
```

```example
<div class="vds-cover-container vds-height-medium">
    <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="1920" height="1080" allowfullscreen vds-cover></iframe>
</div>
```

***

## Responsive height

To add responsive behavior to your cover image, you need to create an invisible `<canvas>` element and assign `width` and `height` values to it, according to the aspect ratio you want the covered area to have. That way it will adapt the responsive behavior of the image.

```html
<div class="vds-cover-container">
    <canvas width="" height=""></canvas>
    <img src="" alt="" vds-cover>
</div>
```

```example
<div class="vds-cover-container">
    <canvas width="400" height="200"></canvas>
    <img src="images/dark.jpg" alt="" vds-cover>
</div>
```

***

## Viewport height

Adding the `vds-height-viewport` attribute from the [Height component](height.md#viewport-height) will stretch the height of the parent element to fill the whole viewport.

```html
<div class="vds-cover-container" vds-height-viewport>
    <img src="" alt="" vds-cover>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option     | Value   | Default   | Description                           |
|:-----------|:--------|:----------|:--------------------------------------|
| `automute` | Boolean | true      | Tries to automute the iframe's video. |
| `width`    | Number  | undefined | The element's width.                  |
| `height`   | Number  | undefined | The element's height.                 |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.cover(element, options);
```
