import VdsEl from './el';

export default class VdsCheck extends VdsEl {
  static get vdsTag() {
    return 'vds-check';
  }

  static get vdsBehaviors() {
    return {
      validator: true,
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      opacity: ':invalid[1] 0',
      interactive: ':invalid[yes] no',
      size: 'sm',
      text: 'b',
      transition: 'opacity, height',
      color: '#danger',
    };
  }

  vdsInit() {
    this.style.maxHeight = '0';
  }
}
