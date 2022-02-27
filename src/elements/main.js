import VdsRegion from './region';

export default class VdsMain extends VdsRegion {
  static get vdsTag() {
    return 'vds-main';
  }

  static get vdsRole() {
    return 'main';
  }
}
