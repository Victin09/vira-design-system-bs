# Avoiding conflicts

<p class="vds-text-lead">Use a custom prefix and the scope mode to make Vira Design System work in any environment.</p>

By default, all classes and attributes in Vira Design System start with the `vds-` prefix. This avoids name collisions when introducing Vira Design System to existing projects or when combining it with other frameworks. Vira Design System allows to change that prefix. This even allows using multiple versions of Vira Design System alongside each other. In addition, the scope mode allows to limit the Vira Design System styles to only affect certain parts on your pages.

***

## Custom prefix

Using a custom prefix allows using multiple versions of Vira Design System on the same page. This might be needed when you are building something like a CMS plugin. In such cases, you do not know what other versions of Vira Design System might be loaded, so it is a good idea to use a custom prefix.

When you have [set up Vira Design System from GitHub source](installation.md#compile-from-github-source), you can compile it with a custom prefix. If you choose a custom prefix, for example `xyz`, all attributes and classes will now start with that prefix, for example `xyz-grid` instead of `vds-grid`. The global JavaScript object `Vira Design System` will also be renamed to `xyzVira Design System`.


```sh
yarn prefix -- -p xyz # replace xyz with your custom prefix.
```
**Note** `yarn prefix` will prompt for a prefix.

The script will go through all CSS files in the `/dist` folder and replace them with your custom prefix version.

**Note** The Base component will still include styles that affect some base HTML elements. To avoid this, either create a [custom build](less.md) without including the Base component, or use the scoped mode.

***

## Scope mode

Using a scoped version of Vira Design System allows you to limit styles to only apply to a certain part of your document. This might be needed in environments of admin interfaces, such as the backend of WordPress or Joomla. When you have [set up Vira Design System from GitHub source](installation.md#compile-from-github-source), you can recompile Vira Design System as a scoped version.

```sh
yarn scope
```

**Note** Type ```yarn scope -- -h``` to get more options.

You will find the generated CSS and JS files in the `/dist` folder. To use the scoped version, wrap the document section with your Vira Design System markup in an element with the `.vds-scope` class.

```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>

        <!-- non Vira Design System markup -->
        ...

        <div class="vds-scope">
            <!-- your Vira Design System markup -->
            ...
        </div>
    </body>
</html>
```

Now you need to tell ```vds-modal```, ```vds-tooltip``` and ```vds-lightbox``` where to append themselves into the DOM when they do not have the ```container``` option set, e.g. the default container for said components.
To do so, set the following parameter:

```javascript
// simply pass the selector
ViraDesignSystem.container = '.vds-scope';
...
// or you can set an element directly, for example:
ViraDesignSystem.container = document.getElementById('#id-of-scope-element');
```
