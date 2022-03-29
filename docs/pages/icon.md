# Icon

<p class="vds-text-lead">Place scalable vector icons anywhere in your content.</p>

Vira Design System comes with its own SVG icon system and a comprehensive library, which comprises a growing number of elegant outline icons. This component injects SVGs into the site, so that they adopt color and can be styled with CSS.

***

## Usage

Make sure to include the icon library script, for more details see the [installation instructions](installation.md).

```html
<script src="vds/dist/js/vds-icons.min.js"></script>
```

To apply this component, add the `vds-icon` attribute to a `<span>` or `<a>` element. To display the actual icon, you need to append the `icon: NAME` parameter to the attribute. Et voilà, you have a vector icon which inherits color just like your text does.

```html
<span vds-icon="icon: check"></span>

<a href="" vds-icon="icon: heart"></a>
```

If `icon` is the only option in the attribute value, you can also use `vds-icon="NAME"`

```html
<span vds-icon="heart"></span>
```

```example
<span class="vds-margin-small-right" vds-icon="check"></span>

<a href="" vds-icon="heart"></a>
```

***

## Library

Here is an overview of all currently available icons. Over time, we will keep adding new icons to the list.

<h4 class="vds-heading-line"><span>App</span></h4>

<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="home"></span> home</li>
            <li><span class="vds-margin-small-right" vds-icon="sign-in"></span> sign-in</li>
            <li><span class="vds-margin-small-right" vds-icon="sign-out"></span> sign-out</li>
            <li><span class="vds-margin-small-right" vds-icon="user"></span> user</li>
            <li><span class="vds-margin-small-right" vds-icon="users"></span> users</li>
            <li><span class="vds-margin-small-right" vds-icon="lock"></span> lock</li>
            <li><span class="vds-margin-small-right" vds-icon="unlock"></span> unlock</li>
            <li><span class="vds-margin-small-right" vds-icon="settings"></span> settings</li>
            <li><span class="vds-margin-small-right" vds-icon="cog"></span> cog</li>
            <li><span class="vds-margin-small-right" vds-icon="nut"></span> nut</li>
            <li><span class="vds-margin-small-right" vds-icon="comment"></span> comment</li>
            <li><span class="vds-margin-small-right" vds-icon="commenting"></span> commenting</li>
            <li><span class="vds-margin-small-right" vds-icon="comments"></span> comments</li>
            <li><span class="vds-margin-small-right" vds-icon="hashtag"></span> hashtag</li>
            <li><span class="vds-margin-small-right" vds-icon="tag"></span> tag</li>
            <li><span class="vds-margin-small-right" vds-icon="cart"></span> cart</li>
            <li><span class="vds-margin-small-right" vds-icon="bag"></span> bag</li>
            <li><span class="vds-margin-small-right" vds-icon="credit-card"></span> credit-card</li>
            <li><span class="vds-margin-small-right" vds-icon="mail"></span> mail</li>
            <li><span class="vds-margin-small-right" vds-icon="receiver"></span> receiver</li>
            <li><span class="vds-margin-small-right" vds-icon="print"></span> print</li>
            <li><span class="vds-margin-small-right" vds-icon="search"></span> search</li>
            <li><span class="vds-margin-small-right" vds-icon="location"></span> location</li>
            <li><span class="vds-margin-small-right" vds-icon="bookmark"></span> bookmark</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="code"></span> code</li>
            <li><span class="vds-margin-small-right" vds-icon="paint-bucket"></span> paint-bucket</li>
            <li><span class="vds-margin-small-right" vds-icon="camera"></span> camera</li>
            <li><span class="vds-margin-small-right" vds-icon="video-camera"></span> video-camera</li>
            <li><span class="vds-margin-small-right" vds-icon="bell"></span> bell</li>
            <li><span class="vds-margin-small-right" vds-icon="microphone"></span> microphone</li>
            <li><span class="vds-margin-small-right" vds-icon="bolt"></span> bolt</li>
            <li><span class="vds-margin-small-right" vds-icon="star"></span> star</li>
            <li><span class="vds-margin-small-right" vds-icon="heart"></span> heart</li>
            <li><span class="vds-margin-small-right" vds-icon="happy"></span> happy</li>
            <li><span class="vds-margin-small-right" vds-icon="lifesaver"></span> lifesaver</li>
            <li><span class="vds-margin-small-right" vds-icon="rss"></span> rss</li>
            <li><span class="vds-margin-small-right" vds-icon="social"></span> social</li>
            <li><span class="vds-margin-small-right" vds-icon="git-branch"></span> git-branch</li>
            <li><span class="vds-margin-small-right" vds-icon="git-fork"></span> git-fork</li>
            <li><span class="vds-margin-small-right" vds-icon="world"></span> world</li>
            <li><span class="vds-margin-small-right" vds-icon="calendar"></span> calendar</li>
            <li><span class="vds-margin-small-right" vds-icon="clock"></span> clock</li>
            <li><span class="vds-margin-small-right" vds-icon="history"></span> history</li>
            <li><span class="vds-margin-small-right" vds-icon="future"></span> future</li>
            <li><span class="vds-margin-small-right" vds-icon="pencil"></span> pencil</li>
            <li><span class="vds-margin-small-right" vds-icon="trash"></span> trash</li>
            <li><span class="vds-margin-small-right" vds-icon="move"></span> move</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="link"></span> link</li>
            <li><span class="vds-margin-small-right" vds-icon="question"></span> question</li>
            <li><span class="vds-margin-small-right" vds-icon="info"></span> info</li>
            <li><span class="vds-margin-small-right" vds-icon="warning"></span> warning</li>
            <li><span class="vds-margin-small-right" vds-icon="image"></span> image</li>
            <li><span class="vds-margin-small-right" vds-icon="thumbnails"></span> thumbnails</li>
            <li><span class="vds-margin-small-right" vds-icon="table"></span> table</li>
            <li><span class="vds-margin-small-right" vds-icon="list"></span> list</li>
            <li><span class="vds-margin-small-right" vds-icon="menu"></span> menu</li>
            <li><span class="vds-margin-small-right" vds-icon="grid"></span> grid</li>
            <li><span class="vds-margin-small-right" vds-icon="more"></span> more</li>
            <li><span class="vds-margin-small-right" vds-icon="more-vertical"></span> more-vertical</li>
            <li><span class="vds-margin-small-right" vds-icon="plus"></span> plus</li>
            <li><span class="vds-margin-small-right" vds-icon="plus-circle"></span> plus-circle</li>
            <li><span class="vds-margin-small-right" vds-icon="minus"></span> minus</li>
            <li><span class="vds-margin-small-right" vds-icon="minus-circle"></span> minus-circle</li>
            <li><span class="vds-margin-small-right" vds-icon="close"></span> close</li>
            <li><span class="vds-margin-small-right" vds-icon="check"></span> check</li>
            <li><span class="vds-margin-small-right" vds-icon="ban"></span> ban</li>
            <li><span class="vds-margin-small-right" vds-icon="refresh"></span> refresh</li>
            <li><span class="vds-margin-small-right" vds-icon="play"></span> play</li>
            <li><span class="vds-margin-small-right" vds-icon="play-circle"></span> play-circle</li>
        </ul>
    </div>
