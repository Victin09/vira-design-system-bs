import VdsFlow from './flow';

export default class VdsRegion extends VdsFlow {
  static get vdsTag() {
    return 'vds-region';
  }

  static get vdsRole() {
    return 'region';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      flow: 'column',
      box: 'y',
    };
  }
}
