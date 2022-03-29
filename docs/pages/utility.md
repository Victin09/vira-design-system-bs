# Utility

<p class="vds-text-lead">A collection of useful utility classes to style your content.</p>

## Panel

Vira Design System uses panels to outline certain sections of your content. These can be arranged in grid columns from the [Grid component](grid.md), for example.

Add the `.vds-panel` class to a `<div>` element to create a position context, set box-sizing to border-box, apply a clearfix and to remove the bottom margin of its last child element.

```example
<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <div class="vds-panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="vds-panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="vds-panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
</div>
```

***

### Scrollable panel

Add the `.vds-panel-scrollable` class to give the panel a fixed height and make it scrollable, if its content exceeds the height. You can also add one of the `.vds-height-*` [classes](height.md) to apply a different height.

```example
<div class="vds-panel vds-panel-scrollable">
    <ul class="vds-list">
        <li><label><input class="vds-checkbox" type="checkbox"> Category 1</label></li>
        <li>
            <label><input class="vds-checkbox" type="checkbox"> Category 2</label>
            <ul>
                <li><label><input class="vds-checkbox" type="checkbox"> Category 2.1</label></li>
                <li><label><input class="vds-checkbox" type="checkbox"> Category 2.2</label></li>
                <li>
                    <label><input class="vds-checkbox" type="checkbox"> Category 2.3</label>
                    <ul>
                        <li><label><input class="vds-checkbox" type="checkbox"> Category 2.3.1</label></li>
                        <li><label><input class="vds-checkbox" type="checkbox"> Category 2.3.2</label></li>
                    </ul>
                </li>
                <li><label><input class="vds-checkbox" type="checkbox"> Category 2.4</label></li>
            </ul>
        </li>
        <li><label><input class="vds-checkbox" type="checkbox"> Category 3</label></li>
        <li><label><input class="vds-checkbox" type="checkbox"> Category 4</label></li>
    </ul>

</div>
```

***

## Clearing and floating

Floating elements are taken from the document flow and aligned to the left or right side of their container. It is important to clear floats or in the worst case, you might end up with a scrambled site. The following classes will help you to set up basic layouts.

| Class             | Description                                                                                                                                                     |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.vds-float-left`  | Add this class to float the element to the left.                                                                                                                |
| `.vds-float-right` | Add this class to float the element to the right.                                                                                                               |
| `.vds-clearfix`    | Add this class to a parent container to clear floats. Alternatively, you can create a new block format context, e.g. by adding the `.vds-overflow-hidden` class. |


```example
<div class="vds-clearfix">
    <div class="vds-float-right">
        <div class="vds-card vds-card-default vds-card-body">Right</div>
    </div>
    <div class="vds-float-left">
        <div class="vds-card vds-card-default vds-card-body">Left</div>
    </div>
</div>
```

***

## Overflow

These utilities provide different classes to modify an element's overflow behavior.

| Class                 | Description                                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.vds-overflow-hidden` | Add this class to clip content that exceeds the dimensions of its container.                                                                                          |
| `.vds-overflow-auto`   | Add this class to create a container that provides a horizontal or vertical scrollbar whenever the elements content it are wider or higher than the container itself. |

**Note** The `.vds-overflow-auto` class is useful when having to handle tables on a responsive website, which at some point would just get too big. It also works great on `<pre>` elements.

