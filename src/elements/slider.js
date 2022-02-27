import VdsEl from './el';
import combinedAttr from '../styles/combined';

export default class VdsSlider extends VdsEl {
  static get vdsTag() {
    return 'vds-slider';
  }

  static get vdsRole() {
    return 'slider';
  }

  static get vdsTemplate() {
    return `
      <vds-circle
        id="slider-thumb"
        place="top left @local-rail-top @local-rail-left"
        size="1.25em"
        radius="round"
        fill="#special-text"
        border
        shadow="1ow #shadow"
        space=".375em + 1bw"
        text="v-middle"
        move="@local-rail-move-v @local-rail-move-h"
        orient="h"
        opacity="1"
        outline="focus-outside visible"></vds-circle>
    `;
  }

  static get vdsGenerators() {
    return {
      orient(val) {
        const vertical = val === 'v';

        return combinedAttr([{
          width: vertical ? '.5em' : '100%',
          height: vertical ? '10x' : '.5em',
          '--local-rail-move-h': vertical ? '-.5em - 1bw' : '-.5em + 1bw',
          '--local-rail-move-v': vertical ? '-.5em + 1bw' : '-.5em - 1bw',
          '--local-rail-top': vertical ? '(100% - @local-offset)' : '0',
          '--local-rail-left': vertical ? 'initial' : '@local-offset',
          '--local-rail-bottom': vertical ? '@local-offset' : 'initial',
          '--orient': vertical ? 'v' : 'h',
        }], VdsSlider);
      },
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      radius: 'round',
      fill: '#special',
      border: '1bw',
      text: 'v-middle',
      cursor: 'pointer :disabled[default]',
      mark: '.5em hover :disabled[n]',
      transition: 'shadow',
      expand: '.5em',
      orient: 'h',
      outline: 'n',
      box: 'y',
      filter: 'n :disabled[saturate(0.33) contrast(0.88) opacity(var(--disabled-opacity))]',
    };
  }

  static get vdsBehaviors() {
    return {
      orient: 'dynamic',
      slider: true,
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
