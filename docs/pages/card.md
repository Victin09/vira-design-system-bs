# Card

<p class="vds-text-lead">Create layout boxes with different styles.</p>

## Usage

The Card component consists of the card itself, the card body and an optional card title. Typically, cards are arranged in grid columns from the [Grid component](grid.md).

| Class             | Description                                                                    |
| :---------------- | :----------------------------------------------------------------------------- |
| `.vds-card`       | Add this class to a `<div>` element to define the Card component.              |
| `.vds-card-body`  | Add this class to the card to create padding between the card and its content. |
| `.vds-card-title` | Add this class to a heading to define a card title.                            |

```html
<div class="vds-card vds-card-body">
  <h3 class="vds-card-title"></h3>
</div>
```

By default, a card is blank. That is why it is important to add a modifier class for styling. In our example we are using the `.vds-card-default` class.

```example
<div class="vds-card vds-card-default vds-card-body vds-width-1-2@m">
    <h3 class="vds-card-title">Default</h3>
    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

---

## Style modifiers

Vira Design System includes a number of modifiers that can be used to add a specific style to cards.

| Class                 | Description                                                                 |
| :-------------------- | :-------------------------------------------------------------------------- |
| `.vds-card-default`   | Add this class to create a visually styled box.                             |
| `.vds-card-primary`   | Add this class to modify the card and emphasize it with a primary color.    |
| `.vds-card-secondary` | Add this class to modify the card and give it a secondary background color. |

```html
<div class="vds-card vds-card-default"></div>

<div class="vds-card vds-card-primary"></div>

<div class="vds-card vds-card-secondary"></div>
```

```example
<div class="vds-child-width-1-3@m vds-grid-small vds-grid-match" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-body">
            <h3 class="vds-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-primary vds-card-body">
            <h3 class="vds-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-secondary vds-card-body">
            <h3 class="vds-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```

---

## Hover modifier

To create a hover effect on the card, add the `.vds-card-hover` class. This comes in handy when working with anchors and can be combined with the other card modifiers.

```html
<div class="vds-card vds-card-hover"></div>
```

```example
<div class="vds-child-width-1-2@s vds-grid-match" vds-grid>
    <div>
        <div class="vds-card vds-card-hover vds-card-body">
            <h3 class="vds-card-title">Hover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-hover vds-card-body">
            <h3 class="vds-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-primary vds-card-hover vds-card-body vds-light">
            <h3 class="vds-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-secondary vds-card-hover vds-card-body vds-light">
            <h3 class="vds-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```

---

## Size modifiers

You can apply different size modifiers to cards that will decrease or increase their padding.

| Class             | Description                                |
| :---------------- | :----------------------------------------- |
| `.vds-card-small` | Add this class to apply a smaller padding. |
| `.vds-card-large` | Add this class to apply a larger padding.  |

```html
<div class="vds-card vds-card-small vds-card-default"></div>

<div class="vds-card vds-card-large vds-card-default"></div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-small vds-card-body">
            <h3 class="vds-card-title">Small</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-large vds-card-body">
            <h3 class="vds-card-title">Large</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</div>
```

---

## Header & footer

You can also divide a card into header and footer — around the default body. Just add the `.vds-card-header` or `.vds-card-footer` class to a `<div>` element inside the card.

```html
<div class="vds-card">
  <div class="vds-card-header">
    <h3 class="vds-card-title"></h3>
  </div>
  <div class="vds-card-body"></div>
  <div class="vds-card-footer"></div>
</div>
```

```example
<div class="vds-card vds-card-default vds-width-1-2@m">
    <div class="vds-card-header">
        <div class="vds-grid-small vds-flex-middle" vds-grid>
            <div class="vds-width-auto">
                <img class="vds-border-circle" width="40" height="40" src="images/avatar.jpg">
            </div>
            <div class="vds-width-expand">
                <h3 class="vds-card-title vds-margin-remove-bottom">Title</h3>
                <p class="vds-text-meta vds-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div class="vds-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="vds-card-footer">
        <a href="#" class="vds-button vds-button-text">Read more</a>
    </div>
</div>
```

---

## Media

To display an image inside a card without any spacing, add one of the following classes to a `<div>` around the `<img>` element. Mind that you need to modify the source order accordingly.

| Class                    | Description                                                           |
| :----------------------- | :-------------------------------------------------------------------- |
| `.vds-card-media-top`    | This class indicates that the media element is aligned to the top.    |
| `.vds-card-media-bottom` | This class indicates that the media element is aligned to the bottom. |
| `.vds-card-media-left`   | This class indicates that the media element is aligned to the left.   |
| `.vds-card-media-right`  | This class indicates that the media element is aligned to the right.  |

```html
<div class="vds-card vds-card-default">
  <div class="vds-card-media-top">
    <img src="" width="" height="" alt="" />
  </div>
  <div class="vds-card-body"></div>
</div>
```

```example
<div class="vds-child-width-1-2@m" vds-grid>
    <div>
        <div class="vds-card vds-card-default">
            <div class="vds-card-media-top">
                <img src="images/light.jpg" width="1800" height="1200" alt="">
            </div>
            <div class="vds-card-body">
                <h3 class="vds-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default">
            <div class="vds-card-body">
                <h3 class="vds-card-title">Media Bottom</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="vds-card-media-bottom">
                <img src="images/light.jpg" width="1800" height="1200" alt="">
            </div>
        </div>
    </div>
</div>
```

---

### Horizontal alignment

The `.vds-card-media-left` or the `.vds-card-media-right` classes are used to reset border radius or similar where necessary. They don't create the actual layout.

To do that, you could for example add the `.vds-cover-container` class from the [Cover component](cover.md). Add the `vds-cover` attribute to the image element and use the [Grid](grid.md) and [Width](width.md) components to achieve the alignment. Create a `<canvas>` element with your image's width and height, so that it will retain its dimensions, if the grid stacks on smaller viewports. This is just one way of creating a side by side layout.

```html
<div class="vds-card vds-card-default vds-child-width-1-2" vds-grid>
  <div class="vds-card-media-left vds-cover-container">
    <img src="" alt="" vds-cover />
    <canvas width="" height=""></canvas>
  </div>
  <div>
    <div class="vds-card-body"></div>
  </div>
</div>
```

```example
<div class="vds-card vds-card-default vds-grid-collapse vds-child-width-1-2@s vds-margin" vds-grid>
    <div class="vds-card-media-left vds-cover-container">
        <img src="images/light.jpg" alt="" vds-cover>
        <canvas width="600" height="400"></canvas>
    </div>
    <div>
        <div class="vds-card-body">
            <h3 class="vds-card-title">Media Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>

<div class="vds-card vds-card-default vds-grid-collapse vds-child-width-1-2@s vds-margin" vds-grid>
    <div class="vds-flex-last@s vds-card-media-right vds-cover-container">
        <img src="images/light.jpg" alt="" vds-cover>
        <canvas width="600" height="400"></canvas>
    </div>
    <div>
        <div class="vds-card-body">
            <h3 class="vds-card-title">Media Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>
```

---

## Badge

To position a badge inside a card, add the `.vds-card-badge` class to a container element. To style the badge, you can use one of the other components, for example the [Label](label.md).

```html
<div class="vds-card vds-card-body">
  <div class="vds-card-badge vds-label"></div>
</div>
```

```example
<div class="vds-card vds-card-default vds-card-body vds-width-1-2@m">
    <div class="vds-card-badge vds-label">Badge</div>
    <h3 class="vds-card-title">Title</h3>
    <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```
