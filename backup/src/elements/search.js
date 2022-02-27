import VdsInput from './input';

export default class VdsSearch extends VdsInput {
  static get vdsTag() {
    return 'vds-search';
  }

  static get vdsBehaviors() {
    return {
      input: 'type(search)',
    };
  }
}
