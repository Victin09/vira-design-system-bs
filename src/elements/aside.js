import VdsRegion from './region';

export default class VdsAside extends VdsRegion {
  static get vdsTag() {
    return 'vds-aside';
  }

  static get vdsRole() {
    return 'complementary';
  }
}
