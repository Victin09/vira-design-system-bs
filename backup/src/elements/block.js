import VdsEl from './el';

export default class VdsBlock extends VdsEl {
  static get vdsTag() {
    return 'vds-block';
  }

  static get vdsStyles() {
    return {
      display: 'block',
    };
  }
}
