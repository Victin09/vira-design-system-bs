# Animation

<p class="vds-text-lead">A collection of smooth animations to use within your page.</p>

## Usage

Add one of the `.vds-animation-*` classes to any element. The animation is shown when the class is added, so usually immediately on page load. To show the animation at another point, for example when the element enters the viewport, you would add the class using JavaScript — with the [Scrollspy component](scrollspy.md) for instance. This is what happens in many of Vira Design System's components that make use of animations. All animations themselves are implemented with CSS, so they do not require JavaScript to play.

| Class                                                                                                                                              | Description                                                                                                                            |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| `.vds-animation-fade`                                                                                                                               | The element fades in.                                                                                                                  |
| `.vds-animation-scale-up`<br> `.vds-animation-scale-down`                                                                                            | The element fades in and scales up or down.                                                                                            |
| `.vds-animation-slide-top`<br> `.vds-animation-slide-bottom`  `.vds-animation-slide-left`<br> `.vds-animation-slide-right`                             | The element fades and slides in from the top, bottom, left or right by its own height or width.                                        |
| `.vds-animation-slide-top-small`<br> `.vds-animation-slide-bottom-small`   `.vds-animation-slide-left-small`<br> `.vds-animation-slide-right-small`    | The element fades and slides in from the top, bottom, left or right with a smaller distance which is specified by a fixed pixel value. |
| `.vds-animation-slide-top-medium`<br> `.vds-animation-slide-bottom-medium`  `.vds-animation-slide-left-medium`<br> `.vds-animation-slide-right-medium` | The element fades and slides in from the top, bottom, left or right with a medium distance which is specified by a fixed pixel value.  |
| `.vds-animation-kenburns`                                                                                                                           | The element scales very slowly up without fading in.                                                                                   |
| `.vds-animation-shake`                                                                                                                              | The element shakes.                                                                                                                    |
| `.vds-animation-stroke`                                                                                                                             | The SVG element strokes are drawn.                                                                                                     |

To toggle an animation on hover or focus, add the `.vds-animation-toggle` class to a parent element. Also add `tabindex="0"` to make the animation focusable through keyboard navigation and on touch devices.

```html
<div class="vds-animation-toggle" tabindex="0">
    <div class="vds-animation-fade"></div>
</div>
```

```example
<div class="vds-child-width-1-2 vds-child-width-1-4@s vds-grid-match" vds-grid>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-fade">
            <p class="vds-text-center">Fade</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-up">
            <p class="vds-text-center">Scale Up</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-down">
            <p class="vds-text-center">Scale Down</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-shake">
            <p class="vds-text-center">Shake</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-left">
            <p class="vds-text-center">Left</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-top">
            <p class="vds-text-center">Top</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-bottom">
            <p class="vds-text-center">Bottom</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-right">
            <p class="vds-text-center">Right</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-left-small">
            <p class="vds-text-center">Left Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-top-small">
            <p class="vds-text-center">Top Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-bottom-small">
            <p class="vds-text-center">Bottom Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-right-small">
            <p class="vds-text-center">Right Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-left-medium">
            <p class="vds-text-center">Left Medium</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-top-medium">
            <p class="vds-text-center">Top Medium</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-bottom-medium">
            <p class="vds-text-center">Bottom Medium</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-right-medium">
            <p class="vds-text-center">Right Medium</p>
        </div>
    </div>
</div>
```

***

## Reverse modifier

By default, all animations are incoming. To reverse any animation, add the `.vds-animation-reverse` class.

```html
<div class="vds-animation-fade vds-animation-reverse"></div>
```

