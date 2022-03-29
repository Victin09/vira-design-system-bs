# Comment

<p class="vds-text-lead">Includes styles for comments, for example for a blog section on your site.</p>

## Usage

The Comment component consists of the comment itself, a comment header, including an avatar, a title and metadata, and a comment body.

| Class                | Description                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------|
| `.vds-comment`        | Add this class to define the Comment component.                                    |
| `.vds-comment-body`   | Add this class to create a comment body.                                           |
| `.vds-comment-header` | Add this class to create a comment header.                                         |
| `.vds-comment-title`  | Add this class to a heading to create a comment title.                             |
| `.vds-comment-meta`   | Add this class to create meta data about your comment, e.g. a [subnav](subnav.md). |
| `.vds-comment-avatar` | Add this class to an `<img>` element to create an avatar for the comment author.   |


```html
<article class="vds-comment">
    <header class="vds-comment-header">
        <img class="vds-comment-avatar" src="" width="" height="" alt="">
        <h4 class="vds-comment-title"></h4>
        <ul class="vds-comment-meta vds-subnav"></ul>
    </header>
    <div class="vds-comment-body"></div>
</article>
```

```example
<article class="vds-comment">
    <header class="vds-comment-header">
        <div class="vds-grid-medium vds-flex-middle" vds-grid>
            <div class="vds-width-auto">
                <img class="vds-comment-avatar" src="images/avatar.jpg" width="80" height="80" alt="">
            </div>
            <div class="vds-width-expand">
                <h4 class="vds-comment-title vds-margin-remove"><a class="vds-link-reset" href="#">Author</a></h4>
                <ul class="vds-comment-meta vds-subnav vds-subnav-divider vds-margin-remove-top">
                    <li><a href="#">12 days ago</a></li>
                    <li><a href="#">Reply</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="vds-comment-body">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
</article>
```

***

## Primary modifier

To style a comment differently, for example to highlight it as the admin's comment, just add the `.vds-comment-primary` class.

```html
<article class="vds-comment vds-comment-primary">...</article>
```

```example
<article class="vds-comment vds-comment-primary">
    <header class="vds-comment-header">
        <div class="vds-grid-medium vds-flex-middle" vds-grid>
            <div class="vds-width-auto">
                <img class="vds-comment-avatar" src="images/avatar.jpg" width="80" height="80" alt="">
            </div>
            <div class="vds-width-expand">
                <h4 class="vds-comment-title vds-margin-remove"><a class="vds-link-reset" href="#">Author</a></h4>
                <ul class="vds-comment-meta vds-subnav vds-subnav-divider vds-margin-remove-top">
                    <li><a href="#">12 days ago</a></li>
                    <li><a href="#">Reply</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="vds-comment-body">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
</article>
```

***

## Lists

Add the `.vds-comment-list` class to a `<ul>` element to create a list of comments. You can nest any number of `<ul>` elements inside a comment list.

```html
<ul class="vds-comment-list">
    <li>
        <article class="vds-comment">...</article>
        <ul>
            <li>
                <article class="vds-comment">...</article>
            </li>
        </ul>
    </li>
</ul>
```

```example
<ul class="vds-comment-list">
    <li>
        <article class="vds-comment vds-visible-toggle" tabindex="-1">
            <header class="vds-comment-header vds-position-relative">
                <div class="vds-grid-medium vds-flex-middle" vds-grid>
                    <div class="vds-width-auto">
                        <img class="vds-comment-avatar" src="images/avatar.jpg" width="80" height="80" alt="">
                    </div>
                    <div class="vds-width-expand">
                        <h4 class="vds-comment-title vds-margin-remove"><a class="vds-link-reset" href="#">Author</a></h4>
                        <p class="vds-comment-meta vds-margin-remove-top"><a class="vds-link-reset" href="#">12 days ago</a></p>
                    </div>
                </div>
                <div class="vds-position-top-right vds-position-small vds-hidden-hover"><a class="vds-link-muted" href="#">Reply</a></div>
            </header>
            <div class="vds-comment-body">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </article>
        <ul>
            <li>
                <article class="vds-comment vds-comment-primary vds-visible-toggle" tabindex="-1">
                    <header class="vds-comment-header vds-position-relative">
                        <div class="vds-grid-medium vds-flex-middle" vds-grid>
                            <div class="vds-width-auto">
                                <img class="vds-comment-avatar" src="images/avatar.jpg" width="80" height="80" alt="">
                            </div>
                            <div class="vds-width-expand">
                                <h4 class="vds-comment-title vds-margin-remove"><a class="vds-link-reset" href="#">Author</a></h4>
                                <p class="vds-comment-meta vds-margin-remove-top"><a class="vds-link-reset" href="#">12 days ago</a></p>
                            </div>
                        </div>
                        <div class="vds-position-top-right vds-position-small vds-hidden-hover"><a class="vds-link-muted" href="#">Reply</a></div>
                    </header>
                    <div class="vds-comment-body">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </article>
            </li>
            <li>
                <article class="vds-comment vds-visible-toggle" tabindex="-1">
                    <header class="vds-comment-header vds-position-relative">
                        <div class="vds-grid-medium vds-flex-middle" vds-grid>
                            <div class="vds-width-auto">
                                <img class="vds-comment-avatar" src="images/avatar.jpg" width="80" height="80" alt="">
                            </div>
                            <div class="vds-width-expand">
                                <h4 class="vds-comment-title vds-margin-remove"><a class="vds-link-reset" href="#">Author</a></h4>
                                <p class="vds-comment-meta vds-margin-remove-top"><a class="vds-link-reset" href="#">12 days ago</a></p>
                            </div>
                        </div>
                        <div class="vds-position-top-right vds-position-small vds-hidden-hover"><a class="vds-link-muted" href="#">Reply</a></div>
                    </header>
                    <div class="vds-comment-body">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </article>
            </li>
        </ul>
    </li>
</ul>
```
