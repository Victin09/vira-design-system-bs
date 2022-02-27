import VdsEl from './el';

export default class VdsGrid extends VdsEl {
  static get vdsTag() {
    return 'vds-grid';
  }

  static get vdsStyles() {
    return {
      display: 'grid',
      flow: 'grid-row',
    };
  }
}
