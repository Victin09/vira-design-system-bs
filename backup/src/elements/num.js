import VdsEl from './el';

export default class VdsNum extends VdsEl {
  static get vdsTag() {
    return 'vds-num';
  }

  static get vdsBehaviors() {
    return {
      number: true,
    };
  }
}
