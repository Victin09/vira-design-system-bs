import VdsRegion from './region';

export default class VdsCard extends VdsRegion {
  static get vdsTag() {
    return 'vds-card';
  }

  static get vdsId() {
    return 'card';
  }

  static get vdsStyles() {
    return {
      padding: '2x',
      fill: '#bg :clear[#clear]',
      color: '#text :clear[current]',
      border: '1bw :clear[0]',
      radius: '1r',
      transition: 'theme, radius',
      shadow: '0 :clear[0 1x 4x #shadow.33]',
      box: 'y',
    };
  }

  vdsConnected() {
    super.vdsConnected();

    this.vdsSetContext('radiogroup', null); // remove radiogroup context
  }
}
