import { isEqual } from '../helpers';
import { h } from '../dom-helpers';
import WidgetBehavior from './widget';

export default class ConverterBehavior extends WidgetBehavior {
  static get converter() {}

  constructor(host, params) {
    super(host, params);

    this.container = null;
    this.observe = null;
  }

  connected() {
    super.connected();
    setTimeout(() => this.initConverter());
  }

  initConverter() {
    if (this.ref !== this.host) return;

    const { host } = this;
    const ref = this.ref = host.querySelector('textarea, pre');

    const useShadow = host.vdsIsShadowAllowed;

    if (useShadow) {
      host.attachShadow({ mode: 'open' });
    } else {
      this.setMod('host', true);
    }

    if (!ref) {
      return;
    }

    host.vdsRef = ref;

    ref.setAttribute('role', 'none');
    ref.setAttribute('aria-hidden', 'true');

    const container = this.requireContainer();

    const observe = this.observe = this.createObserveListener(ref, container, this.constructor.converter);

    const observer = new MutationObserver(() => observe());

    observer.observe(ref, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: false
    });

    observe();
  }

  requireContainer() {
    const { host } = this;

    this.container = this.createContainer();

    const toRemove = host.vdsQueryChildren('*:not(pre):not(textarea)');

    toRemove.forEach(el => {
      el.parentNode.removeChild(el);
    });

    (host.vdsShadow || host).appendChild(this.container);

    return this.container;
  }

  createContainer() {
    return h('vds-block');
  }

  createObserveListener(ref, container, converter) {
    return () => {
      const content = this.prepareContent(ref.tagName === 'TEXTAREA'
        ? ref.textContent
        : ref.innerHTML);

      this.apply(container, content, converter);
      this.postHandler(container);
    }
  }

  setValue(value, silent) {
    this.log('set value', value, silent);

    if (typeof value !== 'string') return;

    if (isEqual(this.value, value)) return;

    this.value = value;

    const container = this.requireContainer();
    const content = this.prepareContent(value);

    this.apply(container, content, this.constructor.converter);
    this.postHandler(container);
  }

  apply(container, content, converter) {}

  prepareContent(content) {
    return content || '';
  }

  postHandler(container) {}
}
