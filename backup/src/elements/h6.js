import VdsHeading from './heading';

export default class VdsH6 extends VdsHeading {
  static get vdsTag() {
    return 'vds-h6';
  }

  static get vdsAttrs() {
    return {
      level: 6,
    };
  }
}
