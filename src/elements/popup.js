import VdsCard from './card';

export default class VdsPopup extends VdsCard {
  static get vdsTag() {
    return 'vds-popup';
  }

  static get vdsRole() {
    return 'dialog';
  }

  static get vdsId() {
    return 'popup';
  }

  static get vdsBehaviors() {
    return {
      fixate: true,
      popup: true,
    };
  }

  static get vdsAttrs() {
    return {
      effect: '',
    };
  }

  static get vdsStyles() {
    return {
      display: 'none :popup[block]',
      shadow: '',
      z: 'front',
      opacity: ':hidden[0] 1',
      interactive: 'yes :hidden[no]',
      transition: 'opacity, transform',
      origin: 'top',
      border: '1bw outside',
      width: '100% 100vw :drop[@fixate-width min-content 100vw]',
      text: 'n wrap',
      cursor: 'default',
      place: 'outside-bottom .5x 0',
      drop: '',
      padding: '',
      selectable: 'y',
      sizing: 'content',
    };
  }
}
