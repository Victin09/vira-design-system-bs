import {
  parseAllValues, setBoolAttr, setAriaRef,
} from '../helpers';
import { h } from '../dom-helpers';
import VdsBase from './base';
import BaseAttributes from '../styles/base';
import TransformCombinator from '../combinators/transform';
import ShadowCombinator from '../combinators/shadow';
import behaviors from '../behaviors/index';
import { hideEffect } from '../effects/hide';
import PositionCombinator from '../combinators/position';

/**
 * @class
 * @abstract
 */
export default class VdsEl extends VdsBase {
  static get vdsTag() {
    return 'vds-el'; // abstract tag
  }

  /**
   * Element attribute config.
   * @returns {Object}
   */
  static get vdsGenerators() {
    return {
      ...BaseAttributes,
      role: '',
      direction: '',
      control: '',
      checkbox: '',
      trigger: '',
      hidden: '',
      label: '',
      level: '',
      labelledby: '',
      describedby: '',
      valuemin: '',
      valuemax: '',
      valuenow: '',
      setsize: '',
      posinset: '',
      expanded: '',
      owns: '',
      flowto: '',
      haspopup: '',
      activedescendant: '',
      t(val) {
        return val
          ? {
            $suffix: ` > [name="${val}"]`,
            display: `block !important`,
          } : null;
      },
      ...Object.keys(behaviors.map).reduce((map, name) => {
        map[`use-${name}`] = '';

        return map;
      }, {}),
      type: '',
      precision: '',
      disabled: '',
      'link-value': '',
      value: '',
      'off-value': '',
      scrollto: '',
      action: '',
      lang: '',
      special: '',
      placeholder: '',
      min: '',
      max: '',
      step: '',
      code: '',
      sign: '',
      unit: '',
      notation: '',
      fallback: '',
      significant: '',
      integer: '',
      decimal: '',
      pressed: '',
      checked: '',
      selected: '',
      target: '',
      to: '',
      begin: '',
      end: '',
      for: '',
      assert: '',
      enumerate: '',
      date: '',
      time: '',
      weekday: '',
      era: '',
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      second: '',
      zone: '',
      timezone: '',
      dayperiod: '',
      calendar: '',
      system: '',
      hourcycle: '',
      grouping: '',
      format: '',
      src: '',
      loading: '',
      autofocus: '',
      autocomplete: '',
      pattern: '',
      maxlength: '',
      mode: '',
      mask: '',
      list: '',
      multiple: '',
      accept: '',
      // converters
      typographer: '',
      linkify: '',
      // themes
      success: '',
      danger: '',
      warning: '',
    };
  }

  static get vdsName() {
    return '';
  }

  /**
   * Element default attribute values.
   * They are used only to generate initial CSS for elements.
   */
  static get vdsStyles() {
    return {
      display: 'inline-block',
      sizing: 'border',
    };
  }

  static get vdsCombinators() {
    return {
      transform: TransformCombinator(),
      shadow: ShadowCombinator(),
      position: PositionCombinator(),
      // weight: WeightCombinator(),
    };
  }

  /**
   * Element initialization logic
   */
  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag}::selection {
        background: rgba(var(--main-outline-color-rgb, var(--outline-color-rgb)), .5);
      }`
    ];
  }

  /**
   * Attribute change reaction.
   * @param {String} name
   * @param {*} oldValue
   * @param {*} value
   */
  vdsChanged(name, oldValue, value) {
    super.vdsChanged(name, oldValue, value);

    switch (name) {
      case 'checked':
      case 'selected':
        setBoolAttr(this, 'pressed', value);
        break;
      // ARIA
      case 'label':
      case 'level':
      case 'valuemin':
      case 'valuemax':
      case 'valuenow':
      case 'setsize':
      case 'posinset':
      case 'expanded':
      case 'haspopup':
        this.vdsSetAria(name, this.vdsGetAttr(name, true));
        break;
      case 'controls':
      case 'labelledby':
      case 'describedby':
      case 'owns':
      case 'flowto':
      case 'activedescendant':
        setTimeout(() => {
          setAriaRef(this, name, value);
        });
        break;
      case 't':
        if (!this.vdsIsConnected) return;

        value = this.vdsGetAttr(name);

        const labels = parseAllValues(value);

        // empty tag
        this.innerHTML = '';

        labels.forEach(label => {
          if (this.querySelector(`vds-el[name="${label}"]`)) return;

          const el = h('vds-el');

          el.setAttribute('name', label);
          el.style.display = 'none';
          el.innerHTML = label.replace(/(^'|'$)/g, '');

          this.appendChild(el);
        });
        break;
      case 'hidden':
        hideEffect(this, value != null);
        break;
    }
  }

  vdsConnected() {
    super.vdsConnected();

    if (this.hasAttribute('t')) {
      this.vdsChanged('t', null, this.getAttribute('t'));
    }
  }

  vdsIsClamped() {
    return this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth;
  }
}
