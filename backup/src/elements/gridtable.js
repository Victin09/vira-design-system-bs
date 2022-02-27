import VdsGrid from './grid';

export default class VdsGridTable extends VdsGrid {
  static get vdsTag() {
    return 'vds-gridtable';
  }

  static get vdsRole() {
    return 'table';
  }

  static get vdsStyles() {
    return {
      width: 'min-content',
      color: '',
      overflow: 'auto',
      padding: '1x',
    };
  }

  static get vdsContext() {
    return {
      'attrs:cell': {
        shadow: '0 1bw 0 #border',
      },
    };
  }
}
