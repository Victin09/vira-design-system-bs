import VdsFlex from './flex';

export default class VdsRadioGroup extends VdsFlex {
  static get vdsTag() {
    return 'vds-radiogroup';
  }

  static get vdsRole() {
    return 'radiogroup';
  }

  static get vdsBehaviors() {
    return {
      radiogroup: true,
      control: true,
    };
  }
}