```example
<div class="vds-overflow-auto vds-height-small">
    <table class="vds-table vds-table-striped vds-table-condensed vds-text-nowrap">
        <thead>
            <tr>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

***

## Overflow Auto

Add the `vds-overflow-auto` attribute to expand an element's height to make it fill the remaining height of a parent container. It provides a vertical scrollbar if its content is higher than the expanded height.

```example
<div class="vds-height-medium">
    <div class="js-wrapper">

        <p>Some content before the overflow auto container.</p>

        <div vds-overflow-auto="selContainer: .vds-height-medium; selContent: .js-wrapper">
            <div class="vds-grid-small" vds-grid>
                <div class="vds-width-1-2"><img src="images/light.jpg" width="1800" height="1200" alt=""></div>
                <div class="vds-width-1-2"><img src="images/dark.jpg" width="1800" height="1200" alt=""></div>
                <div class="vds-width-1-2"><img src="images/photo.jpg" width="1800" height="1200" alt=""></div>
                <div class="vds-width-1-2"><img src="images/photo2.jpg" width="1800" height="1200" alt=""></div>
            </div>
        </div>

        <p>Some content after the overflow auto container.</p>

    </div>
</div>
```

It's often used within the [Modal component](modal.md).

```html
<div id="my-id" vds-modal>
    <div class="vds-modal-dialog" vds-overflow-auto></div>
</div>
```

```example
<a class="vds-button vds-button-default" href="#modal-overflow" vds-toggle>Open</a>

<div id="modal-overflow" vds-modal>
    <div class="vds-modal-dialog">

        <button class="vds-modal-close-default" type="button" vds-close></button>

        <div class="vds-modal-header">
            <h2 class="vds-modal-title">Headline</h2>
        </div>

        <div class="vds-modal-body" vds-overflow-auto>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

        <div class="vds-modal-footer vds-text-right">
            <button class="vds-button vds-button-default vds-modal-close" type="button">Cancel</button>
            <button class="vds-button vds-button-primary" type="button">Save</button>
        </div>

    </div>
</div>
```

You can change the target heights by adding the `selContainer` and `selContent` options to the attribute. [Learn more](javascript.md#component-configuration)

| Option         | Value  | Default            | Description                                                                       |
| :------------- | :----- | :----------------- | :-------------------------------------------------------------------------------- |
| `selContainer` | String | `.vds-modal`        | CSS selector for the container element which provides the height.                 |
| `selContent`   | String | `.vds-modal-dialog` | CSS selector for the element which wraps the inner content to provide its height. |

***

## Resize

These utilities provide different classes for resizing elements.

| Class                 | Description                                                |
| :-------------------- | :--------------------------------------------------------- |
| `.vds-resize`          | Add this class to enable horizontal and vertical resizing. |
| `.vds-resize-vertical` | Add this class to enable only vertical resizing.           |

<p>Grab and drag the bottom right corner of each box below to resize it</p>

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <pre class="vds-resize-vertical">
            <code>
&lt;!-- Resize vertically --&gt;
&lt;div vds-grid&gt;
    &lt;div class="vds-width-1-2"&gt;...&lt;/div&gt;
    &lt;div class="vds-width-1-2"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="vds-child-width-1-2" vds-grid&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
            </code>
        </pre>
    </div>
    <div>
        <pre class="vds-resize">
            <code>
&lt;!-- Resize horizontally and vertically --&gt;
&lt;div vds-grid&gt;
    &lt;div class="vds-width-1-2"&gt;...&lt;/div&gt;
    &lt;div class="vds-width-1-2"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="vds-child-width-1-2" vds-grid&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
            </code>
        </pre>
    </div>
</div>
```

***

## Display

Add one of these classes to change the display properties of an element.

| Class                      | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| `.vds-display-block`        | Forces the element to behave like a block element.         |
| `.vds-display-inline`       | Forces the element to behave like an inline element.       |
| `.vds-display-inline-block` | Forces the element to behave like an inline-block element. |

***

## Inline

These classes are often used to create a position context on containers with an image as a child. The container keeps the same size as the image as well as the responsive behavior. That way content that is placed on top of the image with the [Position component](position.md) will not flow out of the image dimensions.

| Class             | Description                                                                                                            |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `.vds-inline`      | Add this class to apply inline-block behavior to an element, add a max-width of 100% and to create a position context. |
| `.vds-inline-clip` | Same as `.vds-inline`, it but also clips overflowing child elements.                                                    |

