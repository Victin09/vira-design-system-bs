import VdsDefinition from './definition';
import {
  log,
  normalizeAttrStates,
  parseAttr,
  parseAttrStates,
  parseColor
} from '../helpers';
import { insertRuleSet } from '../css';

export function handleProp(varName, varValue) {
  const zones = parseAttrStates(varValue);
  const isColor = varName.endsWith('-color');

  zones.map(zone => {
    const states = zone.states;

    Object.keys(states)
      .forEach(stateName => {
        const val = states[stateName];

        states[stateName] = `${varName};${(
          isColor
            ? parseColor(val).color
            : parseAttr(val).value
        ) || ''}`;
      });
  });

  return normalizeAttrStates(zones);
}

export default class VdsProps extends VdsDefinition {
  static get vdsTag() {
    return 'vds-props';
  }

  vdsConnected() {
    super.vdsConnected();

    this.vdsApply();

    if (this.vdsObserver) return;

    const observer = new MutationObserver(() => this.vdsApply());

    observer.observe(this, {
      characterData: false,
      attributes: true,
      childList: false,
      subtree: false
    });

    this.vdsObserver = observer;
  }

  vdsApply() {
    const parent = this.parentNode;
    const context = this.vdsParentSelector;
    const props = this.vdsOwnAttrs;

    if (JSON.stringify(this.vdsProps) === JSON.stringify(props)
      || !parent
      || !parent.vdsGetCSS) return;

    this.vdsProps = props;

    Object.entries(props).forEach(([varName, varValue]) => {
      const value = handleProp(varName, varValue);

      const css = parent.vdsGetCSS(context, 'prop', value);

      insertRuleSet(`prop:${varName}:${context}`, css, null, true);

      log('apply property', { context: parent, name: varName, value: value });
    });
  }
}
