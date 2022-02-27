import VdsLink from './link';

export default class VdsBlockLink extends VdsLink {
  static get vdsTag() {
    return 'vds-blocklink';
  }

  static get vdsStyles() {
    return {
      expand: '',
      radius: '0',
    };
  }
}
