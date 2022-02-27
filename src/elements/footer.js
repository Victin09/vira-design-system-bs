import VdsRegion from './region';

export default class VdsArticle extends VdsRegion {
  static get vdsTag() {
    return 'vds-footer';
  }

  static get vdsRole() {
    return 'contentinfo';
  }
}
