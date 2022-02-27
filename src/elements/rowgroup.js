import VdsEl from './el';

export default class VdsRowGroup extends VdsEl {
  static get vdsTag() {
    return 'vds-rowgroup';
  }

  static get vdsRole() {
    return 'rowgroup';
  }

  static get vdsStyles() {
    return {
      display: 'table-row-group',
    };
  }
}
