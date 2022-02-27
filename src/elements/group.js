import VdsEl from './el';

export default class VdsGroup extends VdsEl {
  static get vdsTag() {
    return 'vds-group';
  }

  static get vdsRole() {
    return 'group';
  }

  static get vdsBehaviors() {
    return {
      group: true,
    };
  }

  static get vdsStyles() {
    return {
      display: 'flex',
      flow: 'row',
      'group-radius': '(1r - 1bw)',
      gap: '0',
      radius: '',
      border: '',
      box: 'y',
    };
  }
}