</div>

<h4 class="vds-heading-line"><span>Devices</span></h4>

<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="tv"></span> tv</li>
            <li><span class="vds-margin-small-right" vds-icon="desktop"></span> desktop</li>
            <li><span class="vds-margin-small-right" vds-icon="laptop"></span> laptop</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="tablet"></span> tablet</li>
            <li><span class="vds-margin-small-right" vds-icon="phone"></span> phone</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="tablet-landscape"></span> tablet-landscape</li>
            <li><span class="vds-margin-small-right" vds-icon="phone-landscape"></span> phone-landscape</li>
        </ul>
    </div>
</div>

<h4 class="vds-heading-line"><span>Storage</span></h4>

<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="file"></span> file</li>
            <li><span class="vds-margin-small-right" vds-icon="file-text"></span> file-text</li>
            <li><span class="vds-margin-small-right" vds-icon="file-pdf"></span> file-pdf</li>
            <li><span class="vds-margin-small-right" vds-icon="copy"></span> copy</li>
            <li><span class="vds-margin-small-right" vds-icon="file-edit"></span> file-edit</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="folder"></span> folder</li>
            <li><span class="vds-margin-small-right" vds-icon="album"></span> album</li>
            <li><span class="vds-margin-small-right" vds-icon="push"></span> push</li>
            <li><span class="vds-margin-small-right" vds-icon="pull"></span> pull</li>
            <li><span class="vds-margin-small-right" vds-icon="server"></span> server</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="database"></span> database</li>
            <li><span class="vds-margin-small-right" vds-icon="cloud-upload"></span> cloud-upload</li>
            <li><span class="vds-margin-small-right" vds-icon="cloud-download"></span> cloud-download</li>
            <li><span class="vds-margin-small-right" vds-icon="download"></span> download</li>
            <li><span class="vds-margin-small-right" vds-icon="upload"></span> upload</li>
        </ul>
    </div>
