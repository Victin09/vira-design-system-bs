import VdsEl from './el';

export default class VdsFlex extends VdsEl {
  static get vdsTag() {
    return 'vds-flex';
  }

  static get vdsStyles() {
    return {
      display: 'flex',
      flow: 'row',
      gap: '0',
    };
  }
}
