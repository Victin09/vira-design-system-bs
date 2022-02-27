import VdsEl from './el';

export default class VdsPh extends VdsEl {
  static get vdsTag() {
    return 'vds-ph';
  }

  static get vdsId() {
    return 'ph';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      fill: '#special-bg',
      height: '1fs 1fs',
      width: 'auto :circle[1lh]',
      radius: '.5r :circle[round]',
      interactive: 'n :disabled[y]',
      filter: 'saturate(0.5) contrast(0.88)',
      opacity: .18,
      transition: 'color',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag}:not([is-static]) {
        background-image: linear-gradient(135deg, rgba(var(--special-text-color-rgb), .5) 0%, rgba(var(--special-text-color-rgb), .5) 5%, rgba(var(--special-text-color-rgb), 0) 35%, var(--special-bg-color) 50%, rgba(var(--special-bg-color-rgb), 0) 65%, rgba(var(--special-text-color-rgb), .5) 95%, rgba(var(--special-text-color-rgb), .5) 100%);
        background-repeat: repeat;
        background-size: var(--ph-animation-size);
        animation: vds-ph-animation calc(var(--ph-animation-time) * var(--transition-enabler)) linear infinite;
      }`,

      `@keyframes vds-ph-animation {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: var(--ph-animation-size) 0;
        }
      }`,
    ];
  }
}
