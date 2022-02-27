import VdsEl from './el';

export default class VdsMenu extends VdsEl {
  static get vdsTag() {
    return 'vds-menu';
  }

  static get vdsRole() {
    return 'menu';
  }

  static get vdsBehaviors() {
    return {
      menu: true,
    };
  }

  static get vdsContext() {
    return {
      'attrs:popup': {
        width: '(100% + 1x) 100vw :drop[--fixate-width min-content 100vw]',
      },
    };
  }

  static get vdsStyles() {
    return {
      display: 'flex',
      flow: 'column',
      padding: '.5x',
      radius: '',
    };
  }
}
