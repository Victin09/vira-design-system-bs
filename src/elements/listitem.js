import VdsEl from './el';

export default class VdsListItem extends VdsEl {
  static get vdsTag() {
    return 'vds-listitem';
  }

  static get vdsRole() {
    return 'listitem';
  }

  static get vdsStyles() {
    return {
      display: 'list-item',
    };
  }
}
