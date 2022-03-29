# Sticky

<p class="vds-text-lead">Make elements remain at the top of the viewport, like a sticky navigation.</p>

## Usage

To create an element that remains at the top of the viewport when scrolling down the site, add the `vds-sticky` attribute to that element.

```html
<div vds-sticky></div>
```

```example
<div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="bottom: ~ .vds-height-large">Stick to the top</div>

<div class="vds-height-large"></div>
```

**Note** Example elements on this page are only sticky until you scroll down to the next heading and disappear afterwards. This was done so as not to clutter your screen with all variations of sticky containers.

***

## Offset

You can position the element below the viewport edge. Add the `offset` attribute and the distance in pixels.

```html
<div vds-sticky="offset: 100"></div>
```

```example
<div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="offset: 100; bottom: ~ .vds-height-large">Stick 100px below the top</div>

<div class="vds-height-large"></div>
```

***

## Top

To apply the sticky behavior with a delay, add the `top` attribute, which can be defined either by a number representing the offset in pixels, but also viewport height or a CSS selector.

```html
<!-- Sticks after 100px of scrolling -->
<div vds-sticky="top: 100"></div>

<!-- Sticks after 100vh -->
<div vds-sticky="top: 100vh"></div>

<!-- Sticks to the top of the container -->
<div id="my-id">
    <div vds-sticky="top: #my-id"></div>
</div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="top: 200; bottom: ![vds-grid] ~ .vds-height-large">Stick to the top but only after 200px scrolling</div>
    </div>
    <div>
        <div id="container-1" class="vds-background-muted vds-height-medium">
            <div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="top: #container-1; bottom: ![vds-grid] ~ .vds-height-large">Stick to the top but below the box</div>
        </div>
    </div>
</div>

<div class="vds-height-large"></div>
```

***

## Animation

Add an animation from the [Animation component](animation.md) in order to have the sticky element reappear smoothly.

```html
<div vds-sticky="animation: vds-animation-slide-top"></div>
```

```example
<div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="top: 100; animation: vds-animation-slide-top; bottom: ~ .vds-height-large">Animation Slide Top</div>

<div class="vds-height-large"></div>
```

***

## Sticky on scroll up

You can make the sticky element show only when scrolling up to save space. Together with an animation, this makes for a very smooth experience.

```html
<div vds-sticky="show-on-up: true"></div>
```

```example
<div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="show-on-up: true; animation: vds-animation-slide-top; bottom: ~ .vds-height-large">Slide in on scroll up</div>

<div class="vds-height-large"></div>
```

***

## Bottom

Bind the sticky behavior to a specific element, so that it disappears after scrolling past that point of the page.

```html
<!-- Sticks until the bottom of its parent container -->
<div>
    <div vds-sticky="bottom: true"></div>
</div>

<!-- Sticks until the second container -->
<div vds-sticky="bottom: #my-id"></div>
<div id="my-id"></div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <div class="vds-background-muted vds-height-medium">
            <div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="bottom: true">Stick until the bottom of its parent container</div>
        </div>
    </div>
    <div>
        <div>
            <div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="bottom: #container-2">Stick until the next headline</div>
        </div>
    </div>
</div>

<h3 id="container-2" style="margin-top: 300px;">Some Headline</h3>

```

***

## Oversized Content

Sticky content that is larger than the viewport will scroll down and stick to the bottom of the viewport. Changing the scroll direction will immediately scroll the sticky content up and change the sticky behavior to stick to the top of the viewport.

```example
<div id="js-oversized" class="vds-child-width-1-2@s" vds-grid>
    <div>

        <div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="bottom: #js-oversized">
        
            <h3>Sticky 1</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 2</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 3</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 4</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 5</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </div>

    </div>
    <div>
        <div class="vds-background-muted vds-padding">

            <h3>Headline 1</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 2</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 3</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 4</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 5</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 6</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 7</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 8</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

    </div>
</div>

```

***

## Responsive

It's possible to disable the sticky behavior for different devices widths by applying the `media` option to the attribute and adding the appropriate viewport width. Add a number in pixel, for example `media: 640`, or a breakpoint, for example `media: @m`. The element will be sticky from the specified viewport width and upwards, but not below.

```html
<div vds-sticky="media: 640"></div>
```

***

## Position

By default, the element sticks to the top of the viewport. You can set the `position` option to use a different position. Possible values are as follows:

| Value     | Description                                                                                                               |
| :-------- | :------------------------------------------------------------------------------------------------------------------------ |
| `top`     | Stick to the top of the viewport.                                                                                         |
| `bottom ` | Stick to the bottom of the viewport.                                                                                      |
| `auto`    | Stick to the top of the viewport, but if the content is larger than the viewport, stick it to the bottom of the viewport. |

```html
<div vds-sticky="position: bottom"></div>
```

```example
<div class="vds-card vds-card-default vds-card-body" style="z-index: 980;" vds-sticky="position: bottom; bottom: ~ .vds-height-large">Sticky bottom</div>

<div class="vds-height-large"></div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option           | Value                                 | Default     | Description                                                                                                                                                              |
| :--------------- | :------------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `top`            | Number, viewport height, CSS selector | `0`         | The top offset from where the element should be stick.                                                                                                                   |
| `bottom `        | Boolean, CSS selector                 | `false`     | The bottom offset until the element should stick. If `bottom` is an element, its bottom offset will be used. (true: parent element, prefixed with '!' a parent selector) |
| `offset `        | String                                | `0`         | The offset the Sticky should be fixed to.                                                                                                                                |
| `animation `     | String                                | `false`     | The animation to use when the element becomes sticky.                                                                                                                    |
| `cls-active`     | String                                | `vds-active` | The active class.                                                                                                                                                        |
| `cls-inactive`   | String                                | `''`        | The inactive class.                                                                                                                                                      |
| `show-on-up`     | Boolean                               | `false`     | Only show sticky element when scrolling up.                                                                                                                              |
| `media `         | Number, String                        | `false`     | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).               |
| `target-offset ` | Boolean, Number                       | `false`     | Initially make sure that the Sticky is not over a targeted element via location hash.                                                                                    |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.sticky(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name       | Description                                  |
| :--------- | :------------------------------------------- |
| `active`   | Fires after the element becomes sticky.      |
| `inactive` | Fires after the element is no longer sticky. |
