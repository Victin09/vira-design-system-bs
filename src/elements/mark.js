import VdsEl from './el';

export default class VdsMark extends VdsEl {
  static get vdsTag() {
    return 'vds-mark';
  }

  static get vdsRole() {
    return 'mark';
  }

  static get vdsStyles() {
    return {
      text: 'nowrap bolder',
      padding: '0 .25em',
      space: '0 .25em',
      radius: '1r',
      color: '#text :special[#special-text]',
      fill: '#mark :special[#special-bg] :themed[#bg] :special:themed[#special-bg]',
    };
  }
}
