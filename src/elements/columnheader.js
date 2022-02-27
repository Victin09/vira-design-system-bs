import VdsTableHeader from './tableheader';

export default class VdsColumnHeader extends VdsTableHeader {
  static get vdsTag() {
    return 'vds-columnheader';
  }

  static get vdsRole() {
    return 'columnheader';
  }

  vdsConnected() {
    super.vdsConnected();

    const parentGroup = this.parentNode && this.parentNode.parentNode;

    if (parentGroup && parentGroup.getAttribute('role') === 'rowgroup') {
      parentGroup.setAttribute('display', 'table-header-group');
    }
  }
}
