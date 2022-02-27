import VdsInput from './input';

export default class VdsOneTimeCode extends VdsInput {
  static get vdsTag() {
    return 'vds-onetimecode';
  }

  static get vdsBehaviors() {
    return {
      input: 'type(tel)',
    };
  }

  static get vdsAttrs() {
    return {
      maxlength: '4',
      placeholder: '••••',
      autocomplete: 'one-time-code',
    };
  }
}
