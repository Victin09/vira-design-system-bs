import VdsHeading from './heading';

export default class VdsH2 extends VdsHeading {
  static get vdsTag() {
    return 'vds-h2';
  }

  static get vdsAttrs() {
    return {
      level: 2,
    };
  }
}
