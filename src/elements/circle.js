import VdsEl from './el';
import sizeAttr from '../styles/size';

export default class VdsCircle extends VdsEl {
  static get vdsTag() {
    return 'vds-circle';
  }

  static get vdsGenerators() {
    return {
      size(val) {
        return sizeAttr(val, {}, true);
      },
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      width: '1fs 1fs',
      height: '1fs 1fs',
      size: '1em',
      radius: 'round',
      border: '',
      fill: '#bg :special[#special]',
    };
  }
}
