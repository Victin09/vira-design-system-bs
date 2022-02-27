import VdsEl from './el';

export default class VdsValue extends VdsEl {
  static get vdsTag() {
    return 'vds-value';
  }

  static get vdsBehaviors() {
    return {
      value: true,
    };
  }

  static get vdsStyles() {
    return {
      filter: 'n :placeholder[saturate(0.33) contrast(0.78) opacity(var(--disabled-opacity))]',
    };
  }
}
