import VdsCard from './card';

export default class VdsListBox extends VdsCard {
  static get vdsTag() {
    return 'vds-listbox';
  }

  static get vdsRole() {
    return 'listbox';
  }

  static get vdsBehaviors() {
    return {
      listbox: true,
      focus: true,
    };
  }

  static get vdsStyles() {
    return {
      padding: '.5x',
      outline: 'n',
      gap: '1bw',
      border: 'y :focus[y #special]',
    };
  }
}
