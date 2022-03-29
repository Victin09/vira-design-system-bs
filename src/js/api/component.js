import { $$, camelize, fastdom, hyphenate, isPlainObject, memoize, startsWith } from 'vds-util';

export default function (ViraDesignSystem) {
    const DATA = ViraDesignSystem.data;

    const components = {};

    ViraDesignSystem.component = function (name, options) {
        const id = hyphenate(name);

        name = camelize(id);

        if (!options) {
            if (isPlainObject(components[name])) {
                components[name] = ViraDesignSystem.extend(components[name]);
            }

            return components[name];
        }

        ViraDesignSystem[name] = function (element, data) {
            const component = ViraDesignSystem.component(name);

            return component.options.functional
                ? new component({ data: isPlainObject(element) ? element : [...arguments] })
                : element
                ? $$(element).map(init)[0]
                : init();

            function init(element) {
                const instance = ViraDesignSystem.getComponent(element, name);

                if (instance) {
                    if (data) {
                        instance.$destroy();
                    } else {
                        return instance;
                    }
                }

                return new component({ el: element, data });
            }
        };

        const opt = isPlainObject(options) ? { ...options } : options.options;

        opt.name = name;

        opt.install?.(ViraDesignSystem, opt, name);

        if (ViraDesignSystem._initialized && !opt.functional) {
            fastdom.read(() => ViraDesignSystem[name](`[vds-${id}],[data-vds-${id}]`));
        }

        return (components[name] = isPlainObject(options) ? opt : options);
    };

    ViraDesignSystem.getComponents = (element) => element?.[DATA] || {};
    ViraDesignSystem.getComponent = (element, name) => ViraDesignSystem.getComponents(element)[name];

    ViraDesignSystem.connect = (node) => {
        if (node[DATA]) {
            for (const name in node[DATA]) {
                node[DATA][name]._callConnected();
            }
        }

        for (const attribute of node.attributes) {
            const name = getComponentName(attribute.name);

            if (name && name in components) {
                ViraDesignSystem[name](node);
            }
        }
    };

    ViraDesignSystem.disconnect = (node) => {
        for (const name in node[DATA]) {
            node[DATA][name]._callDisconnected();
        }
    };
}

export const getComponentName = memoize((attribute) => {
    return startsWith(attribute, 'vds-') || startsWith(attribute, 'data-vds-')
        ? camelize(attribute.replace('data-vds-', '').replace('vds-', ''))
        : false;
});
