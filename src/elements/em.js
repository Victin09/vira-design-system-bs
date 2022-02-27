import VdsInline from './inline';

export default class VdsEm extends VdsInline {
  static get vdsTag() {
    return 'vds-em';
  }

  static get vdsRole() {
    return 'emphasis';
  }

  static get vdsStyles() {
    return {
      text: 'i',
    };
  }
}
