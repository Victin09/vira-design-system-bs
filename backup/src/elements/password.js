import VdsInput from './input';

export default class VdsPassword extends VdsInput {
  static get vdsTag() {
    return 'vds-password';
  }

  static get vdsBehaviors() {
    return {
      input: 'type(password)',
    };
  }
}
