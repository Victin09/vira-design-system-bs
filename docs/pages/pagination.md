# Pagination

<p class="vds-text-lead">Easily create a nice looking pagination to navigate through pages.</p>

## Usage

The Pagination component consists of button-like styled links, that are aligned side by side in a horizontal list.

| Class            | Description                                                                                                                    |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `.vds-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.vds-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.vds-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

```html
<ul class="vds-pagination">
    <li><a href=""></a></li>
    <li class="vds-active"><span></span></li>
    <li class="vds-disabled"><span></span></li>
</ul>
```

```example
<ul class="vds-pagination" vds-margin>
    <li><a href="#"><span vds-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="vds-disabled"><span>...</span></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="vds-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li class="vds-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li><a href="#"><span vds-pagination-next></span></a></li>
</ul>
```

***

## Alignment

The pagination component utilizes flexbox, so navigations can easily be aligned with the [Flex component](flex.md).

```html
<ul class="vds-pagination vds-flex-center">...</ul>
```

```example
<ul class="vds-pagination vds-flex-center" vds-margin>
    <li><a href="#"><span vds-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="vds-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="vds-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span vds-pagination-next></span></a></li>
</ul>

<ul class="vds-pagination vds-flex-right vds-margin-medium-top" vds-margin>
    <li><a href="#"><span vds-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="vds-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="vds-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span vds-pagination-next></span></a></li>
</ul>
```

***

## Previous and next

To apply a previous and next button, add the `vds-pagination-previous` or `vds-pagination-next` attribute to a `<span>` element inside a pagination item.

```html
<ul class="vds-pagination">
    <li><a href=""><span vds-pagination-previous></span></a></li>
    <li><a href=""><span vds-pagination-next></span></a></li>
</ul>
```

```example
<ul class="vds-pagination">
    <li><a href="#"><span class="vds-margin-small-right" vds-pagination-previous></span> Previous</a></li>
    <li class="vds-margin-auto-left"><a href="#">Next <span class="vds-margin-small-left" vds-pagination-next></span></a></li>
</ul>
```
