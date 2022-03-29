# Form

<p class="vds-text-lead">Easily create nice looking forms with different styles and layouts.</p>

## Usage

Add one of the following classes to form controls inside a `<form>` element to define them.

| Class          | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| `.vds-input`    | Add this class to `<input>` elements.                                      |
| `.vds-select`   | Add this class to `<select>` elements.                                     |
| `.vds-textarea` | Add this class to `<textarea>` elements.                                   |
| `.vds-radio`    | Add this class to `<input type="radio">` elements to create radio buttons. |
| `.vds-checkbox` | Add this class to `<input type="checkbox">` elements to create checkboxes. |
| `.vds-range`    | Add this class to `<input type="range">` elements to create range forms.   |

```html
<form>
    <select class="vds-select">
        <option></option>
        <option></option>
    </select>
    <textarea class="vds-textarea"></textarea>
    <input class="vds-radio" type="radio">
    <input class="vds-checkbox" type="checkbox">
    <input class="vds-range" type="range">
</form>
```

Add the `.vds-fieldset` class to a `<fieldset>` element and the `.vds-legend` class to a `<legend>` element to define a fieldset and a form legend.

```example
<form>
    <fieldset class="vds-fieldset">

        <legend class="vds-legend">Legend</legend>

        <div class="vds-margin">
            <input class="vds-input" type="text" placeholder="Input">
        </div>

        <div class="vds-margin">
            <select class="vds-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>

        <div class="vds-margin">
            <textarea class="vds-textarea" rows="5" placeholder="Textarea"></textarea>
        </div>

        <div class="vds-margin vds-grid-small vds-child-width-auto vds-grid">
            <label><input class="vds-radio" type="radio" name="radio2" checked> A</label>
            <label><input class="vds-radio" type="radio" name="radio2"> B</label>
        </div>

        <div class="vds-margin vds-grid-small vds-child-width-auto vds-grid">
            <label><input class="vds-checkbox" type="checkbox" checked> A</label>
            <label><input class="vds-checkbox" type="checkbox"> B</label>
        </div>

        <div class="vds-margin">
            <input class="vds-range" type="range" value="2" min="0" max="10" step="0.1">
        </div>

    </fieldset>
</form>
```

***

## States modifiers

Provide the user with basic information through feedback states on form controls by using one of the following classes.

| Class              | Description                                                        |
|:-------------------|:-------------------------------------------------------------------|
| `.vds-form-danger`  | Add this class to notify the user that the value is not validated. |
| `.vds-form-success` | Add this class to notify the user that the value is validated.     |

Add the `disabled` attribute to a form control. It will appear muted.

```example
<div class="vds-margin">
    <input class="vds-input vds-form-danger vds-form-width-medium" type="text" placeholder="form-danger" value="form-danger">
</div>

<div class="vds-margin">
    <input class="vds-input vds-form-success vds-form-width-medium" type="text" placeholder="form-success" value="form-success">
</div>

<div class="vds-margin">
    <input class="vds-input vds-form-width-medium" type="text" placeholder="disabled" value="disabled" disabled>
</div>
```

***

## Size modifiers

Add one of the classes to an `<input>`, `<select>` or `<textarea>` element to modify its size.

| Class            | Description                                 |
|:-----------------|:--------------------------------------------|
| `.vds-form-large` | Add this class to make the element larger.  |
| `.vds-form-small` | Add this class to make the element smaller. |

```example
<form>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-medium vds-form-large" type="text" placeholder="Large">
    </div>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-medium" type="text" placeholder="Default">
    </div>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-medium vds-form-small" type="text" placeholder="Small">
    </div>

</form>
```

***

## Width modifiers

Add one of the following classes to an `<input>`, `<select>` or `<textarea>` element to adjust its width.

| Class                   | Description                 |
|:------------------------|:----------------------------|
| `.vds-form-width-large`  | Applies a width of _500px_. |
| `.vds-form-width-medium` | Applies a width of _200px_. |
| `.vds-form-width-small`  | Applies a width of _130px_. |
| `.vds-form-width-xsmall` | Applies a width of _40px_.  |

