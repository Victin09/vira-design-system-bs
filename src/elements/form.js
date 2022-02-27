import VdsFlow from './flow';

export default class VdsForm extends VdsFlow {
  static get vdsTag() {
    return 'vds-form';
  }

  static get vdsRole() {
    return 'form';
  }

  static get vdsBehaviors() {
    return {
      form: true,
    };
  }

  static get vdsStyles() {
    return {
      gap: '2x',
    };
  }

  static get vdsType() {
    return 'object';
  }
}
