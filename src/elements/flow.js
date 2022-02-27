import VdsEl from './el';

export default class VdsFlow extends VdsEl {
  static get vdsTag() {
    return 'vds-flow';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      flow: 'column',
    };
  }
}
