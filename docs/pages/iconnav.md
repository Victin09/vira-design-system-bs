# Iconnav

<p class="vds-text-lead">Create a navigation consisting of icons.</p>

## Usage

To apply this component, add the `.vds-iconnav` class to a `<ul>` element. Use `<a>` elements as menu items within the list and add icons from the [Icon component](icon.md). To apply an active state to a menu item, just add the `.vds-active` class.

```html
<ul class="vds-iconnav">
  <li><a href="" vds-icon="icon: check"></a></li>
</ul>
```

```example
<ul class="vds-iconnav">
    <li><a href="#" vds-icon="icon: plus"></a></li>
    <li><a href="#" vds-icon="icon: file-edit"></a></li>
    <li><a href="#" vds-icon="icon: copy"></a></li>
    <li><a href="#"><span vds-icon="icon: bag"></span> (2)</a></li>
</ul>
```

---

## Vertical alignment

By default, the items of an iconnav are aligned horizontally. To apply a vertical alignment, add the `.vds-iconnav-vertical` class.

```html
<ul class="vds-iconnav vds-iconnav-vertical">
  ...
</ul>
```

```example
<ul class="vds-iconnav vds-iconnav-vertical">
    <li><a href="#" vds-icon="icon: plus"></a></li>
    <li><a href="#" vds-icon="icon: file-edit"></a></li>
    <li><a href="#" vds-icon="icon: copy"></a></li>
    <li><a href="#"><span vds-icon="icon: bag"></span> (2)</a></li>
</ul>
```
