import VdsInline from './inline';

export default class VdsSpecial extends VdsInline {
  static get vdsTag() {
    return 'vds-special';
  }

  static get vdsStyles() {
    return {
      color: '#special',
      text: 'sb',
    };
  }
}