```html
<div class="vds-inline">
    <img src="" width="" height="" alt="">
    <div class="vds-position-cover"></div>
</div>
```

```example
<div class="vds-inline">
    <img src="images/photo.jpg" width="300" height="200" alt="">
    <div class="vds-position-medium vds-position-cover vds-overlay vds-overlay-default vds-flex vds-flex-center vds-flex-middle">Overlay</div>
</div>
```

***

## Responsive objects

In Vira Design System `<img>`, `<canvas>`, `<audio>` and `<video>` elements adapt to the width of their parent container by default. To apply responsive behavior to iframes, add the `vds-responsive` attribute . For other elements or to apply a different behavior, just add one of the following classes.

| Class                   | Description                                                                                                                                                                                                                                                                                                |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.vds-responsive-width`  | Add this class to apply the same responsive behavior to any other element. It adjusts the object's width according to its parent's width, keeping the original aspect ratio.                                                                                                                               |
| `.vds-responsive-height` | Add this class to adjust the object's height (instead of its width) according to its parent's height, keeping the original aspect ratio.                                                                                                                                                                   |
| `.vds-preserve-width`    | Add this class to avoid the default responsive behavior and preserve the original image dimensions. You can also add the class to a parent element and it will be applied to all relevant elements content it. If you are embedding Google Maps into your site, you may need this to fix the map's images. |

```html
<img class="vds-responsive-height" src="" width="" height="" alt="">

<iframe src="" width="" height="" vds-responsive></iframe>
```

***

## Object Fit and Position

Define how the content of an image or video should be resized to fit its element.

| Class                   | Description                                                                                                 |
| :---------------------- | :---------------------------------------------------------------------------------------------------------- |
| `.vds-object-cover`      | Scales the image by keeping its aspect ratio to completely cover the content box.                           |
| `.vds-object-contain`    | Scales the image by keeping its aspect ratio as far as its width and height can fit inside the content box. |
| `.vds-object-fill`       | Scales the image to fill the element's content box.                                                         |
| `.vds-object-none`       | Doesn't scale the image at all.                                                                             |
| `.vds-object-scale-down` | Like contain, but never up-scales.                                                                          |

**Note** Since images and video are responsive by default in UIki, it's mandatory to set the aspect ratio when using one of these classes.

```html
<img class="vds-object-cover" src="" width="1000" height="1000" alt="" style="aspect-ratio: 1 / 1">
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <img class="vds-object-cover" src="images/photo.jpg" width="1000" height="1000" alt="" style="aspect-ratio: 1 / 1;">
    </div>
    <div>
        <img class="vds-object-contain" src="images/photo.jpg" width="1000" height="1000" alt="" style="aspect-ratio: 1 / 1;">
    </div>
