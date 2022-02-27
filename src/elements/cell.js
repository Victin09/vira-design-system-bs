import VdsEl from './el';

export default class VdsCell extends VdsEl {
  static get vdsTag() {
    return 'vds-cell';
  }

  static get vdsRole() {
    return 'cell';
  }

  static get vdsStyles() {
    return {
      display: '^ block :role-row[table-cell]',
      padding: '1x',
      text: 'middle',
      box: 'y',
    };
  }
}
