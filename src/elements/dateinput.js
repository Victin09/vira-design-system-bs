import VdsBtn from './btn';

export default class VdsDateInput extends VdsBtn {
  static get vdsTag() {
    return 'vds-dateinput';
  }

  static get vdsStyles() {
    return {
      padding: '1x .5x 1x 1x',
      content: 'stretch',
      height: 'min (1lh + 2b + 2x)',
    };
  }

  static get vdsBehaviors() {
    return {
      action: true,
      dateinput: true,
    };
  }
}
