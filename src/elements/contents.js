import VdsEl from './el';

export default class VdsContents extends VdsEl {
  static get vdsTag() {
    return 'vds-contents';
  }

  static get vdsContents() {
    return '*';
  }
}
