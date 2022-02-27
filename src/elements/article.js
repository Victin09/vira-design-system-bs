import VdsRegion from './region';

export default class VdsArticle extends VdsRegion {
  static get vdsTag() {
    return 'vds-article';
  }

  static get vdsRole() {
    return 'article';
  }
}