</div>

<h4 class="vds-heading-line"><span>Direction</span></h4>

<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="reply"></span> reply</li>
            <li><span class="vds-margin-small-right" vds-icon="forward"></span> forward</li>
            <li><span class="vds-margin-small-right" vds-icon="expand"></span> expand</li>
            <li><span class="vds-margin-small-right" vds-icon="shrink"></span> shrink</li>
            <li><span class="vds-margin-small-right" vds-icon="arrow-up"></span> arrow-up</li>
            <li><span class="vds-margin-small-right" vds-icon="arrow-down"></span> arrow-down</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="arrow-left"></span> arrow-left</li>
            <li><span class="vds-margin-small-right" vds-icon="arrow-right"></span> arrow-right</li>
            <li><span class="vds-margin-small-right" vds-icon="chevron-up"></span> chevron-up</li>
            <li><span class="vds-margin-small-right" vds-icon="chevron-down"></span> chevron-down</li>
            <li><span class="vds-margin-small-right" vds-icon="chevron-left"></span> chevron-left</li>
            <li><span class="vds-margin-small-right" vds-icon="chevron-right"></span> chevron-right</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="chevron-double-left"></span> chevron-double-left</li>
            <li><span class="vds-margin-small-right" vds-icon="chevron-double-right"></span> chevron-double-right</li>
            <li><span class="vds-margin-small-right" vds-icon="triangle-up"></span> triangle-up</li>
            <li><span class="vds-margin-small-right" vds-icon="triangle-down"></span> triangle-down</li>
            <li><span class="vds-margin-small-right" vds-icon="triangle-left"></span> triangle-left</li>
            <li><span class="vds-margin-small-right" vds-icon="triangle-right"></span> triangle-right</li>
        </ul>
    </div>
</div>

<h4 class="vds-heading-line"><span>Editor</span></h4>

<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="bold"></span> bold</li>
            <li><span class="vds-margin-small-right" vds-icon="italic"></span> italic</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="strikethrough"></span> strikethrough</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="quote-right"></span> quote-right</li>
        </ul>
    </div>
</div>

<h4 class="vds-heading-line"><span>Brands</span></h4>

