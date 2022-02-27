import VdsHeading from './heading';

export default class VdsH1 extends VdsHeading {
  static get vdsTag() {
    return 'vds-h1';
  }

  static get vdsAttrs() {
    return {
      level: 1,
    };
  }
}
