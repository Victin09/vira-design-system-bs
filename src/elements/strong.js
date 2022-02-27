import VdsInline from './inline';

export default class VdsStrong extends VdsInline {
  static get vdsTag() {
    return 'vds-strong';
  }

  static get vdsRole() {
    return 'strong';
  }

  static get vdsStyles() {
    return {
      text: 'bold',
    };
  }
}
