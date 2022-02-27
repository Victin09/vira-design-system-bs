import VdsEl from './el';

export default class VdsSpacer extends VdsEl {
  static get vdsTag() {
    return 'vds-spacer';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      width: 'min 1fs',
      height: 'min 1fs',
      basis: '1fs',
      size: '1x',
    };
  }
}
