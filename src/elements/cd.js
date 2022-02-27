import VdsCode from './code';

export default class VdsCd extends VdsCode {
  static get vdsTag() {
    return 'vds-cd';
  }

  static get vdsStyles() {
    return {
      display: 'inline-block',
      padding: '0 .25em',
      fill: 'diff',
    };
  }

  static get vdsName() {
    return 'cd -code';
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
