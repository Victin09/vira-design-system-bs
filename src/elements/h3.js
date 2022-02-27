import VdsHeading from './heading';

export default class VdsH3 extends VdsHeading {
  static get vdsTag() {
    return 'vds-h3';
  }

  static get vdsAttrs() {
    return {
      level: 3,
    };
  }
}
