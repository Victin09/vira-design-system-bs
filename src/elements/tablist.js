import VdsRadioGroup from './radiogroup';
import combinedAttr from '../styles/combined';
import { convertUnit, DIRECTIONS } from '../helpers';

const ITEMS_MAP = {
  right: 'center end',
  left: 'center start',
};
const ORIENT_V = ['left', 'right'];

export default class VdsTablist extends VdsRadioGroup {
  static get vdsTag() {
    return 'vds-tablist';
  }

  static get vdsRole() {
    return 'tablist';
  }

  static get vdsGenerators() {
    return {
      direction(val) {
        let direction = DIRECTIONS.includes(val) ? val : 'bottom';
        const orientV = ORIENT_V.includes(direction);

        return combinedAttr([{
          flow: orientV ? 'column' : 'row',
        }], VdsTablist).concat({
          '--local-tab-items': ITEMS_MAP[direction] || 'center',
          '--local-tab-padding-h': orientV ? convertUnit('2x') : '0',
          '--local-tab-padding-v': orientV ? '0' : convertUnit('1x'),
          '--local-tab-expand-h': orientV ? '0' : '@local-h-gap',
          '--local-tab-expand-v': orientV ? '@local-v-gap' : '0',
          '--local-tab-gap': orientV ? convertUnit('1x') : convertUnit('2x'),
        });
      },
    }
  }

  static get vdsStyles() {
    return {
      direction: 'bottom',
      gap: '@local-tab-gap',
      flow: null,
    };
  }

  static get vdsBehaviors() {
    return {
      orient: 'dynamic',
      radiogroup: 'item-role(tab)',
    };
  }
}
