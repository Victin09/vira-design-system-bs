import VdsAction from './action';

export default class VdsCheckbox extends VdsAction {
  static get vdsTag() {
    return 'vds-checkbox';
  }

  static get vdsRole() {
    return 'checkbox';
  }

  static get vdsShadowRoot() {
    return false;
  }

  static get vdsTemplate() {
    return `
      <vds-icon
        name="check checkmark"
        size="1em"
        height="1em"
        width="1em"
        color="^ #clear :pressed[#special-text]"
        fill="^ #bg :pressed[#special-bg]"
        transition="fill, color, opacity, inset"
        transition="opacity"
        radius="@context-radius"
        border="^ #text :pressed[#special-bg] :disabled.pressed[#text.50]"
        inset="^ 0 :active[.5em] :pressed[0] :active:pressed[.5em]"></vds-icon>
    `;
  }

  static get vdsStyles() {
    return {
      display: 'inline-grid',
      width: '1em + 2bw',
      height: '1em + 2bw',
      radius: '.25em',
      content: 'stretch',
      items: 'center',
      padding: '0',
      sizing: 'content',
      cursor: 'default',
      text: 'v-middle',
      mark: '.5em hover :disabled[n]',
      expand: '.5em',
      inset: 'n',
      transition: 'all',
      outline: '#clear :focus-visible[y]',
    };
  }
}
