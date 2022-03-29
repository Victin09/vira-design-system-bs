# Modal

<p class="vds-text-lead">Create modal dialogs with different styles and transitions.</p>

## Usage

The Modal component consists of an overlay, a dialog and an optional close button. You can use any element to toggle a modal dialog. To enable the necessary JavaScript, add the `vds-toggle` attribute. An `<a>` element needs to be linked to the modal's id. If you are using another element, like a button, just add the `vds-toggle="target: #ID"` attribute to target the id of the modal container.

Add the `vds-modal` attribute to a `<div>` element to create the modal container and an overlay that blanks out the page. It is important to add an `id` to indicate the element for toggling. Use the following classes to define the modal's sections.

| Class              | Description                                                                                             |
|:-------------------|:--------------------------------------------------------------------------------------------------------|
| `.vds-modal-dialog` | Add this class to a child `<div>` element to create the dialog                                          |
| `.vds-modal-body`   | Add this class to create padding between the modal and its content.                                     |
| `.vds-modal-title`  | Add this class to a heading element to create the modal title.                                          |
| `.vds-modal-close`  | Add this class to an `<a>` or `<button>` element to create a close button and enable its functionality. |

```html
<!-- This is a button toggling the modal -->
<button vds-toggle="target: #my-id" type="button"></button>

<!-- This is the modal -->
<div id="my-id" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <h2 class="vds-modal-title"></h2>
        <button class="vds-modal-close" type="button"></button>
    </div>
</div>
```

```example
<!-- This is a button toggling the modal -->
<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #modal-example">Open</button>

<!-- This is an anchor toggling the modal -->
<a href="#modal-example" vds-toggle>Open</a>

<!-- This is the modal -->
<div id="modal-example" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <h2 class="vds-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="vds-text-right">
            <button class="vds-button vds-button-default vds-modal-close" type="button">Cancel</button>
            <button class="vds-button vds-button-primary" type="button">Save</button>
        </p>
    </div>
</div>
```

***

## Close button

To create a close button, enable its functionality and add proper styling and positioning, add the `.vds-modal-close-default` class to an `<a>` or `<button>` element. To place the close button outside the modal, add the `.vds-modal-close-outside` class.

Add the `vds-close` attribute from the [Close component](close.md), to apply a close icon.

```html
<div>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-default" type="button" vds-close></button>
    </div>
</div>

<div>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-outside" type="button" vds-close></button>
    </div>
</div>
```

```example
<!-- This is a button toggling the modal with the default close button -->
<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #modal-close-default">Default</button>

<!-- This is the modal with the default close button -->
<div id="modal-close-default" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <h2 class="vds-modal-title">Default</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>

<!-- This is a button toggling the modal with the outside close button -->
<button class="vds-button vds-button-default vds-margin-small-right" type="button" vds-toggle="target: #modal-close-outside">Outside</button>

<!-- This is the modal with the outside close button -->
<div id="modal-close-outside" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <button class="vds-modal-close-outside" type="button" vds-close></button>
        <h2 class="vds-modal-title">Outside</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
```

***

## Center modal

To vertically center the modal dialog, you can use the `.vds-margin-auto-vertical` class from the [Margin component](margin.md).

```html
<div class="vds-flex-top" vds-modal>
    <div class="vds-modal-dialog vds-margin-auto-vertical"></div>
</div>
```

```example
<a class="vds-button vds-button-default" href="#modal-center" vds-toggle>Open</a>

<div id="modal-center" class="vds-flex-top" vds-modal>
    <div class="vds-modal-dialog vds-modal-body vds-margin-auto-vertical">

        <button class="vds-modal-close-default" type="button" vds-close></button>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>
</div>
```

**Note** `.vds-flex-top` on the modal container is needed to support IE 11.

***

## Header and footer

To divide the modal into different content sections, use the following classes.

| Class              | Description                                                     |
|:-------------------|:----------------------------------------------------------------|
| `.vds-modal-header` | Add this class to a `<div>` element to create the modal header. |
| `.vds-modal-footer` | Add this class to a `<div>` element to create the modal footer. |

```html
<div vds-modal>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <div class="vds-modal-header">
            <h2 class="vds-modal-title"></h2>
        </div>
        <div class="vds-modal-body"></div>
        <div class="vds-modal-footer"></div>
    </div>
</div>
```

```example
<a class="vds-button vds-button-default" href="#modal-sections" vds-toggle>Open</a>

<div id="modal-sections" vds-modal>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <div class="vds-modal-header">
            <h2 class="vds-modal-title">Modal Title</h2>
        </div>
        <div class="vds-modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="vds-modal-footer vds-text-right">
            <button class="vds-button vds-button-default vds-modal-close" type="button">Cancel</button>
            <button class="vds-button vds-button-primary" type="button">Save</button>
        </div>
    </div>
</div>
```


***

## Container modifier

