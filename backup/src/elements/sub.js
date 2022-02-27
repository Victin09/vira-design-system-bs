import VdsInline from './inline';

export default class VdsSub extends VdsInline {
  static get vdsTag() {
    return 'vds-sub';
  }

  static get vdsStyles() {
    return {
      text: 'sub',
      size: '.75em 1em',
    };
  }
}
