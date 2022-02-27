import VdsEl from './el';
import VdsInput from './input';

export default class VdsFileInput extends VdsEl {
  static get vdsTag() {
    return 'vds-fileinput';
  }

  static get vdsName() {
    return 'fileinput input';
  }

  static get vdsTemplate() {
    return `
      <vds-block place="cover" opacity="0" overflow="n"><input/></vds-block>
      <vds-icon name="upload"></vds-icon>
      <vds-value></vds-value>
    `;
  }

  static get vdsBehaviors() {
    return {
      fileinput: true,
      hover: true,
    };
  }

  static get vdsStyles() {
    return {
      ...VdsInput.vdsStyles,
      height: 'min (1lh + 2x + 2bw)',
      cursor: 'pointer',
      content: 'center start',
      gap: '2x',
      items: 'center stretch',
      mark: 'hover',
    };
  }

  static get vdsContext() {
    return {
      ...VdsInput.vdsContext,
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }`,

      `${tag} input {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scale(100, 100);
        cursor: inherit;
      }`,
    ];
  }
}
