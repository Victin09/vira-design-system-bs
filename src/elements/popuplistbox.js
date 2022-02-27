import VdsPopup from './popup';

export default class VdsPopupListBox extends VdsPopup {
  static get vdsTag() {
    return 'vds-popuplistbox';
  }

  static get vdsRole() {
    return 'listbox';
  }

  static get vdsName() {
    return 'listbox';
  }

  static get vdsBehaviors() {
    return {
      listbox: true,
      focus: 'manual',
    };
  }

  static get vdsStyles() {
    return {
      padding: '.5x',
      outline: 'n',
      height: 'max 17',
      scrollbar: '',
      overflow: 'auto',
      place: 'outside-bottom left .5x 0',
      gap: '1bw',
      border: 'y :focus[y #special]',
      shadow: 'y',
    };
  }
}