<div class="vds-child-width-1-3@s" vds-grid>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="500px"></span> 500px</li>
            <li><span class="vds-margin-small-right" vds-icon="behance"></span> behance</li>
            <li><span class="vds-margin-small-right" vds-icon="discord"></span> discord</li>
            <li><span class="vds-margin-small-right" vds-icon="dribbble"></span> dribbble</li>
            <li><span class="vds-margin-small-right" vds-icon="etsy"></span> etsy</li>
            <li><span class="vds-margin-small-right" vds-icon="facebook"></span> facebook</li>
            <li><span class="vds-margin-small-right" vds-icon="flickr"></span> flickr</li>
            <li><span class="vds-margin-small-right" vds-icon="foursquare"></span> foursquare</li>
            <li><span class="vds-margin-small-right" vds-icon="github"></span> github</li>
            <li><span class="vds-margin-small-right" vds-icon="github-alt"></span> github-alt</li>
            <li><span class="vds-margin-small-right" vds-icon="gitter"></span> gitter</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="google"></span> google</li>
            <li><span class="vds-margin-small-right" vds-icon="instagram"></span> instagram</li>
            <li><span class="vds-margin-small-right" vds-icon="joomla"></span> joomla</li>
            <li><span class="vds-margin-small-right" vds-icon="linkedin"></span> linkedin</li>
            <li><span class="vds-margin-small-right" vds-icon="pagekit"></span> pagekit</li>
            <li><span class="vds-margin-small-right" vds-icon="pinterest"></span> pinterest</li>
            <li><span class="vds-margin-small-right" vds-icon="reddit"></span> reddit</li>
            <li><span class="vds-margin-small-right" vds-icon="soundcloud"></span> soundcloud</li>
            <li><span class="vds-margin-small-right" vds-icon="tiktok"></span> tiktok</li>
            <li><span class="vds-margin-small-right" vds-icon="tripadvisor"></span> tripadvisor</li>
        </ul>
    </div>
    <div>
        <ul class="vds-list">
            <li><span class="vds-margin-small-right" vds-icon="tumblr"></span> tumblr</li>
            <li><span class="vds-margin-small-right" vds-icon="twitch"></span> twitch</li>
            <li><span class="vds-margin-small-right" vds-icon="twitter"></span> twitter</li>
            <li><span class="vds-margin-small-right" vds-icon="vds"></span> vds</li>
            <li><span class="vds-margin-small-right" vds-icon="vimeo"></span> vimeo</li>
            <li><span class="vds-margin-small-right" vds-icon="whatsapp"></span> whatsapp</li>
            <li><span class="vds-margin-small-right" vds-icon="wordpress"></span> wordpress</li>
            <li><span class="vds-margin-small-right" vds-icon="xing"></span> xing</li>
            <li><span class="vds-margin-small-right" vds-icon="yelp"></span> yelp</li>
            <li><span class="vds-margin-small-right" vds-icon="youtube"></span> youtube</li>
        </ul>
    </div>
</div>

***

## Ratio

Add the `ratio: 2` parameter to the `vds-icon` attribute to double its size – or any other number, depending on how big you want your icon to be.

```html
<span vds-icon="icon: check; ratio: 2"></span>
```

```example
<span class="vds-margin-small-right" vds-icon="icon: check; ratio: 2"></span>
<span vds-icon="icon: check; ratio: 3.5"></span>
```

***

## Link modifier

To reset the default link styling to a more muted color when using an icon inside an anchor, add the `.vds-icon-link` class.

```html
<a href="" class="vds-icon-link" vds-icon="heart"></a>
```

```example
<a href="#" class="vds-icon-link vds-margin-small-right" vds-icon="copy"></a>
<a href="#" class="vds-icon-link vds-margin-small-right" vds-icon="file-edit"></a>
<a href="#" class="vds-icon-link" vds-icon="trash"></a>
```

***

## Button modifier

Use the modifier `.vds-icon-button` class on an `<a>` element to create an icon button, which can be used for social icons.

```html
<a href="" class="vds-icon-button" vds-icon="twitter"></a>
```

```example
<a href="" class="vds-icon-button vds-margin-small-right" vds-icon="twitter"></a>
<a href="" class="vds-icon-button  vds-margin-small-right" vds-icon="facebook"></a>
<a href="" class="vds-icon-button" vds-icon="youtube"></a>
```

***

## Image modifier

You can also make any background image scale to the size of an icon. Just add the `.vds-icon-image` class and a background image path.

```example
<span class="vds-icon vds-icon-image" style="background-image: url(images/dark.jpg);"></span>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option  | Value  | Default | Description          |
|:--------|:-------|:--------|:---------------------|
| `icon`  | String | `''`    | The icon to display. |
| `ratio` | Number | `1`     | The icon size ratio. |

`icon` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span vds-icon="heart"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.icon(element, options);
```
### Properties

#### svg

A JavaScript Promise that will resolve with the added SVG Node.

```js
ViraDesignSystem.icon(element).svg.then(function(svg) { svg.querySelector('path').style.stroke = 'red'; })
```
