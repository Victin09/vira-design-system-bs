import VdsInline from './inline';

export default class VdsSup extends VdsInline {
  static get vdsTag() {
    return 'vds-sup';
  }

  static get vdsStyles() {
    return {
      text: 'sup',
      size: '.75em 1em',
    };
  }
}
