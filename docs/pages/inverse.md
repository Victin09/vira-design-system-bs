# Inverse

<p class="vds-text-lead">Inverse the style of any component for light or dark backgrounds.</p>

## Usage

Add the `.vds-light` class to improve the visibility of objects on dark backgrounds in a light style. When using a dark style, add the `.vds-dark` class to elements on a light background.

**Note** Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the `.vds-light` class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.

```html
<div class="vds-light"></div>

<div class="vds-dark"></div>
```

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <div class="vds-light vds-background-secondary vds-padding">
            <h3>Light</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="vds-button vds-button-default">Button</button>
        </div>
    </div>
    <div>
        <div class="vds-dark vds-background-muted vds-padding">
            <h3>Dark</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="vds-button vds-button-default">Button</button>
        </div>
    </div>
</div>
```

**Note** Some modifiers from the [Section](section.md), [Card](card.md), [Tile](tile.md), [Overlay](overlay.md) and [Off-canvas](offcanvas.md) component are extending the inverse style automatically, so you don't have to add any class.

***

## Customize using Less

The Inverse component includes additional styles to implement the flexible inverse behaviour. If your project does not make use of these styles, you can leave [disable the Inverse component](less.md#disable-inverse-component) when compiling Less.
