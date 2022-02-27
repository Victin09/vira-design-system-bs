import VdsAction from './action';

export default class VdsSwitch extends VdsAction {
  static get vdsTag() {
    return 'vds-switch';
  }

  static get vdsRole() {
    return 'switch';
  }

  static get vdsShadowRoot() {
    return false;
  }

  static get vdsTemplate() {
    return `
      <vds-circle
        size="@circle-size"
        interactive="n"
        transition="transform, fill"
        move="@circle-offset"
        fill="@circle-bg-color"
        overflow="no"
        border="0"
        shadow="0 0 1ow #circle-shadow"></vds-circle>
    `;
  }

  static get vdsStyles() {
    return {
      display: 'inline-block',
      border: '1bw',
      sizing: 'content',
      radius: 'round',
      outline: 'focus visible',
      inset: `0 :active[.5em #shadow.50] :pressed[0] :pressed:active[.5em #special-shadow.50]`,
      transition: 'shadow',
      width: '(@size * 2)',
      fill: `bg :pressed[special-bg]`,
      text: 'middle',
      mark: ':focusable[hover]',
      padding: '@circle-gap',

      '@size': '1em + @circle-gap',
      '@circle-gap': '1ow',
      '@circle-size': '@size',
      '@circle-offset': `0
        :pressed[@size - 1bw]`,
      '@circle-bg-color': `@special-bg-color :pressed[@special-text-color]`,
      '@circle-shadow-color': '#shadow :pressed[#special-shadow.66]',
    };
  }
}
