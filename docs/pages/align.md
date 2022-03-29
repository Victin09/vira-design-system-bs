# Align

<p class="vds-text-lead">Control the alignment of inline elements depending on the viewport size.</p>

## Usage

To align images or other elements with spacing between the text and the element, add one of these classes.

| Class               | Description                                                         |
| :------------------ | :------------------------------------------------------------------ |
| `.vds-align-left`   | Floats the element to the left and creates right and bottom margin. |
| `.vds-align-right`  | Floats the element to the right and creates left and bottom margin. |
| `.vds-align-center` | Centers the element and creates bottom margin.                      |

```html
<img class="vds-align-left" src="" width="" height="" alt="" />
```

```example
<div class="vds-panel">
    <img class="vds-align-left vds-margin-remove-adjacent" src="images/light.jpg" width="225" height="150" alt="Example image">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

---

## Responsive

Vira Design System provides a number of responsive alignment classes. Basically, they work just like the usual alignment classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| Class                                          | Description                                        |
| :--------------------------------------------- | :------------------------------------------------- |
| `.vds-align-left@s`<br> `.vds-align-right@s`   | Only affects device widths of _640px_ and higher.  |
| `.vds-align-left@m`<br> `.vds-align-right@m`   | Only affects device widths of _960px_ and higher.  |
| `.vds-align-left@l`<br> `.vds-align-right@l`   | Only affects device widths of _1200px_ and higher. |
| `.vds-align-left@xl`<br> `.vds-align-right@xl` | Only affects device widths of _1600px_ and higher. |

```html
<img
  class="vds-align-center vds-align-right@m"
  src=""
  width=""
  height=""
  alt=""
/>
```

```example
<div class="vds-panel">
    <img class="vds-align-center vds-align-right@m vds-margin-remove-adjacent" src="images/light.jpg" width="225" height="150" alt="Example image">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```
