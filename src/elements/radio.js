import VdsAction from './action';

export default class VdsRadio extends VdsAction {
  static get vdsTag() {
    return 'vds-radio';
  }

  static get vdsRole() {
    return 'radio';
  }

  static get vdsShadowRoot() {
    return false;
  }

  static get vdsTemplate() {
    return `
      <vds-circle
        fill="^host #clear :pressed[#special-bg]"
        transition="fill"
        size="1em - 2bw"
        border="0"></vds-circle>
    `;
  }

  static get vdsStyles() {
    return {
      display: 'inline-block',
      width: '1em - 2bw',
      height: '1em - 2bw',
      border: '#text :pressed[#special-bg] :disabled.pressed[#text.50]',
      radius: 'round',
      content: 'stretch',
      items: 'center',
      padding: '1ow',
      sizing: 'content',
      cursor: 'default',
      text: 'v-middle',
      mark: 'n :focusable[.5em hover] :pressed.focusable[n]',
      inset: '0 :active[.5em] :pressed[0]',
      fill: '#bg',
      expand: '.5em',
    };
  }
}
