import VdsFlex from './flex';
import { FLEX_GAP_SUPPORTED } from '../styles/gap';

export default class VdsPane extends VdsFlex {
  static get vdsTag() {
    return 'vds-pane';
  }

  static get vdsStyles() {
    return {
      items: 'center',
      gap: '',
    };
  }

  static get vdsAttrs() {
    return FLEX_GAP_SUPPORTED ? {} : {
      gap: '',
    };
  }
}
