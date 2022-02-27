import VdsEl from './el';

export default class VdsTable extends VdsEl {
  static get vdsTag() {
    return 'vds-table';
  }

  static get vdsRole() {
    return 'table';
  }

  static get vdsStyles() {
    return {
      display: 'table',
      gap: '0',
    };
  }
}
