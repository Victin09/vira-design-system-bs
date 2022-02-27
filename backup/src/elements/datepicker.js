import VdsEl from './el';

export default class VdsDatePicker extends VdsEl {
  static get vdsTag() {
    return 'vds-datepicker';
  }

  static get vdsStyles() {
    return {
      display: 'grid',
      gap: '',
    }
  }

  static get vdsBehaviors() {
    return {
      datepicker: true,
    };
  }
}
