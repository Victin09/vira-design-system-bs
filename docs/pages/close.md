# Close

<p class="vds-text-lead">Create a close icon that can be combined with different components.</p>

## Usage

To apply this component, add the `vds-close` attribute to an `<a>` or `<button>` element.


```html
<button type="button" vds-close></button>

<a href="" vds-close></a>
```

```example
<button type="button" vds-close></button>
```

***

## Large modifier

Add the `.vds-close-large` class for a larger close button.


```html
<button class="vds-close-large" type="button" vds-close></button>
```

```example
<button class="vds-close-large" type="button" vds-close></button>
```

***

## Close in alerts

This is an example of how this component is used with an alert box from the [Alert component](alert.md).

```html
<div vds-alert>
    <button class="vds-alert-close" type="button" vds-close></button>
</div>
```

```example
<div vds-alert>
    <button class="vds-alert-close" type="button" vds-close></button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
```

***

## Close in drops

This is an example of how this component is used with the [Drop component](drop.md).

```html
<div vds-drop>
    <button class="vds-drop-close" type="button" vds-close></button>
</div>
```

```example
<div class="vds-inline">
    <button class="vds-button vds-button-default" type="button">Click</button>
    <div vds-drop="mode: click">
        <div class="vds-card vds-card-body vds-card-default">
            <button class="vds-drop-close" type="button" vds-close></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>
```

***

## Close in modals

This is an example of how this component is used with the [Modal component](modal.md).

```html
<div id="modal" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <button class="vds-modal-close-default" type="button" vds-close></button>
    </div>
</div>
```

```example
<a class="vds-button vds-button-default" href="#modal" vds-toggle>Open modal</a>
<div id="modal" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <h2 class="vds-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="vds-text-right">
            <button class="vds-button vds-button-default vds-modal-close" type="button">Cancel</button>
            <button class="vds-button vds-button-primary" type="button">Save</button>
        </p>
    </div>
</div>
```
