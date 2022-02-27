import VdsEl from './el';

export default class VdsLabel extends VdsEl {
  static get vdsTag() {
    return 'vds-label';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      text: 'sb',
      cursor: 'default',
      transition: 'theme, transform',
    };
  }

  static get vdsBehaviors() {
    return {
      label: true,
    };
  }
}
