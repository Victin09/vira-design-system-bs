import VdsHeading from './heading';

export default class VdsH4 extends VdsHeading {
  static get vdsTag() {
    return 'vds-h4';
  }

  static get vdsAttrs() {
    return {
      level: 4,
    };
  }
}
