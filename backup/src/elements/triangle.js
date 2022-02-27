import VdsEl from './el';

export default class VdsTriangle extends VdsEl {
  static get vdsTag() {
    return 'vds-triangle';
  }

  static get vdsStyles() {
    return {
      direction: 'up',
      color: '#border',
      overflow: 'no',
      text: 'v-middle',
      height: '0',
      width: '0',
      border: '(1fs / 2) #clear',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag}:not([border]):not([border]) {
        border-top: 0;
        border-bottom-color: currentColor;
        border-bottom-width: calc(var(--line-height) / 2);
      }`,

      `${tag}:not([size]):not([size]) {
        font-size: inherit;
        line-height: inherit;
      }`,
    ];
  }
}
