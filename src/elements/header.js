import VdsRegion from './region';

export default class VdsHeader extends VdsRegion {
  static get vdsTag() {
    return 'vds-header';
  }

  static get vdsRole() {
    return 'banner';
  }

  static get vdsStyles() {
    return {
      fill: '#bg',
      z: 'front',
      transition: 'all',
    };
  }
}
