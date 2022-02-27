import VdsEl from './el';

export default class VdsAction extends VdsEl {
  static get vdsTag() {
    return 'vds-action'; // abstract tag
  }

  static get vdsRole() {
    return 'button';
  }

  static get vdsName() {
    return 'action';
  }

  static get vdsStyles() {
    return {
      radius: '0',
      text: 'nowrap',
      transition: 'theme, radius, filter',
      outline: '#clear :focus-visible[y]',
      mark: 'n :focusable[hover]',
      cursor: 'pointer :disabled[default]',
      selectable: 'y',
      box: 'y',
      filter: 'n :disabled[saturate(0.33) contrast(0.88) opacity(var(--disabled-opacity))]',
      // for elements with transparent background
      'backdrop-filter': 'n :disabled[contrast(0.88)]',
    };
  }

  static get vdsBehaviors() {
    return {
      control: true,
      action: true,
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} {
        touch-action: manipulation;
        -webkit-tap-highlight-color: var(--mark-color);
      }`,

      `${tag}[disabled] {
        pointer-events: none;
      }`,

      `${tag} > a {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        cursor: inherit;
        color: transparent;
        text-decoration: inherit;
        text-indent: -999rem;
        white-space: nowrap;
      }`,

      `${tag} > a:focus {
        outline: none;
      }`,
    ];
  }
}
