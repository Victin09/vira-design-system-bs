import VdsEl from './el';

export default class VdsRoot extends VdsEl {
  static get vdsTag() {
    return 'vds-root';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      text: 'n',
    };
  }

  vdsConnected() {
    super.vdsConnected();

    this.style.opacity = '';
  }
}
