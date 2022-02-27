import VdsCard from './card';

export default class VdsDebug extends VdsCard {
  static get vdsTag() {
    return 'vds-debug';
  }

  static get vdsBehaviors() {
    return {
      debugger: true,
    };
  }

  static get vdsShadowRoot() {
    return false;
  }

  static get vdsStyles() {
    return {
      gap: '1x',
    };
  }
}
