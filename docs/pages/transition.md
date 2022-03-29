# Transition

<p class="vds-text-lead">Create smooth transitions between two states when hovering an element.</p>

## Usage

To toggle a transition on hover or focus, add the `.vds-transition-toggle` class to a parent element. Also add `tabindex="0"` to make the animation focusable through keyboard navigation and on touch devices. Add one of the `.vds-transition-*` classes to any child element to apply the actual effect.

| Class                                                                                                                                                      | Description                                                                        |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| `.vds-transition-fade`                                                                                                                                      | Lets the element fade in                                                           |
| `.vds-transition-scale-up`<br> `.vds-transition-scale-down`                                                                                                  | The element scales up or down.                                                     |
| `.vds-transition-slide-top`<br> `.vds-transition-slide-bottom`<br> `.vds-transition-slide-left`<br> `.vds-transition-slide-right`                              | Lets the element slide in from the top                                             |
| `.vds-transition-slide-top-small`<br> `.vds-transition-slide-bottom-small`<br>  `.vds-transition-slide-left-small`<br> `.vds-transition-slide-right-small`     | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.vds-transition-slide-top-medium`<br> `.vds-transition-slide-bottom-medium`<br>  `.vds-transition-slide-left-medium`<br> `.vds-transition-slide-right-medium` | The element slides in from the top, bottom, left or right with a medium distance.  |

This component is mostly used in combination with the [Overlay component](overlay.md) as elements are transitioned from invisible to visible state. To place the overlay on top of another element, like an image, use the [Position component](position.md).

```html
<div class="vds-transition-toggle" tabindex="0">
    <div class="vds-transition-fade"></div>
</div>
```

```example
<div class="vds-child-width-1-2 vds-child-width-1-3@s vds-grid-match vds-grid-small" vds-grid>
    <div class="vds-text-center">
        <div class="vds-inline-clip vds-transition-toggle" tabindex="0">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <div class="vds-transition-fade vds-position-cover vds-position-small vds-overlay vds-overlay-default vds-flex vds-flex-center vds-flex-middle">
                <p class="vds-h4 vds-margin-remove">Fade</p>
            </div>
        </div>
        <p class="vds-margin-small-top">Fade</p>
    </div>
    <div class="vds-text-center">
        <div class="vds-inline-clip vds-transition-toggle" tabindex="0">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <div class="vds-transition-slide-bottom vds-position-bottom vds-overlay vds-overlay-default">
                <p class="vds-h4 vds-margin-remove">Bottom</p>
            </div>
        </div>
        <p class="vds-margin-small-top">Bottom</p>
    </div>
    <div class="vds-text-center">
        <div class="vds-inline-clip vds-transition-toggle vds-light" tabindex="0">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <div class="vds-position-center">
                <span class="vds-transition-fade" vds-icon="icon: plus; ratio: 2"></span>
            </div>
        </div>
        <p class="vds-margin-small-top">Icon</p>
    </div>
    <div class="vds-text-center">
        <div class="vds-inline-clip vds-transition-toggle" tabindex="0">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <img class="vds-transition-scale-up vds-position-cover" src="images/light.jpg" alt="">
        </div>
        <p class="vds-margin-small-top">2 Images</p>
    </div>
    <div class="vds-text-center">
        <div class="vds-inline-clip vds-transition-toggle" tabindex="0">
            <img class="vds-transition-scale-up vds-transition-opaque" src="images/dark.jpg" width="1800" height="1200" alt="">
        </div>
        <p class="vds-margin-small-top">Scale Up Image</p>
    </div>
    <div class="vds-text-center">
        <div class="vds-inline-clip vds-transition-toggle vds-light" tabindex="0">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <div class="vds-position-center">
                <div class="vds-transition-slide-top-small"><h4 class="vds-margin-remove">Headline</h4></div>
                <div class="vds-transition-slide-bottom-small"><h4 class="vds-margin-remove">Subheadline</h4></div>
            </div>
        </div>
        <p class="vds-margin-small-top">Small Top + Bottom</p>
    </div>
</div>
```
