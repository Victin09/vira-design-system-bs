import { hyphenate, isEmpty, memoize, remove, within } from 'vds-util';

export default function (ViraDesignSystem) {
    const DATA = ViraDesignSystem.data;

    ViraDesignSystem.prototype.$create = function (component, element, data) {
        return ViraDesignSystem[component](element, data);
    };

    ViraDesignSystem.prototype.$mount = function (el) {
        const { name } = this.$options;

        if (!el[DATA]) {
            el[DATA] = {};
        }

        if (el[DATA][name]) {
            return;
        }

        el[DATA][name] = this;

        this.$el = this.$options.el = this.$options.el || el;

        if (within(el, document)) {
            this._callConnected();
        }
    };

    ViraDesignSystem.prototype.$reset = function () {
        this._callDisconnected();
        this._callConnected();
    };

    ViraDesignSystem.prototype.$destroy = function (removeEl = false) {
        const { el, name } = this.$options;

        if (el) {
            this._callDisconnected();
        }

        this._callHook('destroy');

        if (!el?.[DATA]) {
            return;
        }

        delete el[DATA][name];

        if (!isEmpty(el[DATA])) {
            delete el[DATA];
        }

        if (removeEl) {
            remove(this.$el);
        }
    };

    ViraDesignSystem.prototype.$emit = function (e) {
        this._callUpdate(e);
    };

    ViraDesignSystem.prototype.$update = function (element = this.$el, e) {
        ViraDesignSystem.update(element, e);
    };

    ViraDesignSystem.prototype.$getComponent = ViraDesignSystem.getComponent;

    const componentName = memoize((name) => ViraDesignSystem.prefix + hyphenate(name));
    Object.defineProperties(ViraDesignSystem.prototype, {
        $container: Object.getOwnPropertyDescriptor(ViraDesignSystem, 'container'),

        $name: {
            get() {
                return componentName(this.$options.name);
            },
        },
    });
}
