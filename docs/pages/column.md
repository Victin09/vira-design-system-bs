# Column

<p class="vds-text-lead">Display your content in multiple text columns without having to split it in several containers.</p>

## Usage

Add one of the `.vds-column-*` classes to an element to display its inline content in multiple columns.

| Class            | Description                           |
|:-----------------|:--------------------------------------|
| `.vds-column-1-2` | Display the content in two columns.   |
| `.vds-column-1-3` | Display the content in three columns. |
| `.vds-column-1-4` | Display the content in four columns.  |
| `.vds-column-1-5` | Display the content in five columns.  |
| `.vds-column-1-6` | Display the content in six columns.   |

```html
<div class="vds-column-1-2"></div>
```

```example
<div class="vds-column-1-2">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>
```

***

## Responsive

Vira Design System provides a number of responsive column classes. Basically they work just like the usual column classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| Class                                      | Description                                        |
|:-------------------------------------------|:---------------------------------------------------|
| `.vds-column-1-2@s` to `.vds-column-1-6@s`   | Only affects device widths of _640px_ and higher.  |
| `.vds-column-1-2@m` to `.vds-column-1-6@m`   | Only affects device widths of _960px_ and higher.  |
| `.vds-column-1-2@l` to `.vds-column-1-6@l`   | Only affects device widths of _1200px_ and higher. |
| `.vds-column-1-2@xl` to `.vds-column-1-6@xl` | Only affects device widths of _1600px_ and higher. |

```html
<div class="vds-column-1-2@s vds-column-1-3@m vds-column-1-4@l"></div>
```

```example
<div class="vds-column-1-2@s vds-column-1-3@m vds-column-1-4@l">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>
```

***

## Divider modifier

To display a vertical line between columns, add the `.vds-column-divider` class.

```html
<div class="vds-column-1-2 vds-column-divider"></div>
```

```example
<div class="vds-column-1-2 vds-column-divider">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>
```

***

## Span all columns

To have an inline element span the whole width of the columns, add the `.vds-column-span` class to the inner element.

```html
<div class="vds-column-1-2">
    ...
    <p class="vds-column-span"></p>
    ...
</div>
```

```example
<div class="vds-column-1-2 vds-column-divider">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <blockquote cite="#" class="vds-column-span">
        <p>All we have to decide is what to do with the time that is given us.</p>
        <footer>Gandalf in in <cite><a href="">The Fellowship of the Ring</a></cite></footer>
    </blockquote>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>
```
