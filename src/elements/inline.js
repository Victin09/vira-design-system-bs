import VdsEl from './el';

export default class VdsInline extends VdsEl {
  static get vdsTag() {
    return 'vds-in';
  }

  static get vdsName() {
    return '';
  }

  static get vdsStyles() {
    return {
      display: 'inline',
    };
  }
}
