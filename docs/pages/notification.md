# Notification

<p class="vds-text-lead">Create toggleable notifications that fade out automatically.</p>

## Usage

The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications, the component provides a simple JavaScript API. The following code snippet gets you started.

### JavaScript

```js
ViraDesignSystem.notification({
  message: "my-message!",
  status: "primary",
  pos: "top-right",
  timeout: 5000,
});

// Shortcuts
ViraDesignSystem.notification("My message");
ViraDesignSystem.notification("My message", status);
ViraDesignSystem.notification("My message", {
  /* options */
});
```

```example
<button class="demo vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Notification message'})">Click me</button>

```

---

## HTML message

You can use HTML inside your notification message, like an icon from the Icon component.

```js
ViraDesignSystem.notification("<span vds-icon='icon: check'></span> Message");
```

```example
<button class="vds-button vds-button-default demo" type="button" onclick="ViraDesignSystem.notification({message: '<span vds-icon=\'icon: check\'></span> Message with an icon'})">With icon</button>

```

---

## Position

Add one of the following parameters to adjust the notification's position to different corners.

```js
ViraDesignSystem.notification("...", { pos: "top-right" });
```

| Position        | Code                                                |
| :-------------- | :-------------------------------------------------- |
| `top-left`      | `ViraDesignSystem.notification("...", {pos: 'top-left'})`      |
| `top-center`    | `ViraDesignSystem.notification("...", {pos: 'top-center'})`    |
| `top-right`     | `ViraDesignSystem.notification("...", {pos: 'top-right'})`     |
| `bottom-left`   | `ViraDesignSystem.notification("...", {pos: 'bottom-left'})`   |
| `bottom-center` | `ViraDesignSystem.notification("...", {pos: 'bottom-center'})` |
| `bottom-right`  | `ViraDesignSystem.notification("...", {pos: 'bottom-right'})`  |

```example
<p vds-margin>
    <button class="vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Top Left...', pos: 'top-left'})">Top Left</button>
    <button class="vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Top Center...', pos: 'top-center'})">Top Center</button>
    <button class="vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Top Right...', pos: 'top-right'})">Top Right</button>
    <button class="vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Bottom Left...', pos: 'bottom-left'})">Bottom Left</button>
    <button class="vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Bottom Center...', pos: 'bottom-center'})">Bottom Center</button>
    <button class="vds-button vds-button-default" type="button" onclick="ViraDesignSystem.notification({message: 'Bottom Right...', pos: 'bottom-right'})">Bottom Right</button>
</p>
```

---

## Style

A notification can be styled by adding a status to the message to indicate a primary, success, warning or a danger status.

```js
ViraDesignSystem.notification("...", { status: "primary" });
```

| Style     | Code                                            |
| :-------- | :---------------------------------------------- |
| `primary` | `ViraDesignSystem.notification("...", {status:'primary'})` |
| `success` | `ViraDesignSystem.notification("...", {status:'success'})` |
| `warning` | `ViraDesignSystem.notification("...", {status:'warning'})` |
| `danger`  | `ViraDesignSystem.notification("...", {status:'danger'})`  |

```example
<p vds-margin>
    <button class="vds-button vds-button-default demo" type="button" onclick="ViraDesignSystem.notification({message: 'Primary message...', status: 'primary'})">Primary</button>
    <button class="vds-button vds-button-default demo" type="button" onclick="ViraDesignSystem.notification({message: 'Success message...', status: 'success'})">Success</button>
    <button class="vds-button vds-button-default demo" type="button" onclick="ViraDesignSystem.notification({message: 'Warning message...', status: 'warning'})">Warning</button>
    <button class="vds-button vds-button-default demo" type="button" onclick="ViraDesignSystem.notification({message: 'Danger message...', status: 'danger'})">Danger</button>
</p>
```

---

## Close all

You can close all open notifications by calling `ViraDesignSystem.notification.closeAll()`.

```example
<button class="vds-button vds-button-default close" onclick="ViraDesignSystem.notification.closeAll()">Close All</button>

```

---

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option     | Value  | Default      | Description                                                         |
| :--------- | :----- | :----------- | :------------------------------------------------------------------ |
| `message ` | String | `false`      | Notification message to show.                                       |
| `status`   | String | `null`       | Notification status color.                                          |
| `timeout`  | Number | `5000`       | Visibility duration until a notification disappears.                |
| `group`    | String | `null`       | Useful, if you want to close all notifications in a specific group. |
| `pos`      | String | `top-center` | Display corner.                                                     |

---

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

This is a `Functional Component` and may omit the element argument.

```js
ViraDesignSystem.notification(options);
ViraDesignSystem.notification(message, status);
```

### Events

The following events will be triggered on elements with this component attached:

| Name    | Description                                   |
| ------- | --------------------------------------------- |
| `close` | Fires after the notification has been closed. |

### Methods

The following methods are available for the component:

#### Close

```js
ViraDesignSystem.notification(element).close(immediate);
```

Closes the notification.

| Name        | Type    | Default | Description                      |
| :---------- | :------ | :------ | :------------------------------- |
| `immediate` | Boolean | true    | Transition the notification out. |
