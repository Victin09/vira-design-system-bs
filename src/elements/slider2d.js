import VdsEl from './el';

export default class VdsSlider2d extends VdsEl {
  static get vdsTag() {
    return 'vds-slider2d';
  }

  static get vdsRole() {
    return 'slider';
  }

  static get vdsTemplate() {
    return `
      <vds-circle
        id="slider-thumb"
        place="bottom left @local-rail-bottom @local-rail-left"
        size="1.25em"
        radius="round"
        fill="#special-text"
        border
        shadow="1ow #dark.50"
        space=".375em + 1bw"
        text="v-middle"
        move="@local-rail-move-v @local-rail-move-h"
        orient="h"
        opacity="1"
        outline="focus-outside visible"></vds-circle>
    `;
  }

  static get vdsStyles() {
    return {
      display: 'block',
      radius: '',
      fill: '#special-bg',
      border: '1bw',
      text: 'v-middle',
      cursor: 'pointer :disabled[default]',
      mark: '.5em hover :disabled[n]',
      transition: 'shadow',
      expand: '.5em',
      outline: 'n',
      box: 'y',
      height: '5em',
      filter: 'n :disabled[saturate(0.33) contrast(0.88) opacity(var(--disabled-opacity))]',
      '@local-rail-move-h': '.5em - 1bw',
      '@local-rail-move-v': '-.5em - 1bw',
      '@local-rail-left': '@local-offset-x',
      '@local-rail-bottom': '@local-offset-y',
    };
  }

  static get vdsBehaviors() {
    return {
      slider2d: true,
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} {
        touch-action: none;
      }`,
    ];
  }
}
