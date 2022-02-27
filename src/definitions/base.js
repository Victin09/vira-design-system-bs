import VdsDefinition from './definition';
import {
  computeStyles,
  log,
  normalizeAttrStates,
  parseAttr, warn,
} from '../helpers';
import { generateCSS, insertRuleSet } from '../css';
import { generateCSSByZones, RESPONSIVE_ATTR } from '../responsive';

export const BASE_ATTR = 'size';

const ElementStub = {
  vdsAllGenerators: {
    [BASE_ATTR](val) {
      const { values } = parseAttr(val, 0);

      return { 'font-size': values[0] };
    },
  },
  vdsAllStyles: {},
};

export default class VdsBase extends VdsDefinition {
  static get vdsTag() {
    return 'vds-base';
  }

  static get vdsGenerators() {
    return {
      size: '',
    };
  }

  vdsConnected() {
    super.vdsConnected();

    this.vdsApply();
  }

  vdsChanged(name, oldValue, value) {
    super.vdsChanged(name, oldValue, value);

    if (!this.vdsIsConnected) return;

    if (name === BASE_ATTR) {
      this.vdsApply();
    }
  }

  vdsApply() {
    if (document.querySelector('vds-base') !== this) {
      warn('only single instance of vds-base is allowed');

      return;
    }

    const value = this.getAttribute(BASE_ATTR);
    const normalizedValue = normalizeAttrStates(value);
    const query = ':root';
    const isResponsive = normalizedValue.includes('|');
    const respContext = this.vdsContext && this.vdsContext.responsive && this.vdsContext.responsive.context;

    let css;

    if (isResponsive && respContext) {
      const zones = ['max'].concat(respContext.getAttribute(RESPONSIVE_ATTR).split('|'));
      const styles = generateCSSByZones(ElementStub, query, BASE_ATTR, value, zones);

      css = respContext.vdsResponsive()(styles);
    } else {
      let styles = computeStyles(BASE_ATTR, value, ElementStub.vdsAllGenerators, ElementStub.vdsAllStyles);

      css = generateCSS(query, styles, true);
    }

    insertRuleSet(`base`, css, null, true);

    log('set base:', { value: normalizedValue });
  }
}
