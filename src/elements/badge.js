import VdsEl from './el';

export default class VdsBadge extends VdsEl {
  static get vdsTag() {
    return 'vds-badge';
  }

  static get vdsStyles() {
    return {
      display: 'inline-grid',
      flow: 'column',
      gap: '1x',
      items: 'center',
      padding: '0 .5em',
      radius: '',
      border: '1bw :special[1bw hidden]',
      text: 'nowrap :special[sb nowrap]',
      fill: '#bg :special[#special-bg]',
      color: '#text :special[#special-text]',
      box: 'y',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} {
        line-height: calc(var(--line-height) - 1px);
      }`,
    ];
  }
}
