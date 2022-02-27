import sizeAttr from '../styles/size';
import VdsEl from './el';

export default class VdsIcon extends VdsEl {
  static get vdsTag() {
    return 'vds-icon';
  }

  static get vdsBehaviors() {
    return {
      icon: true,
    };
  }

  static get vdsRole() {
    return 'img';
  }

  static get vdsGenerators() {
    return {
      name(val) {
        return val
          ? {
            $suffix: ` > [name="${val}"]`,
            opacity: `1 !important`,
          } : null;
      },
      size(val) {
        return sizeAttr(val, {}, true);
      },
    };
  }

  static get vdsStyles() {
    return {
      display: 'inline-block',
      width: 'min 1fs',
      height: 'min 1lh',
      sizing: 'content',
      size: '@icon-size',
      transition: 'transform',
      box: 'y',
      text: 'middle',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} svg {
        position: absolute;
        left: 50%;
        top: 50%;
        width: var(--font-size);
        height: var(--font-size);
        transform: translate(-50%, -50%);
        transition: opacity calc(var(--transition-enabler) * var(--opacity-transition, var(--transition))) linear;
      }`,
    ];
  }
}