Add the `.vds-modal-container` class to expand the modal dialog to the default [Container](container.md) width.

```html
<div class="vds-modal-container" vds-modal>...</div>
```

```example
<a class="vds-button vds-button-default" href="#modal-container" vds-toggle>Open</a>

<div id="modal-container" class="vds-modal-container" vds-modal>
    <div class="vds-modal-dialog vds-modal-body">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <h2 class="vds-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
```

***

## Full modifier

To create a modal, that fills the entire page, add the `.vds-modal-full` class. It is also recommended adding the `.vds-modal-close-full` class to the close button, so that it adapts its styling.

```html
<div class="vds-modal-full" vds-modal>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-full vds-close-large" type="button" vds-close></button>
    </div>
</div>
```

Using the [grid](grid.md) and [width](width.md) classes, you can create a nice, split fullscreen modal.

```example
<a class="vds-button vds-button-default" href="#modal-full" vds-toggle>Open</a>

<div id="modal-full" class="vds-modal-full" vds-modal>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-full vds-close-large" type="button" vds-close></button>
        <div class="vds-grid-collapse vds-child-width-1-2@s vds-flex-middle" vds-grid>
            <div class="vds-background-cover" style="background-image: url('images/photo.jpg');" vds-height-viewport></div>
            <div class="vds-padding-large">
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</div>
```

***

## Overflow

