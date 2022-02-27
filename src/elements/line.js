import combinedAttr from '../styles/combined';
import sizeAttr from '../styles/size';
import VdsEl from './el';

export default class VdsLine extends VdsEl {
  static get vdsTag() {
    return 'vds-line';
  }

  static get vdsRole() {
    return 'separator';
  }

  static get vdsBehaviors() {
    return {
      orient: true,
    };
  }

  static get vdsGenerators() {
    return {
      orient(val) {
        const vertical = val === 'v';

        return combinedAttr({
          width: vertical ? '1fs 1fs' : 'min 1em',
          height: vertical ? 'min 1em' : '1fs 1fs',
        }, VdsLine);
      },
      size(val) {
        return sizeAttr(val, {}, true);
      },
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      place: 'stretch',
      orient: 'h',
      size: '1bw',
      fill: 'var(--local-border-color, var(--border-color)) :special[special]',
      text: 'v-middle',
      box: 'y',
      transition: 'fill',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} {
        line-height: 0 !important;
      }`,
    ];
  }
}
