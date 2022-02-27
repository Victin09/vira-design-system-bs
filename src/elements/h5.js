import VdsHeading from './heading';

export default class VdsH5 extends VdsHeading {
  static get vdsTag() {
    return 'vds-h5';
  }

  static get vdsAttrs() {
    return {
      level: 5,
    };
  }
}
