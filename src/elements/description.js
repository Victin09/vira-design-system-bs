import VdsEl from './el';

export default class VdsDescription extends VdsEl {
  static get vdsTag() {
    return 'vds-description';
  }

  static get vdsStyles() {
    return {
      display: 'block',
    };
  }

  vdsConnected() {
    super.vdsConnected();

    const region = this.closest('[vds-region]');

    if (region && !region.vdsHasAria('describedby') && !region.hasAttribute('labelledby')) {
      region.vdsSetAria('describedby', this.vdsUniqId);
    }
  }
}