```example
<form>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-large" type="text" placeholder="Large">
    </div>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-medium" type="text" placeholder="Medium">
    </div>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-small" type="text" placeholder="Small">
    </div>

    <div class="vds-margin">
        <input class="vds-input vds-form-width-xsmall" type="text" placeholder="X-Small">
    </div>

</form>
```

You can also apply the `.vds-width-*` classes from the [Width component](width.md) to form controls.

```example
<form>
    <input class="vds-input vds-width-1-2" type="text" placeholder="vds-width-1-2">
</form>
```

***

## Blank modifier

Add the `.vds-form-blank` class to minimize the styling of form controls.

```example
<form>
    <input class="vds-input vds-form-blank vds-form-width-medium" type="text" placeholder="Form blank">
</form>
```

***

## Layout

Define labels and controls and apply a stacked or horizontal layout to form elements. Layout modifiers can be added to any parent element like the `<fieldset>` element. This makes it possible to have different form layouts for each fieldset.

| Class                 | Description                                                 |
|:----------------------|:------------------------------------------------------------|
| `.vds-form-stacked`    | Add this class to display labels on top of controls.        |
| `.vds-form-horizontal` | Add this class to display labels and controls side by side. |
| `.vds-form-label`      | Add this class to define form labels.                       |
| `.vds-form-controls`   | Add this class to define form controls.                     |

```html
<form class="vds-form-stacked">
    <div>
        <label class="vds-form-label"></label>
        <div class="vds-form-controls">...</div>
    </div>
    <div>
        <div class="vds-form-label"></div>
        <div class="vds-form-controls">...</div>
    </div>
</form>
```

```example
<form class="vds-form-stacked">

    <div class="vds-margin">
        <label class="vds-form-label" for="form-stacked-text">Text</label>
        <div class="vds-form-controls">
            <input class="vds-input" id="form-stacked-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="vds-margin">
        <label class="vds-form-label" for="form-stacked-select">Select</label>
        <div class="vds-form-controls">
            <select class="vds-select" id="form-stacked-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

    <div class="vds-margin">
        <div class="vds-form-label">Radio</div>
        <div class="vds-form-controls">
            <label><input class="vds-radio" type="radio" name="radio1"> Option 01</label><br>
            <label><input class="vds-radio" type="radio" name="radio1"> Option 02</label>
        </div>
    </div>

</form>
```

***

### Horizontal form

Use the `.vds-form-controls-text` class to better align checkboxes and radio buttons when using them with text in a horizontal layout.

```html
<form class="vds-form-horizontal">
    <div>
        <label class="vds-form-label"></label>
        <div class="vds-form-controls">...</div>
    </div>
    <div>
        <div class="vds-form-label"></div>
        <div class="vds-form-controls vds-form-controls-text">...</div>
    </div>
</form>
```

```example
<form class="vds-form-horizontal vds-margin-large">

    <div class="vds-margin">
        <label class="vds-form-label" for="form-horizontal-text">Text</label>
        <div class="vds-form-controls">
            <input class="vds-input" id="form-horizontal-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="vds-margin">
        <label class="vds-form-label" for="form-horizontal-select">Select</label>
        <div class="vds-form-controls">
            <select class="vds-select" id="form-horizontal-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

    <div class="vds-margin">
        <div class="vds-form-label">Radio</div>
        <div class="vds-form-controls vds-form-controls-text">
            <label><input class="vds-radio" type="radio" name="radio1"> Option 01</label><br>
            <label><input class="vds-radio" type="radio" name="radio1"> Option 02</label>
        </div>
    </div>

</form>
```

***

## Form and icons

