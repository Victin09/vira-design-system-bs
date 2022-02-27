import VdsAction from './action';

export default class VdsLink extends VdsAction {
  static get vdsTag() {
    return 'vds-link';
  }

  static get vdsRole() {
    return 'link';
  }

  static get vdsStyles() {
    return {
      display: 'inline-block',
      color: '#special',
      text: 'nowrap u bold',
      cursor: 'pointer',
      radius: '.5r',
      transition: 'shadow, fill, color',
      mark: '.25em hover',
      selectable: 'y',
      box: 'y',
    };
  }
}
