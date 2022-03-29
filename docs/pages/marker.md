# Marker

<p id="toptext" class="vds-text-lead">Create a marker icon that can be displayed on top of images.</p>

## Usage

To apply this component, add the `vds-marker` attribute to any element. You can use the [Position component](position.md) to place the marker on top of an image. Also add the `.vds-transform-center` classes from the [Utility component](utility.md#transform) to center the marker itself to its upper left corner.

```html
<a href="" vds-marker></a>
```

**Note** Add the `.vds-light` or `.vds-dark` class, so that elements will be optimized for better visibility on dark or light images.

```example
<div class="vds-child-width-1-2" vds-grid>
    <div>
        <div class="vds-inline vds-dark">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
            <a class="vds-position-absolute vds-transform-center" style="left: 20%; top: 30%" href="#" vds-marker></a>
            <a class="vds-position-absolute vds-transform-center" style="left: 60%; top: 40%" href="#" vds-marker></a>
            <a class="vds-position-absolute vds-transform-center" style="left: 80%; top: 70%" href="#" vds-marker></a>
        </div>
    </div>
    <div>
        <div class="vds-inline vds-light">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
            <a class="vds-position-absolute vds-transform-center" style="left: 20%; top: 30%" href="#" vds-marker></a>
            <a class="vds-position-absolute vds-transform-center" style="left: 60%; top: 40%" href="#" vds-marker></a>
            <a class="vds-position-absolute vds-transform-center" style="left: 80%; top: 70%" href="#" vds-marker></a>
        </div>
    </div>
</div>
```