You use an icon from the [Icon component](icon.md) inside a form. Add the `.vds-form-icon` class to a `<span>` element. Group it with an `<input>` element by adding the `.vds-inline` class from the [Utility component](utility.md#inline) to a container element around both. The icon has to come first in the markup. By default, the icon will be placed on the left side of the form. To change the alignment, add the `.vds-form-icon-flip` class.

```html
<div class="vds-inline">
    <span class="vds-form-icon" vds-icon="icon: user"></span>
    <input class="vds-input">
</div>
```

```example
<form>

    <div class="vds-margin">
        <div class="vds-inline">
            <span class="vds-form-icon" vds-icon="icon: user"></span>
            <input class="vds-input" type="text">
        </div>
    </div>

    <div class="vds-margin">
        <div class="vds-inline">
            <span class="vds-form-icon vds-form-icon-flip" vds-icon="icon: lock"></span>
            <input class="vds-input" type="text">
        </div>
    </div>

</form>
```

***

### Clickable icons

To enable an action, for example opening a modal to pick an image or link, use an `<a>` or `<button>` element to create the icon.

```html
<div class="vds-inline">
    <a class="vds-form-icon vds-form-icon-flip" href="" vds-icon="icon: user"></a>
    <input class="vds-input">
</div>
```

```example
<form>

    <div class="vds-margin">
        <div class="vds-inline">
            <a class="vds-form-icon" href="#" vds-icon="icon: pencil"></a>
            <input class="vds-input" type="text">
        </div>
    </div>

    <div class="vds-margin">
        <div class="vds-inline">
            <a class="vds-form-icon vds-form-icon-flip" href="#" vds-icon="icon: link"></a>
            <input class="vds-input" type="text">
        </div>
    </div>

</form>
```

***

## Form and grid

You can also use the [Grid](grid.md) and [Width](width.md) components to define the layout of a form.

```example
<form class="vds-grid-small" vds-grid>
    <div class="vds-width-1-1">
        <input class="vds-input" type="text" placeholder="100">
    </div>
    <div class="vds-width-1-2@s">
        <input class="vds-input" type="text" placeholder="50">
    </div>
    <div class="vds-width-1-4@s">
        <input class="vds-input" type="text" placeholder="25">
    </div>
    <div class="vds-width-1-4@s">
        <input class="vds-input" type="text" placeholder="25">
    </div>
    <div class="vds-width-1-2@s">
        <input class="vds-input" type="text" placeholder="50">
    </div>
    <div class="vds-width-1-2@s">
        <input class="vds-input" type="text" placeholder="50">
    </div>
</form>
```

***

## Custom controls

To replace a file inputs or select forms with your own HTML content, like a button or text, add the `vds-form-custom` attribute to a container element.

### File

Use a button or text as a file input.

```html
<div vds-form-custom>
    <input type="file">
    <button type="button"></button>
</div>
```

```example
<form>

    <div class="vds-margin">
        <div vds-form-custom>
            <input type="file">
            <button class="vds-button vds-button-default" type="button" tabindex="-1">Select</button>
        </div>
    </div>

    <div class="vds-margin">
        <span class="vds-text-middle">Here is a text</span>
        <div vds-form-custom>
            <input type="file">
            <span class="vds-link">upload</span>
        </div>
    </div>

    <div class="vds-margin" vds-margin>
        <div vds-form-custom="target: true">
            <input type="file">
            <input class="vds-input vds-form-width-medium" type="text" placeholder="Select file" disabled>
        </div>
        <button class="vds-button vds-button-default">Submit</button>
    </div>

</form>
```

***

### Select

Use a button, text or a link as a select form. Just add the `target: SELECTOR` option to the `vds-form-custom` attribute to select where the option value should be displayed. `target: true` will select the adjacent element in the markup.

```html
<div vds-form-custom="target: true">
    <select>
        <option></option>
        <option></option>
    </select>
    <button type="button"></button>
</div>
```

```example
<form>

    <div class="vds-margin">
        <div vds-form-custom="target: true">
            <select>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <span></span>
        </div>
    </div>

    <div class="vds-margin">
        <div vds-form-custom="target: > * > span:last-child">
            <select>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <span class="vds-link">
                <span vds-icon="icon: pencil"></span>
                <span></span>
            </span>
        </div>
    </div>

    <div class="vds-margin">
        <div vds-form-custom="target: > * > span:first-child">
            <select>
                <option value="">Please select...</option>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <button class="vds-button vds-button-default" type="button" tabindex="-1">
                <span></span>
                <span vds-icon="icon: chevron-down"></span>
            </button>
        </div>
    </div>

</form>
```

***

## Component option

You can add this option to the `vds-form-custom` attribute. [Learn more](javascript.md#component-configuration)

| Option   | Value                 | Default | Description           |
|:---------|:----------------------|:--------|:----------------------|
| `target` | CSS selector, Boolean | false   | Value display target. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.formCustom(element, options);
```
