import VdsPane from './pane';

export default class VdsNav extends VdsPane {
  static get vdsTag() {
    return 'vds-nav';
  }

  static get vdsRole() {
    return 'navigation';
  }
}
