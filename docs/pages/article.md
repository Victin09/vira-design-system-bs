# Article

<p class="vds-text-lead">Create articles within your page.</p>

## Usage

The article component consists of the article itself, a title and meta data.

| Class               | Description                                                                                                |
|:--------------------|:-----------------------------------------------------------------------------------------------------------|
| `.vds-article`       | Add this class to define the Article component. Typically you would use an `<article>` element for this.   |
| `.vds-article-title` | Add this class to a heading to create an article title. Typically you would use a `<h1>` element for this. |
| `.vds-article-meta`  | Add this class to a paragraph which contains meta data about your article.                                 |

```html
<article class="vds-article">
    <h1 class="vds-article-title"></h1>
    <p class="vds-article-meta"></p>
</article>
```

Use the `.vds-text-lead` class from the [Text component](text.md) to create a leading paragraph.

```example
<article class="vds-article">

    <h1 class="vds-article-title"><a class="vds-link-reset" href="">Heading</a></h1>

    <p class="vds-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>

    <p class="vds-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="vds-grid-small vds-child-width-auto" vds-grid>
        <div>
            <a class="vds-button vds-button-text" href="#">Read more</a>
        </div>
        <div>
            <a class="vds-button vds-button-text" href="#">5 Comments</a>
        </div>
    </div>

</article>
```
