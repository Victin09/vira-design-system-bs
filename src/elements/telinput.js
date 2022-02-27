import VdsInput from './input';

export default class VdsTelInput extends VdsInput {
  static get vdsTag() {
    return 'vds-telinput';
  }

  static get vdsBehaviors() {
    return {
      input: 'type(tel)',
    };
  }
}