</div>
```

To modify the alignment of the image or video within its element, add one of the `vds-object-position-*` classes.

| Class                               | Description                |
| :---------------------------------- | :------------------------- |
| `.vds-object-position-top-left`      | Align to the top left.     |
| `.vds-object-position-top-center`    | Align to the top.          |
| `.vds-object-position-top-right`     | Align to the top right.    |
| `.vds-object-position-center-left`   | Align to the left.         |
| `.vds-object-position-center-center` | Align to the center.       |
| `.vds-object-position-center-right`  | Align to the right.        |
| `.vds-object-position-bottom-left`   | Align to the bottom left.  |
| `.vds-object-position-bottom-center` | Align to the bottom.       |
| `.vds-object-position-bottom-right`  | Align to the bottom right. |

***

## Border radius

To modify the border radius of an element, like an image, add one of the following classes.

| Class                | Description                              |
| :------------------- | :--------------------------------------- |
| `.vds-border-rounded` | Add this class to apply rounded corners. |
| `.vds-border-circle`  | Add this class to apply a circled shape. |
| `.vds-border-pill`    | Add this class to apply a pill shape.    |

```example
<img class="vds-border-rounded" src="images/avatar.jpg" width="200" height="200" alt="Border rounded">
<img class="vds-border-circle" src="images/avatar.jpg" width="200" height="200" alt="Border circle">
<img class="vds-border-pill" src="images/avatar.jpg" width="200" height="200" alt="Border pill">
```

***

## Box shadow

You can apply different box shadows to elements. Just add one of the following classes.

| Class                   | Description                                      |
| :---------------------- | :----------------------------------------------- |
| `.vds-box-shadow-small`  | Add this class to apply a small box shadow.      |
| `.vds-box-shadow-medium` | Add this class to apply a medium box shadow.     |
| `.vds-box-shadow-large`  | Add this class to apply a large box shadow.      |
| `.vds-box-shadow-xlarge` | Add this class to apply a very large box shadow. |

```html
<div class="vds-box-shadow-small"></div>
```

```example
<div class="vds-child-width-1-2@s vds-text-center" vds-grid>
    <div>
        <div class="vds-box-shadow-small vds-padding">Small</div>
    </div>

    <div>
        <div class="vds-box-shadow-medium vds-padding">Medium</div>
    </div>

    <div>
        <div class="vds-box-shadow-large vds-padding">Large</div>
    </div>

    <div>
        <div class="vds-box-shadow-xlarge vds-padding">X-Large</div>
    </div>
</div>
```

***

## Box shadow bottom

To apply a box shadow at the bottom of an element so that appears to be hovering, add the `.vds-box-shadow-bottom` class. This can also be combined with one of the other `.vds-box-shadow-*` modifiers.

```html
<div class="vds-box-shadow-bottom"></div>
```

```example
<div class="vds-box-shadow-bottom vds-box-shadow-small vds-width-1-2@s vds-text-center">
    <div class="vds-background-default vds-padding-large">
        Box shadow bottom
    </div>
</div>
```

***

### Hover

To apply a box shadow on hover, add one of the following classes. This can also be used to modify the shadow size on hover. To do so, just combine them with one of the classes above.

| Class                         | Description                                               |
| :---------------------------- | :-------------------------------------------------------- |
| `.vds-box-shadow-hover-small`  | Add this class to apply a small box shadow on hover.      |
| `.vds-box-shadow-hover-medium` | Add this class to apply a medium box shadow on hover.     |
| `.vds-box-shadow-hover-large`  | Add this class to apply a large box shadow on hover.      |
| `.vds-box-shadow-hover-xlarge` | Add this class to apply a very large box shadow on hover. |

```html
<div class="vds-box-shadow-hover-small"></div>
```

```example
<div class="vds-child-width-1-2@s vds-text-center" vds-grid>
    <div>
        <div class="vds-box-shadow-hover-small vds-padding">Hover Small</div>
    </div>

    <div>
        <div class="vds-box-shadow-hover-xlarge vds-padding">Hover X-Large</div>
    </div>

    <div>
        <div class="vds-box-shadow-small vds-box-shadow-hover-large vds-padding">Small + Hover Large</div>
    </div>

    <div>
        <div class="vds-box-shadow-xlarge vds-box-shadow-hover-medium vds-padding">X-Large + Hover Medium</div>
    </div>
</div>
```

***

## Drop cap

With the `.vds-dropcap` class you can achieve a drop cap within a text by adding it directly to the `<p>` element.

```example
<p class="vds-dropcap">Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

***

## Logo

With the new `.vds-logo` class you can easily define your logo, for example within your navbar.

```html
<a class="vds-logo" href=""></a>
```

```example
<a class="vds-logo" href="#">Logo</a>
```

Add the `.vds-light` class from the [Inverse component](inverse.md) when displaying the image on dark backgrounds, so that its color will automatically be inverted for better visibility.

```example
<div class="vds-panel vds-padding vds-background-secondary vds-light">
    <a class="vds-logo" href="#">Logo</a>
</div>
```

***

### Logo image

You can also use an `<img>` element, for example an SVG, as a logo.

