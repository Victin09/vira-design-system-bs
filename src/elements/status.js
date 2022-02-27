import VdsEl from './el';

export default class VdsStatus extends VdsEl {
  static get vdsTag() {
    return 'vds-status';
  }

  static get vdsRole() {
    return 'status';
  }

  static get vdsAttrs() {
    return {
      'aria-live': 'polite',
    };
  }
}
