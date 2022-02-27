import VdsBase from '../elements/base';
import { THEME_ATTR } from '../themes';
import { RESPONSIVE_ATTR } from '../responsive';

export const IGNORE_ATTRS = ['id', 'class', 'vds', 'for'];

export default class VdsDefinition extends VdsBase {
  static get vdsTag() {
    return 'vds-definition'; // abstract tag
  }

  static get vdsStyles() {
    return {
      display: 'none',
    };
  }

  static get vdsGenerators() {
    return {
      [THEME_ATTR]: null,
      responsive: null,
      as: null,
    };
  }

  static get vdsCombinators() {
    return {};
  }

  static vdsCSS({ tag, css }) {
    return [`${tag} { display: none !important; }`];
  }

  get vdsParentSelector() {
    return `#${this.parentNode.vdsUniqId}`;
  }

  vdsSetMod(name, value) {
    if (name !== RESPONSIVE_ATTR) {
      super.vdsSetMod(name, value);
    }
  }

  get vdsOwnAttrs() {
    return [...this.attributes].reduce((map, { name, value }) => {
      if (IGNORE_ATTRS.includes(name) || name.startsWith('vds-') || name.startsWith('aria-')) return map;

      map[name] = value;

      return map;
    }, {});
  }

  vdsConnected() {
    super.vdsConnected();

    this.vdsDefinition = true;
  }
}
