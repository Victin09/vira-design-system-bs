import VdsEl from './el';

export default class VdsDateTime extends VdsEl {
  static get vdsTag() {
    return 'vds-datetime';
  }

  static get vdsBehaviors() {
    return {
      datetime: true,
    };
  }
}
