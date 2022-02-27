import VdsCell from './cell';

export default class VdsTableHeader extends VdsCell {
  static get vdsTag() {
    return 'vds-tableheader';
  }

  static get vdsStyles() {
    return {
      text: 'bold middle',
    };
  }
}
