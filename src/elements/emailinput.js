import VdsInput from './input';

export default class VdsEmailInput extends VdsInput {
  static get vdsTag() {
    return 'vds-emailinput';
  }

  static get vdsBehaviors() {
    return {
      input: 'type(email)',
    };
  }
}
