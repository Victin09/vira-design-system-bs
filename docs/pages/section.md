# Section

<p class="vds-text-lead">Create horizontal layout sections with different background colors and styles.</p>

## Usage

Sections are used to separate the content of a page into differently styled blocks. To apply this component, just add the `.vds-section` class to a container element. You can place a container from the [Container component](container.md) to modify the width of the content inside sections and add horizontal padding. Note that the padding of a nested container will be reset.

```html
<div class="vds-section">
    <div class="vds-container"></div>
</div>
```

By default, a section is blank. That is why it is important to add a modifier class for styling. In our example we are using the `.vds-section-muted` class. Normally, the section is the outermost element of a page, so this example doesn't quite reflect the realistic usage of this component.

```example
<div class="vds-section vds-section-muted">
    <div class="vds-container">

        <h3>Section</h3>

        <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>
```

***

## Style modifiers

To apply different background colors and paddings, add one of the following classes.

| Class                   | Description                                     |
|:------------------------|:------------------------------------------------|
| `.vds-section-default`   | Adds the default background color of your site. |
| `.vds-section-muted`     | Adds a muted background color.                  |
| `.vds-section-primary`   | Adds a primary background color.                |
| `.vds-section-secondary` | Adds a secondary background color.              |

```html
<div class="vds-section vds-section-primary"></div>
```

```example
<div class="vds-section vds-section-default">
    <div class="vds-container">

        <h3>Section Default</h3>

        <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="vds-section vds-section-muted">
    <div class="vds-container">

        <h3>Section Muted</h3>

        <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="vds-section vds-section-primary vds-light">
    <div class="vds-container">

        <h3>Section Primary</h3>

        <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="vds-section vds-section-secondary vds-light">
    <div class="vds-container">

        <h3>Section Secondary</h3>

        <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="vds-section-default">
    <div class="vds-section vds-light vds-background-cover" style="background-image: url(images/dark.jpg)">
        <div class="vds-container">

            <h3>Section with Images</h3>

            <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

        </div>
    </div>
</div>
```

***

### Preserve color

The `.vds-section-primary` and `.vds-section-secondary` classes are extending the inverse style from the [Inverse component](inverse.md) automatically. If you want to prevent this behavior, for example because you are using [cards](cards.md) in these sections, add the `.vds-preserve-color` class.

```html
<div class="vds-section vds-section-primary vds-preserve-color"></div>
```

```example
<div class="vds-section vds-section-primary vds-preserve-color">
    <div class="vds-container">

        <div class="vds-panel vds-light vds-margin-medium">
            <h3>Section Primary with cards</h3>
        </div>

        <div class="vds-grid-match vds-child-width-expand@m" vds-grid>
            <div>
                <div class="vds-card vds-card-default vds-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="vds-card vds-card-default vds-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

    </div>
</div>
```

***

## Size modifier

You can add different paddings to each section or remove it altogether.

| Class                         | Description                                                                            |
|:------------------------------|:---------------------------------------------------------------------------------------|
| `.vds-section-xsmall`          | Add this class to decrease a section's padding to a minimum.                           |
| `.vds-section-small`           | Add this class to decrease a section's padding.                                        |
| `.vds-section-large`           | Add this class to increase a section's padding.                                        |
| `.vds-section-xlarge`          | Add this class to further increase a section's padding.                                |
| `.vds-padding-remove-vertical` | Add this class from the [Padding component](padding.md) to remove a section's padding. |

```example
<div class="vds-section vds-section-large vds-section-muted">
    <div class="vds-container">

        <h3>Section Large</h3>

        <div class="vds-grid-match vds-child-width-1-3@m" vds-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
```

***

## Overlap modifier

Some Vira Design System themes use richer styles, including textured backgrounds and borders. In this case, you can add the `.vds-section-overlap` class, to apply a border image and a negative offset to the following section. Note that this only works in styles that implement the feature, if there are subsequent sections.

```html
<div class="vds-section vds-section-overlap"></div>
```