```example
<div class="vds-child-width-1-2 vds-child-width-1-4@s vds-grid-match" vds-grid>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-fade vds-animation-reverse">
            <p class="vds-text-center">Fade</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-up vds-animation-reverse">
            <p class="vds-text-center">Scale Up</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-down vds-animation-reverse">
            <p class="vds-text-center">Scale Down</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-shake vds-animation-reverse">
            <p class="vds-text-center">Shake</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-left vds-animation-reverse">
            <p class="vds-text-center">Left</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-top vds-animation-reverse">
            <p class="vds-text-center">Top</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-bottom vds-animation-reverse">
            <p class="vds-text-center">Bottom</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-right vds-animation-reverse">
            <p class="vds-text-center">Right</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-left-small vds-animation-reverse">
            <p class="vds-text-center">Left Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-top-small vds-animation-reverse">
            <p class="vds-text-center">Top Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-bottom-small vds-animation-reverse">
            <p class="vds-text-center">Bottom Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-right-small vds-animation-reverse">
            <p class="vds-text-center">Right Small</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-left-medium vds-animation-reverse">
            <p class="vds-text-center">Left Medium</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-top-medium vds-animation-reverse">
            <p class="vds-text-center">Top Medium</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-bottom-medium vds-animation-reverse">
            <p class="vds-text-center">Bottom Medium</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-slide-right-medium vds-animation-reverse">
            <p class="vds-text-center">Right Medium</p>
        </div>
    </div>
</div>
```

***

## Fast modifier

To play animations at a faster speed, add the `.vds-animation-fast` class to the element.

```html
<div class="vds-animation-fade vds-animation-fast"></div>
```


```example
<div class="vds-width-1-3@s">
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-fast vds-animation-fade">
            <p class="vds-text-center">Fade</p>
        </div>
    </div>
</div>
```

***

## Origin modifiers

By default, scaling animations originate from the center. To modify this behavior, add one of the `.vds-transform-origin-*` classes from the [Utility component](utility.md#transform-origin).

```html
<div class="vds-animation-scale-up vds-transform-origin-bottom-right"></div>
```

```example
<div class="vds-child-width-1-3@s" vds-grid>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-up vds-transform-origin-bottom-right">
            <p class="vds-text-center">Bottom Right</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-up vds-transform-origin-top-center">
            <p class="vds-text-center">Top Center</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-card vds-card-default vds-card-body vds-animation-scale-up vds-transform-origin-bottom-center">
            <p class="vds-text-center">Bottom Center</p>
        </div>
    </div>
</div>
```

***

## Ken Burns

To add a simple Ken Burns effect, add the `.vds-animation-kenburns` class to any image. You can also apply the `.vds-animation-reverse` or one of the `.vds-transform-origin-*` classes from the [Utility component](utility.md#transform-origin) to modify the effect.

```html
<img class="vds-animation-kenburns" src="" width="" height="" alt="">
```

By default, the animation starts on page load. In this example we used the [Scrollspy](scrollspy.md) component, to toggle the effect when the image enters the view.

```example
<div class="vds-child-width-1-2@s vds-grid-small" vds-grid>
    <div>
        <div class="vds-overflow-hidden">
            <img src="images/dark.jpg" width="1800" height="1200" alt="Example image" vds-scrollspy="cls: vds-animation-kenburns; repeat: true">
        </div>
    </div>
    <div>
        <div class="vds-overflow-hidden">
            <img src="images/dark.jpg" width="1800" height="1200" alt="Example image" class="vds-animation-reverse vds-transform-origin-top-right" vds-scrollspy="cls: vds-animation-kenburns; repeat: true">
        </div>
    </div>
</div>
```

***

## SVG Strokes

The Animation component can be used to animate SVG strokes. The effect looks like the SVG strokes are drawn before your eyes. The SVG image has to be injected into the markup as an inline SVG. This can be done manually or using the [SVG component](svg.md).

The following example shows how to add the inline SVG manually. Since you have to know the exact length of the stroke, Vira Design System requires you to set the length in the custom property `--vds-animation-stroke`. In this example the stroke length is `46`.

```html
<svg class="vds-animation-stroke" style="--vds-animation-stroke: 46;" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="#000" stroke-width="1" d=""/>
</svg>
```

A much easier way is to use the [SVG component](svg.md) by adding `vds-svg="stroke-animation: true"` to the image element. It will calculate the stroke length and add the `--vds-animation-stroke` custom property automatically.

```html
<img src="" width="" height="" alt="" vds-svg="stroke-animation: true">
```

```example
<div class="vds-child-width-1-2@m vds-text-center" vds-grid>
    <div class="vds-animation-toggle" tabindex="0">
        <img class="vds-animation-stroke" src="images/strokes.svg" width="400" height="400" alt="" vds-svg="stroke-animation: true">
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <img class="vds-animation-stroke vds-animation-reverse" src="images/strokes.svg" width="400" height="400" alt="" vds-svg="stroke-animation: true">
    </div>
</div>
```
