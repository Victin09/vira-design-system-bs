import VdsDefinition from './definition';
import { getAllAttrs, ELEMENTS_MAP } from '../elements/base';

function getSelector(id, oldId) {
  id = id.replace(/^\$+/, '');
  oldId = oldId ? oldId.replace(/^\$+/, '') : null;

  return `* > vds-attrs[for="${id}"], ${(!ELEMENTS_MAP[id] ? `[as*="${id}"], [id="${id}"], [id^="${id}--"], [vds-${id}]` : id)}${
    oldId
      ? `, * > vds-attrs[for="${oldId}"]${(!ELEMENTS_MAP[oldId]
        ? `, [as*="${oldId}"], [id="${oldId}"], [id^="${oldId}--"], [vds-${oldId}]`
        : `, ${oldId}`)}`
      : ''}`;
}

export default class VdsAttrs extends VdsDefinition {
  static get vdsTag() {
    return 'vds-attrs';
  }

  static get vdsGeneratorsList() {
    return ['for'].concat(getAllAttrs());
  }

  vdsConnected() {
    super.vdsConnected();

    setTimeout(() => {
      this.vdsApply();
    });
  }

  vdsChanged(name, oldValue, value) {
    super.vdsChanged(name, oldValue, value);

    this.vdsApply();
  }

  vdsApply() {
    if (!this.vdsIsConnected) {
      return;
    }

    const parent = this.parentNode;
    let id = this.getAttribute('for');

    if (!this.vdsContext.allowShadow) {
      id = id.replace(/^\$+/, '');
    }

    // Clear previous declaration
    const oldId = this.vdsFor !== id ? this.vdsFor : null;

    if (oldId) {
      parent.vdsSetContext(`attrs:${oldId}`, null);
    }

    if (!parent.vdsContext || !id) return;

    this.vdsParent = parent;
    this.vdsFor = id;

    const attrs = this.vdsOwnAttrs;
    const key = `attrs:${id}`;
    const parentDefine = parent.vdsParentContext[key];
    const define = parentDefine ? Object.assign({}, parentDefine) : {};

    delete attrs.for;

    Object.keys(attrs).forEach(name => {
      define[name] = attrs[name];
    });

    define.$shadowRoot = this.vdsContext.$shadowRoot;

    parent.vdsSetContext(`attrs:${id}`, define);

    const selector = getSelector(id, oldId);
    const shadow = id.startsWith('$') || (oldId && oldId.startsWith('$'));

    parent.vdsVerifyChildren({ attrs: selector, shadow, ignore: parent.vdsQueryChildren('vds-attrs') });
  }

  // vdsGetCriticalCSS() {
  //   const parent = this.parentNode;
  //   const uniqId = parent.vdsUniqId;

  //   if (!uniqId || uniqId.includes('--')) return '';

  //   const id = this.getAttribute('for');
  //   const attrs = this.vdsOwnAttrs;
  //   const selector = getSelector(id);
  //   const Element = ELEMENTS_MAP[id] || ELEMENTS_MAP['vds-el'];
  //   const context = `#${uniqId}`;

  //   delete attrs.for;

  //   let styles, query, css = '';

  //   Object.keys(attrs).forEach(name => {
  //     const value = attrs[name];

  //     styles = computeStyles(name, value, Element.vdsAllGenerators, Element.vdsAllStyles);

  //     if (styles) {
  //       selector.split(', ').forEach(sel => {
  //         query = `${context} ${sel}:not([${name}])`;

  //         css += generateCSS(query, styles, true);
  //       });
  //     }
  //   });

  //   return css;
  // }

  vdsDisconnected() {
    super.vdsDisconnected();

    const parent = this.vdsParent;

    if (!parent) return;

    const id = this.getAttribute('for');
    const selector = getSelector(id);
    const shadow = id.startsWith('$');

    parent.vdsSetContext(`attrs:${id}`, null);

    parent.vdsVerifyChildren({ attrs: selector, shadow });
  }
}
