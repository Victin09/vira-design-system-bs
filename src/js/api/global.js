import { $, apply, isString, mergeOptions, parents, toNode } from 'vds-util';

export default function (ViraDesignSystem) {
    const DATA = ViraDesignSystem.data;

    ViraDesignSystem.use = function (plugin) {
        if (plugin.installed) {
            return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
    };

    ViraDesignSystem.mixin = function (mixin, component) {
        component = (isString(component) ? ViraDesignSystem.component(component) : component) || this;
        component.options = mergeOptions(component.options, mixin);
    };

    ViraDesignSystem.extend = function (options) {
        options = options || {};

        const Super = this;
        const Sub = function ViraDesignSystemComponent(options) {
            this._init(options);
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = mergeOptions(Super.options, options);

        Sub.super = Super;
        Sub.extend = Super.extend;

        return Sub;
    };

    ViraDesignSystem.update = function (element, e) {
        element = element ? toNode(element) : document.body;

        for (const parentEl of parents(element).reverse()) {
            update(parentEl[DATA], e);
        }

        apply(element, (element) => update(element[DATA], e));
    };

    let container;
    Object.defineProperty(ViraDesignSystem, 'container', {
        get() {
            return container || document.body;
        },

        set(element) {
            container = $(element);
        },
    });

    function update(data, e) {
        if (!data) {
            return;
        }

        for (const name in data) {
            if (data[name]._connected) {
                data[name]._callUpdate(e);
            }
        }
    }
}
