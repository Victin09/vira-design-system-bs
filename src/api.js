import VdsEl from './elements/el';
import { log, warn } from './helpers';

const OBJ_ASSIGN = ['attrs', 'styles', 'generators', 'behaviors', 'combinators'];

const staticBind = {
  id: 'vdsId',
  tag: 'vdsTag',
  role: 'vdsRole',
  attrs: 'vdsAttrs',
  styles: 'vdsStyles',
  contents: 'vdsContents',
  context: 'vdsContext',
  css: 'vdsCSS',
  generators: 'vdsGenerators',
  name: 'vdsName',
  template: 'vdsTemplate',
  behaviors: 'vdsBehaviors',
  combinators: 'vdsCombinators',
};

const prototypeBind = {
  connected: 'vdsConnected',
  disconnected: 'vdsDisconnected',
  changed: 'vdsChanged',
};

export function define(tag, options, skipDefine) {
  const Parent = options.parent || VdsEl;

  const Element = class Element extends Parent {};

  options.tag = tag;

  Object.keys(staticBind).forEach(key => {
    const val = options[key];

    if (val != null) {
      Object.defineProperty(Element, staticBind[key], {
        value: val,
      });
    }
  });

  Object.keys(prototypeBind).forEach(key => {
    const val = options[key];

    if (val != null) {
      const method = prototypeBind[key];

      Element.prototype[method] = function(...args) {
        const parentFunc = Element.vdsParentClass.prototype[method];

        if (parentFunc) {
          parentFunc.apply(this, args);
        }

        val.apply(this, args);
      };
    }
  });

  if (!skipDefine) {
    customElements.define(tag, Element);
  }

  return Element;
}

/**
 * Assign new options to the element.
 * @param {VdsElement} element
 * @param {Object} options
 * @param {Object<String,HTMLElement>} elements
 * @param {Boolean} replace
 */
export function assign(element, options, elements = {}, replace) {
  Object.keys(options)
    .forEach(option => {
      assignOption(element, option, options[option], elements, replace);
    });
}

export function assignOption(element, prop, value, elements = {}, replace) {
  if (!(prop in staticBind)) {
    warn('assign: Property not found');

    return;
  }

  if (typeof element === 'string') {
    element = Object.values(elements).find(el => el.vdsTag === element);

    if (!element) {
      warn('assign: Element not found', JSON.stringify(element));
      return;
    }
  }

  const propName = staticBind[prop];
  const oldValue = element[propName];

  let newValue = value;

  if (OBJ_ASSIGN.includes(prop) && !replace) {
    newValue = Object.assign(oldValue || {}, newValue);
  }

  if (prop === 'css' && typeof newValue === 'function' && !replace) {
    const newCSS = newValue;

    newValue = ({ tag, css }) => {
      return [...(oldValue({ tag, css}) || []), ...(newCSS({ tag, css}) || [])];
    };
  }

  Object.defineProperty(element, propName, {
    value: newValue,
  });

  log('property assigned:', `${element.vdsTag}.${prop}:`, newValue);
}
