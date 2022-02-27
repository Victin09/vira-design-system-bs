import VdsAction from './action';

export default class VdsMenuItem extends VdsAction {
  static get vdsTag() {
    return 'vds-menuitem';
  }

  static get vdsRole() {
    return 'menuitem';
  }

  static get vdsBehaviors() {
    return {
      menuitem: true,
    };
  }

  static get vdsStyles() {
    return {
      display: 'inline-grid',
      padding: '1x 1.5x',
      border: '0',
      radius: '.5r',
      flow: 'column',
      gap: '1x',
      content: 'stretch',
      items: 'center stretch',
      mark: 'hover',
      fill: '#clear',
      text: 'sb nowrap :special[sb nowrap]',
      inset: 'n :active[#shadow.50]',
    };
  }
}
