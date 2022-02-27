import VdsInput from './input';

export default class VdsTextArea extends VdsInput {
  static get vdsTag() {
    return 'vds-textarea';
  }

  static get vdsBehaviors() {
    return {
      textarea: true,
      input: null,
    };
  }

  static get vdsStyles() {
    return {
      height: '3lh + 2x + 2bw',
    };
  }
}