By default, the page will scroll with the modal, if its content exceeds the window height. To apply a scrollbar inside the modal, add the `vds-overflow-auto` attribute from the [Utility component](utility.md#overflow-auto) to the modal body.

```html
<div vds-modal>
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

***

## Media

If you want to display media, you should first check, if the [Lightbox component](lightbox.md) doesn't already offer everything you need. However, you can also use the modal to have more control over the markup to wrap your media in.

**Note** Use the `vds-video` attribute from the [Video component](video.md) to make sure videos are stopped when the modal is closed.

```html
<div vds-modal>
    <div class="vds-modal-dialog vds-width-auto">
        <iframe src="" vds-video></iframe>
    </div>
</div>
```

```example
 <p vds-margin>
    <a class="vds-button vds-button-default" href="#modal-media-image" vds-toggle>Image</a>
    <a class="vds-button vds-button-default" href="#modal-media-video" vds-toggle>Video</a>
    <a class="vds-button vds-button-default" href="#modal-media-youtube" vds-toggle>YouTube</a>
    <a class="vds-button vds-button-default" href="#modal-media-vimeo" vds-toggle>Vimeo</a>
</p>

<div id="modal-media-image" class="vds-flex-top" vds-modal>
    <div class="vds-modal-dialog vds-width-auto vds-margin-auto-vertical">
        <button class="vds-modal-close-outside" type="button" vds-close></button>
        <img src="images/photo.jpg" width="1800" height="1200" alt="">
    </div>
</div>

<div id="modal-media-video" class="vds-flex-top" vds-modal>
    <div class="vds-modal-dialog vds-width-auto vds-margin-auto-vertical">
        <button class="vds-modal-close-outside" type="button" vds-close></button>
        <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" controls playsinline vds-video></video>
    </div>
</div>

<div id="modal-media-youtube" class="vds-flex-top" vds-modal>
    <div class="vds-modal-dialog vds-width-auto vds-margin-auto-vertical">
        <button class="vds-modal-close-outside" type="button" vds-close></button>
        <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA" width="1920" height="1080" vds-video vds-responsive></iframe>
    </div>
</div>

<div id="modal-media-vimeo" class="vds-flex-top" vds-modal>
    <div class="vds-modal-dialog vds-width-auto vds-margin-auto-vertical">
        <button class="vds-modal-close-outside" type="button" vds-close></button>
        <iframe src="https://player.vimeo.com/video/1084537" width="1280" height="720" vds-video vds-responsive></iframe>
    </div>
</div>
```

***

## Groups

You can group multiple modals by linking from one to the other and back. Use this to create multistep wizards inside your modals.

```html
<div id="modal-group-1" vds-modal>
    <div class="vds-modal-dialog">
        <a href="#modal-group-2" vds-toggle>Next</a>
    </div>
</div>

<div id="modal-group-2" vds-modal>
    <div class="vds-modal-dialog">
        <a href="#modal-group-1" vds-toggle>Previous</a>
    </div>
</div>
```

```example
<p vds-margin>
    <a class="vds-button vds-button-default" href="#modal-group-1" vds-toggle>Modal 1</a>
    <a class="vds-button vds-button-default" href="#modal-group-2" vds-toggle>Modal 2</a>
</p>

<div id="modal-group-1" vds-modal>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <div class="vds-modal-header">
            <h2 class="vds-modal-title">Headline 1</h2>
        </div>
        <div class="vds-modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="vds-modal-footer vds-text-right">
            <button class="vds-button vds-button-default vds-modal-close" type="button">Cancel</button>
            <a href="#modal-group-2" class="vds-button vds-button-primary" vds-toggle>Next</a>
        </div>
    </div>
</div>

<div id="modal-group-2" vds-modal>
    <div class="vds-modal-dialog">
        <button class="vds-modal-close-default" type="button" vds-close></button>
        <div class="vds-modal-header">
            <h2 class="vds-modal-title">Headline 2</h2>
        </div>
        <div class="vds-modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="vds-modal-footer vds-text-right">
            <button class="vds-button vds-button-default vds-modal-close" type="button">Cancel</button>
            <a href="#modal-group-1" class="vds-button vds-button-primary" vds-toggle>Previous</a>
        </div>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value   | Default                                                                                           | Description                                                                                                                                          |
|:------------|:--------|:--------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `esc-close` | Boolean | `true`                                                                                            | Close the modal when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`                                                                                            | Close the modal when the background is clicked.                                                                                                      |
| `stack`     | Boolean | `false`                                                                                           | Stack modals, when more than one is open. By default, the previous modal will be hidden.                                                             |
| `container` | String  | `true`                                                                                            | Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to `false` will prevent this behavior. |
| `cls-page`  | String  | `'vds-modal-page'`                                                                                 | Class to add to `<html>` when modal is active                                                                                                        |
| `cls-panel` | String  | `'vds-modal-dialog'`                                                                               | Class of the element to be considered the panel of the modal                                                                                         |
| `sel-close` | String  | `'.vds-modal-close,` `.vds-modal-close-default,` `.vds-modal-close-outside,` `.vds-modal-close-full'` | CSS selector for all elements that should trigger the closing of the modal                                                                           |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.modal(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                          |
|:-------------|:-----------------------------------------------------|
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

The following methods are available for the component:

#### Show

```js
ViraDesignSystem.modal(element).show();
```

Shows the Modal.

#### Hide

```js
ViraDesignSystem.modal(element).hide();
```

Hides the Modal.

***

## Modal dialogs

The component comes with a number of prepared modal dialogs that you can use for user interaction. You can call the dialog directly from JavaScript and use callback functions to process the user input.

| Code                                          | Description                                              |
|:----------------------------------------------|:---------------------------------------------------------|
| `ViraDesignSystem.modal.alert('Vira Design System alert!')`           | Show an alert box with one button.                       |
| `ViraDesignSystem.modal.confirm('Vira Design System confirm!')`       | Show a confirm dialog with your message and two buttons. |
| `ViraDesignSystem.modal.prompt('Name:', 'Your name')`    | Show a dialog asking for a text input.                   |
| `ViraDesignSystem.modal.dialog('<p>Vira Design System dialog!</p>');` | Show dialog with any HTML content.                       |

To process the user input, the modal uses a promise based interface which provides a `then()` function to register your callback functions. The `ViraDesignSystem.modal.dialog` function however will return the modal itself.

```js
ViraDesignSystem.modal.confirm('Vira Design System confirm!').then(function() {
    console.log('Confirmed.')
}, function () {
    console.log('Rejected.')
});
```

The returned promise has a property `dialog`, which holds a reference to the modal itself. This lets you manipulate e.g. the markup of the modal's element.

```js
const modal = ViraDesignSystem.modal.confirm('Vira Design System confirm!').dialog; // The modal component
const el = modal.$el; // The modal element
```

```example
<p vds-margin>

    <a id="js-modal-dialog" class="vds-button vds-button-default" href="#">Dialog</a>

    <a id="js-modal-alert" class="vds-button vds-button-default" href="#">Alert</a>

    <a id="js-modal-confirm" class="vds-button vds-button-default" href="#">Confirm</a>

    <a id="js-modal-prompt" class="vds-button vds-button-default" href="#">Prompt</a>

    <script>

       ViraDesignSystem.util.on('#js-modal-dialog', 'click', function (e) {
           e.preventDefault();
           e.target.blur();
           ViraDesignSystem.modal.dialog('<p class="vds-modal-body">Vira Design System dialog!</p>');
       });

       ViraDesignSystem.util.on('#js-modal-alert', 'click', function (e) {
           e.preventDefault();
           e.target.blur();
           ViraDesignSystem.modal.alert('Vira Design System alert!').then(function () {
               console.log('Alert closed.')
           });
       });

       ViraDesignSystem.util.on('#js-modal-confirm', 'click', function (e) {
           e.preventDefault();
           e.target.blur();
           ViraDesignSystem.modal.confirm('Vira Design System confirm!').then(function () {
               console.log('Confirmed.')
           }, function () {
               console.log('Rejected.')
           });
       });

       ViraDesignSystem.util.on('#js-modal-prompt', 'click', function (e) {
           e.preventDefault();
           e.target.blur();
           ViraDesignSystem.modal.prompt('Name:', 'Your name').then(function (name) {
               console.log('Prompted:', name)
           });
       });

    </script>

</p>
```
