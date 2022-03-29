# Container

<p class="vds-text-lead">This component allows you to align and center your page content.</p>

## Usage

Add the `.vds-container` class to a block element to give it a max-width and wrap the main content of your website. The element will be centered and have padding on the sides, that adapts automatically for large screens.

**Note** The padding of nested containers will be removed to avoid unnecessary spacing.

```html
<div class="vds-container"></div>
```

***

## Size modifiers

Add one of the following classes to the container to apply a different max-width.

| Class                  | Description                                                                                                    |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------|
| `.vds-container-xsmall` | Add this class for a xsmall container.                                                                         |
| `.vds-container-small`  | Add this class for a small container.                                                                          |
| `.vds-container-large`  | Add this class for a large container.                                                                          |
| `.vds-container-xlarge` | Add this class for a xlarge container.                                                                         |
| `.vds-container-expand` | Add this class, if you do not want to limit the container width but still want the dynamic horizontal padding. |

```html
<div class="vds-container vds-container-xsmall"></div>

<div class="vds-container vds-container-small"></div>

<div class="vds-container vds-container-large"></div>

<div class="vds-container vds-container-xlarge"></div>

<div class="vds-container vds-container-expand"></div>
```

***

## Container in sections

You can apply this component to modify the width of content inside sections from the [Section component](section.md).

```html
<div class="vds-section vds-section-primary">
    <div class="vds-container vds-container-small"></div>
</div>
```
