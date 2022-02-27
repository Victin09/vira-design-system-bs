import VdsIcon from './icon';

export default class VdsDropdownIcon extends VdsIcon {
  static get vdsTag() {
    return 'vds-dropdownicon';
  }

  static get vdsAttrs() {
    return {
      name: 'chevron-down',
    };
  }

  static get vdsStyles() {
    return {
      scale: '^parent:pressed[flip-y]', // if parent action is pressed then flip the icon
      space: '^parent:action[.5em left right] 0', // if parent is action
      color: '^parent #special :special[#special-text]',
    };
  }
}