```html
<a class="vds-logo" href="">
    <img src="" width="" height="" alt="">
</a>
```

You can even automatically display alternative logos for light and dark backgrounds by using the [Inverse component](inverse.md). Just add the `.vds-logo-inverse` class to a second logo image. Depending on the color mode, the inverted logo will be displayed when the `.vds-light` or `.vds-dark` class is applied to the parent element.

```html
<div class="vds-light">
    <a class="vds-logo" href="">
        <img src="" width="" height="" alt="">
        <img class="vds-logo-inverse" src="" width="" height="" alt="">
    </a>
</div>
```

```example
<div class="vds-child-width-expand@s" vds-grid>
    <div>
        <div class="vds-panel vds-padding vds-background-muted">
            <a class="vds-logo" href="#">
                <img src="images/logo-placeholder.svg" width="130" height="70" alt="">
                <img class="vds-logo-inverse" src="images/logo-placeholder-light.svg" width="130" height="70" alt="">
            </a>
        </div>
    </div>
    <div>
        <div class="vds-panel vds-padding vds-background-secondary vds-light">
            <a class="vds-logo" href="#">
                <img src="images/logo-placeholder.svg" width="130" height="70" alt="">
                <img class="vds-logo-inverse" src="images/logo-placeholder-light.svg" width="130" height="70" alt="">
            </a>
        </div>
    </div>
</div>
```

**Note** To inject an SVG logo as inline SVG, use the [SVG component](svg.md).

***

## Blend modes

