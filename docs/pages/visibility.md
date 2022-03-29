# Visibility

<p class="vds-text-lead">Use responsive visibility classes to display or hide elements on different devices.</p>

## Usage

Add one of these classes to hide an element.

| Class           | Description                                                                                                                        |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `.vds-hidden`    | Hides the element on any device. This is more of a legacy class. The recommended way to do this, is to use the `hidden` attribute. |
| `.vds-invisible` | Hides the element without removing it from the document flow.                                                                      |

```html
<div hidden></div>

<div class="vds-invisible"></div>
```

***

## Responsive

This component provides responsive classes to hide or display elements on different viewports.

### Hidden

Add one of the `.vds-hidden-*` classes to hide the element from screens larger than a specified width.

| Class          | Description                                        |
|:---------------|:---------------------------------------------------|
| `vds-hidden@s`  | Only affects device widths of _640px_ and larger.  |
| `vds-hidden@m`  | Only affects device widths of _960px_ and larger.  |
| `vds-hidden@l`  | Only affects device widths of _1200px_ and larger. |
| `vds-hidden@xl` | Only affects device widths of _1600px_ and larger. |

```html
<!-- Hidden on tablets and larger -->
<div class="vds-hidden@m"></div>
```

**Note** In this example the green elements are hidden on screens that are larger than the defined breakpoint. Resize your browser window to see the effect.

```example
<div class="vds-grid-small vds-child-width-1-2 vds-child-width-1-4@s vds-text-center" vds-grid>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove vds-alert-success">✔ Small</div>
            <div class="vds-alert vds-position-cover vds-margin-remove vds-hidden@s">Small</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove vds-alert-success">✔ Medium</div>
            <div class="vds-alert vds-position-cover vds-margin-remove vds-hidden@m">Medium</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove vds-alert-success">✔ Large</div>
            <div class="vds-alert vds-position-cover vds-margin-remove vds-hidden@l">Large</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove vds-alert-success">✔ X-Large</div>
            <div class="vds-alert vds-position-cover vds-margin-remove vds-hidden@xl">X-Large</div>
        </div>
    </div>
</div>
```

***

### Visible

Use `.vds-visible-*` classes to show the element for screens larger than the specified width.

| Class           | Description                                        |
|:----------------|:---------------------------------------------------|
| `vds-visible@s`  | Only affects device widths of _640px_ and larger.  |
| `vds-visible@m`  | Only affects device widths of _960px_ and larger.  |
| `vds-visible@l`  | Only affects device widths of _1200px_ and larger. |
| `vds-visible@xl` | Only affects device widths of _1600px_ and larger. |

```html
<!-- Visible on tablets and larger -->
<div class="vds-visible@m"></div>
```

**Note** In this example the green elements are displayed on screens that are larger than the defined breakpoint. Resize your browser window to see the effect.

```example
<div class="vds-grid-small vds-child-width-1-2 vds-child-width-1-4@s vds-text-center" vds-grid>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove">Small</div>
            <div class="vds-alert vds-alert-success vds-position-cover vds-margin-remove vds-visible@s">✔ Small</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove">Medium</div>
            <div class="vds-alert vds-alert-success vds-position-cover vds-margin-remove vds-visible@m">✔ Medium</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove">Large</div>
            <div class="vds-alert vds-alert-success vds-position-cover vds-margin-remove vds-visible@l">✔ Large</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove">X-Large</div>
            <div class="vds-alert vds-alert-success vds-position-cover vds-margin-remove vds-visible@xl">✔ X-Large</div>
        </div>
    </div>
</div>
```

***

## Toggle

To display elements on hover or focus only, add the `.vds-visible-toggle` class to a parent element and one of the following classes to any child elements which should be hidden.

| Class                 | Description                                                    |
|:----------------------|:---------------------------------------------------------------|
| `.vds-hidden-hover`    | The element is removed from the document flow when hidden.     |
| `.vds-invisible-hover` | The element is not removed from the document flow when hidden. |

The child elements will be displayed when the parent element is hovered or focused. Add `tabindex="0"` to the parent element to allow it to receive focus through keyboard navigation and on touch devices.

If there are `a` or `button` elements within the hidden child element, they are already focusable through keyboard navigation and will make the child element appear. Therefore, add `tabindex="-1"` so the parent element is still focusable on touch devices.

```html
<div class="vds-visible-toggle" tabindex="0">
    <div class="vds-hidden-hover"></div>
</div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div class="vds-visible-toggle" tabindex="-1">

        <h4>Hidden when not hovered</h4>

        <div vds-grid>
            <div class="vds-width-expand">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="vds-width-auto">
                <ul class="vds-hidden-hover vds-iconnav">
                    <li><a href="#" vds-icon="icon: pencil"></a></li>
                    <li><a href="#" vds-icon="icon: copy"></a></li>
                    <li><a href="#" vds-icon="icon: trash"></a></li>
                </ul>
            </div>
        </div>

    </div>
    <div class="vds-visible-toggle" tabindex="-1">

        <h4>Invisible when not hovered</h4>

        <div vds-grid>
            <div class="vds-width-expand">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="vds-width-auto">
                <ul class="vds-invisible-hover vds-iconnav">
                    <li><a href="#" vds-icon="icon: pencil"></a></li>
                    <li><a href="#" vds-icon="icon: copy"></a></li>
                    <li><a href="#" vds-icon="icon: trash"></a></li>
                </ul>
            </div>
        </div>

    </div>
</div>
```

***

## Touch

Add the `.vds-hidden-touch` class to hide elements on touch devices and the `.vds-hidden-notouch` to hide elements on devices without a touch screen.

```html
<!-- Hidden on touch devices -->
<div class="vds-hidden-touch"></div>

<!-- Hidden on no-touch devices -->
<div class="vds-hidden-notouch"></div>
```

```example
<div class="vds-grid-small vds-child-width-1-2 vds-child-width-auto@s vds-text-center" vds-grid>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove vds-alert-success">✔ Hidden Touch</div>
            <div class="vds-alert vds-position-cover vds-margin-remove vds-hidden-touch">Hidden Touch</div>
        </div>
    </div>
    <div>
        <div class="vds-panel">
            <div class="vds-alert vds-margin-remove vds-alert-success">✔ Hidden No-Touch</div>
            <div class="vds-alert vds-position-cover vds-margin-remove vds-hidden-notouch">Hidden No-Touch</div>
        </div>
    </div>
</div>
```
