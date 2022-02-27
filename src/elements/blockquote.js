import VdsEl from './el';

export default class VdsBlockQuote extends VdsEl {
  static get vdsTag() {
    return 'vds-blockquote';
  }

  static get vdsRole() {
    return 'blockquote';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      radius: 'right',
      border: '(1x / 2) left #special',
      fill: '#diff',
      text: 'i',
      padding: '2x',
      size: 'lg',
    };
  }

  vdsConnected() {
    super.vdsConnected();

    this.vdsSetContext('attrs:code', {
      fill: '#bg',
    });

    this.vdsSetContext('attrs:mark', {
      fill: '#bg',
    });
  }
}