Add one of the following classes to apply different blend modes to your backgrounds, for example when placing them on images. You can combine these with the [Overlay component](overlay.md). For a better understanding of how background blend modes work, take a look at this [CSS Tricks article](https://css-tricks.com/almanac/properties/b/background-blend-mode/).


| Class                   | Description                                    |
| :---------------------- | :--------------------------------------------- |
| `.vds-blend-multiply`    | This class sets the blend mode to multiply.    |
| `.vds-blend-screen`      | This class sets the blend mode to screen.      |
| `.vds-blend-overlay`     | This class sets the blend mode to overlay.     |
| `.vds-blend-darken`      | This class sets the blend mode to darken.      |
| `.vds-blend-lighten`     | This class sets the blend mode to lighten.     |
| `.vds-blend-color-dodge` | This class sets the blend mode to color dodge. |
| `.vds-blend-color-burn`  | This class sets the blend mode to color burn.  |
| `.vds-blend-hard-light`  | This class sets the blend mode to hard light.  |
| `.vds-blend-soft-light`  | This class sets the blend mode to soft light.  |
| `.vds-blend-difference`  | This class sets the blend mode to difference.  |
| `.vds-blend-exclusion`   | This class sets the blend mode to exclusion.   |
| `.vds-blend-hue`         | This class sets the blend mode to hue.         |
| `.vds-blend-saturation`  | This class sets the blend mode to saturation.  |
| `.vds-blend-color`       | This class sets the blend mode to color.       |
| `.vds-blend-luminosity`  | This class sets the blend mode to luminosity.  |

```html
<div class="vds-position-relative">
    <div class="vds-blend-multiply vds-overlay vds-overlay-primary"></div>
    <img src="" width="" height="" alt="">
</div>
```

```example
<div class="vds-child-width-1-2 vds-child-width-1-3@s vds-grid-small vds-light" vds-grid>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-multiply" src="images/dark.jpg" width="1800" height="1200" alt="Blend Multiply">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Multiply</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-screen" src="images/dark.jpg" width="1800" height="1200" alt="Blend Screen">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Screen</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-overlay" src="images/dark.jpg" width="1800" height="1200" alt="Blend Overlay">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Overlay</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-darken" src="images/dark.jpg" width="1800" height="1200" alt="Blend Darken">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Darken</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-lighten" src="images/dark.jpg" width="1800" height="1200" alt="Blend Lighten">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Lighten</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-color-dodge" src="images/dark.jpg" width="1800" height="1200" alt="Blend Color Dodge">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Color Dodge</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-color-burn" src="images/dark.jpg" width="1800" height="1200" alt="Blend Color Burn">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Color Burn</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-hard-light" src="images/dark.jpg" width="1800" height="1200" alt="Blend Hard Light">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Hard Light</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-soft-light" src="images/dark.jpg" width="1800" height="1200" alt="Blend Soft Light">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Soft Light</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-difference" src="images/dark.jpg" width="1800" height="1200" alt="Blend Difference">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Difference</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-exclusion" src="images/dark.jpg" width="1800" height="1200" alt="Blend Exclusion">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Exclusion</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-hue" src="images/dark.jpg" width="1800" height="1200" alt="Blend Hue">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Hue</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-saturation" src="images/dark.jpg" width="1800" height="1200" alt="Blend Saturation">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Saturation</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-color" src="images/dark.jpg" width="1800" height="1200" alt="Blend Color">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Color</p>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-background-primary">
            <img class="vds-blend-luminosity" src="images/dark.jpg" width="1800" height="1200" alt="Blend Luminosity">
            <div class="vds-position-center">
                <p class="vds-h4 vds-margin-remove">Luminosity</p>
            </div>
        </div>
    </div>
</div>
```

***

## Transform center

To center an element to itself, add the `vds-transform-center` class. This is particularly useful for absolute positioning.

```example
<div class="vds-inline">
    <img src="images/light.jpg" width="1800" height="1200" alt="">
    <a class="vds-position-absolute vds-transform-center" style="left: 50%; top: 50%" href="#" vds-marker></a>
</div>
```

***

## Transform origin

To modify the origin of an animation, like scaling, add one of the `vds-transform-origin-*` classes. This can be combined with the [Animation component](animation.md).

| Class                                | Description                                      |
| :----------------------------------- | :----------------------------------------------- |
| `.vds-transform-origin-top-left`      | The transition originates from the top left.     |
| `.vds-transform-origin-top-center`    | The transition originates from the top.          |
| `.vds-transform-origin-top-right`     | The transition originates from the top right.    |
| `.vds-transform-origin-center-left`   | The transition originates from the left.         |
| `.vds-transform-origin-center-right`  | The transition originates from the right.        |
| `.vds-transform-origin-bottom-left`   | The transition originates from the bottom left.  |
| `.vds-transform-origin-bottom-center` | The transition originates from the bottom.       |
| `.vds-transform-origin-bottom-right`  | The transition originates from the bottom right. |

```html
<div class="vds-transform-origin-bottom-right vds-animation-scale-up"></div>
```

```example
<div class="vds-child-width-1-3@m" vds-grid>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-transform-origin-bottom-right vds-card vds-card-default vds-card-body vds-animation-scale-up">
            <p class="vds-text-center">Bottom Right</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-transform-origin-top-center vds-card vds-card-default vds-card-body vds-animation-scale-up">
            <p class="vds-text-center">Top Center</p>
        </div>
    </div>
    <div class="vds-animation-toggle" tabindex="0">
        <div class="vds-transform-origin-bottom-center vds-card vds-card-default vds-card-body vds-animation-scale-up">
            <p class="vds-text-center">Bottom Center</p>
        </div>
    </div>
</div>
```

***

## Disabled

To disable the click behavior of any element, like a `<a>`, `<button>` or `<iframe>` element, add the `.vds-disabled` class.

```example
<a class="vds-disabled vds-button vds-button-default" href="#">Disabled</a>
```

***

## Drag

To apply a move cursor to elements that are being dragged, add the `.vds-drag` class.

```html
<div class="vds-drag"></div>
```

```example
<div class="vds-drag vds-width-small vds-padding vds-background-muted vds-text-center">
    <i vds-icon="icon: move; ratio: 2"></i>
</div>
```

To create a box shadow on an [upload area](upload.md) when dragging a file over it, add the `.vds-dragover` class.
