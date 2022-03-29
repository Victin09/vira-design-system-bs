# Scroll

<p class="vds-text-lead">Scroll smoothly when jumping to different sections on a page.</p>

## Usage

Simply add the `vds-scroll` attribute to any page-internal link that contains a URL fragment to add the smooth scrolling behavior.

```html
<a href="#my-id" vds-scroll></a>
```

```example
<a class="vds-button vds-button-primary" href="#target" vds-scroll>Scroll down</a>
```

***

## Callback after scroll

To receive a callback when scrolling has completed, you can listen to the `scrolled` event on the link element that triggered the scrolling.

```html
<a id="js-scroll-trigger" href="#my-id" vds-scroll></a>
```

```js
ViraDesignSystem.util.on('#js-scroll-trigger', 'scrolled', function () {
    alert('Done.');
});
```

```example
<a id="js-scroll-trigger" class="vds-button vds-button-primary" href="#target" vds-scroll>Down with callback</a>

<script>
    ViraDesignSystem.util.on('#js-scroll-trigger', 'scrolled', function () {
        alert('Done.');
    });
</script>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option     | Value  | Default | Description                         |
|:-----------|:-------|:--------|:------------------------------------|
| `offset`   | Number | `0`     | Pixel offset added to scroll top.   |

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.scroll(element, options);
```

<div style="height: 2000px;"></div>

<a id="target" class="vds-button vds-button-primary" href="#top" vds-scroll>Scroll up</a>

### Events

The following events will be triggered on elements with this component attached:

| Name           | Description                                                                                   |
|:---------------|:----------------------------------------------------------------------------------------------|
| `beforescroll` | Fires before scroll begins. Can prevent scrolling by calling `preventDefault()` on the event. |
| `scrolled`     | Fires after scrolling is finished.                                                            |


### Methods

The following methods are available for the component:

#### ScrollTo

```js
ViraDesignSystem.scroll(element).scrollTo(el);
```

Scroll to the given element.

| Name | Type           | Default   | Description               |
|:-----|:---------------|:----------|:--------------------------|
| `el` | Node, Selector | undefined | The element to scroll to. |
