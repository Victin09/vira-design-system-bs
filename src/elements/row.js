import VdsEl from './el';

export default class VdsRow extends VdsEl {
  static get vdsTag() {
    return 'vds-row';
  }

  static get vdsRole() {
    return 'row';
  }

  static get vdsStyles() {
    return {
      display: 'table-row',
      shadow: '0 1px 0 #border',
    };
  }
}
