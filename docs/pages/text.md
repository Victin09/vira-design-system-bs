# Text

<p class="vds-text-lead">A collection of utility classes to style text.</p>

Combine this component with the [Heading component](heading.md) to style your content.

## Style modifiers

Vira Design System offers various text utilities to style your text.

| Class           | Description                                                                                                           |
|:----------------|:----------------------------------------------------------------------------------------------------------------------|
| `.vds-text-lead` | <span class="vds-text-lead">Add this class to highlight text, for example in article subtitles.</span>                 |
| `.vds-text-meta` | <span class="vds-text-meta">Add this class to a paragraph which contains meta data about an article or similar.</span> |

***

## Font size

The following classes will modify the font size of your text.

| Class              | Description                                                                       |
|:-------------------|:----------------------------------------------------------------------------------|
| `.vds-text-small`   | <span class="vds-text-small">Add this class to decrease the font size.</span>      |
| `.vds-text-default` | <span class="vds-text-default">Add this class to set default the font size.</span> |
| `.vds-text-large`   | <span class="vds-text-large">Add this class to increase the font size.</span>      |

***

## Font weight

Add one of the following classes to modify the font weight of your text.

| Class              | Description                                                                         |
|:-------------------|:------------------------------------------------------------------------------------|
| `.vds-text-light`   | <span class="vds-text-light">Add this class to apply a font weight of `300`.</span>  |
| `.vds-text-normal`  | <span class="vds-text-normal">Add this class to apply a font weight of `400`.</span> |
| `.vds-text-bold`    | <span class="vds-text-bold">Add this class to apply a font weight of `700`.</span>   |
| `.vds-text-lighter` | <span class="vds-text-lighter">Add this class to apply a lighter font weight.</span> |
| `.vds-text-bolder`  | <span class="vds-text-bolder">Add this class to apply a bolder font weight.</span>   |

***

## Font style

Add the `.vds-text-italic` class to create <span class="vds-text-italic">italic text</span>.

***

## Text transform

The following classes will transform text into uppercased, capitalized or lowercased characters.

| Class                 | Description                                                                                  |
|:----------------------|:---------------------------------------------------------------------------------------------|
| `.vds-text-capitalize` | <span class="vds-text-capitalize">Add this class to transform your text to capitalize.</span> |
| `.vds-text-uppercase`  | <span class="vds-text-uppercase">Add this class to transform your text to uppercase.</span>   |
| `.vds-text-lowercase`  | <span class="vds-text-lowercase">Add this class to transform your text to lowercase.</span>   |

***

## Text decoration

Add the `.vds-text-decoration-none` class to remove any text decoration from a <a class="vds-text-decoration-none" href>link</a>.

***

## Text color

Use one of these classes to apply a different color to text elements.

| Class                | Description                                                                                       |
|:---------------------|:--------------------------------------------------------------------------------------------------|
| `.vds-text-muted`     | <span class="vds-text-muted">Add this class to mute text.</span>                                   |
| `.vds-text-emphasis`  | <span class="vds-text-emphasis">Add this class to emphasize text.</span>                           |
| `.vds-text-primary`   | <span class="vds-text-primary">Add this class to emphasize text with the primary color.</span>     |
| `.vds-text-secondary` | <span class="vds-text-secondary">Add this class to emphasize text with the secondary color.</span> |
| `.vds-text-success`   | <span class="vds-text-success">Add this class to indicate success.</span>                          |
| `.vds-text-warning`   | <span class="vds-text-warning">Add this class to indicate a warning.</span>                        |
| `.vds-text-danger`    | <span class="vds-text-danger">Add this class to indicate danger.</span>                            |

***

## Text background

To apply a gradient or background image to text, add the `.vds-text-background` class to a `<span>` element inside the text element. Styles that don't define a `background-image`, will apply the primary color.

```html
<h1><span class="vds-text-background"></span></h1>
```

***

## Text alignment

Add one of these useful classes to align your text.

| Class              | Description                |
|:-------------------|:---------------------------|
| `.vds-text-left`    | Aligns text to the left.   |
| `.vds-text-right`   | Aligns text to the right.  |
| `.vds-text-center`  | Centers text horizontally. |
| `.vds-text-justify` | Justifies text.            |

```example
<div class="vds-child-width-1-3@s vds-grid-small" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-small">
            <div class="vds-text-left vds-card-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>.vds-text-left</code>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-small">
            <div class="vds-text-right vds-card-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>.vds-text-right</code>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-small">
            <div class="vds-text-center vds-card-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>.vds-text-center</code>
            </div>
        </div>
    </div>
</div>
```

***

### Responsive

Vira Design System provides a number of responsive alignment classes. Basically, they work just like the usual alignment classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| Class                                                               | Description                                   |
|:--------------------------------------------------------------------|:----------------------------------------------|
| `.vds-text-left@s`<br> `.vds-text-center@s`<br> `.vds-text-right@s`    | Affects device widths of _640px_ and larger.  |
| `.vds-text-left@m`<br> `.vds-text-center@m`<br>   `.vds-text-right@m`  | Affects device widths of _960px_ and larger.  |
| `.vds-text-left@l`<br> `.vds-text-center@l`<br> `.vds-text-right@l`    | Affects device widths of _1200px_ and larger. |
| `.vds-text-left@xl`<br> `.vds-text-center@xl`<br> `.vds-text-right@xl` | Affects device widths of _1600px_ and larger. |

```example
<div class="vds-child-width-1-3@s vds-grid-small" vds-grid>
    <div>
        <div class="vds-card vds-card-default vds-card-small">
            <div class="vds-text-center@s vds-card-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>.vds-text-center@s</code>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-small">
            <div class="vds-text-right@l vds-card-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>.vds-text-right@l</code>
            </div>
        </div>
    </div>
    <div>
        <div class="vds-card vds-card-default vds-card-small">
            <div class="vds-text-center@m vds-card-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>.vds-text-center@m</code>
            </div>
        </div>
    </div>
</div>
```

***

### Vertical alignment

Add one of these classes to vertically align text to an object.

| Class               | Description                  |
|:--------------------|:-----------------------------|
| `.vds-text-top`      | Aligns text to the top.      |
| `.vds-text-middle`   | Centers text vertically.     |
| `.vds-text-bottom`   | Aligns text to the bottom.   |
| `.vds-text-baseline` | Aligns text to the baseline. |

```example
<div class="vds-child-width-1-3@m vds-child-width-1-2@s" vds-grid>
    <div>
        <img src="images/avatar.jpg" width="50" height="50">
        <span class="vds-text-top">Lorem ipsum.</span>
    </div>
    <div>
        <img src="images/avatar.jpg" width="50" height="50">
        <span class="vds-text-middle">Lorem ipsum.</span>
    </div>
    <div>
        <img src="images/avatar.jpg" width="50" height="50">
        <span class="vds-text-bottom">Lorem ipsum.</span>
    </div>
</div>
```

***

## Text wrapping

Add one of these useful classes to wrap your text.

| Class               | Description                                                                                        |
|:--------------------|:---------------------------------------------------------------------------------------------------|
| `.vds-text-truncate` | Prevents text from wrapping into multiple lines, truncating it and displaying an ellipsis instead. |
| `.vds-text-break`    | Breaks strings, if their length exceeds the width of their container.                              |
| `.vds-text-nowrap`   | Prevents text from wrapping into multiple lines.                                                   |

```example
<div class="vds-child-width-1-2@s" vds-grid>
    <div>
        <div class="vds-panel vds-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="vds-panel vds-text-break">Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.</div>
    </div>
</div>
```
