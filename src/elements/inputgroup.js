import VdsGroup from './group';

export default class VdsInputGroup extends VdsGroup {
  static get vdsTag() {
    return 'vds-inputgroup';
  }

  static get vdsBehaviors() {
    return {
      inputgroup: true,
    };
  }

  static get vdsStyles() {
    return {
      fill: '#input',
      outline: 'focus-inside',
      cursor: 'text',
    };
  }

  static get vdsContext() {
    return {
      'attrs:icon': {
        grow: '0',
      },
      'attrs:input': {
        border: '0',
        grow: '1',
      },
      'attrs:btn': {
        padding: '',
        border: 'n',
      },
    };
  }
}
