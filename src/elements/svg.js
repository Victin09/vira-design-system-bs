import VdsEl from './el';
import { requireChild } from '../dom-helpers';

export default class VdsSvg extends VdsEl {
  static get vdsTag() {
    return 'vds-svg';
  }

  static get vdsContents() {
    return 'svg';
  }

  static get vdsBehaviors() {
    return {
      svg: true,
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      sizing: 'content',
      width: '1fs 100%',
      height: 'min 1fs',
      box: 'y',
      text: 'v-middle',
    };
  }

  vdsConnected() {
    super.vdsConnected();

    requireChild(this, 'svg');
  }
}
