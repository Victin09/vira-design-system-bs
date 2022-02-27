import VdsBtn from './btn';

export default class VdsItemBtn extends VdsBtn {
  static get vdsTag() {
    return 'vds-itembtn';
  }

  static get vdsStyles() {
    return {
      display: 'grid',
      padding: '',
      radius: '0',
      border: '0',
      fill: '#clear',
    };
  }
}
