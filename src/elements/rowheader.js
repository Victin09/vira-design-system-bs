import VdsTableHeader from './tableheader';

export default class VdsRowHeader extends VdsTableHeader {
  static get vdsTag() {
    return 'vds-rowheader';
  }

  static get vdsRole() {
    return 'rowheader';
  }
}
