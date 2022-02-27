import VdsEl from './el';

export default class VdsList extends VdsEl {
  static get vdsTag() {
    return 'vds-list';
  }

  static get vdsRole() {
    return 'list';
  }

  static get vdsGenerators() {
    return {
      type(type) {
        return {
          'list-style-type': type || 'disc',
        };
      },
      position(position) {
        return {
          'list-style-position': position || 'inside',
        };
      },
    }
  }

  static get vdsStyles() {
    return {
      display: 'block',
      flow: 'column',
      gap: '1x',
      position: 'outside',
    };
  }

  static vdsCSS({ css, tag }) {
    return [
      ...css,

      `${tag}:not([enumerate]):not([type]) {
        list-style-type: disc;
      }`,

      `${tag}[enumerate]:not([type]) {
        list-style-type: decimal;
      }`,

      `${tag} ${tag}:not([padding]) {
        padding-left: calc(var(--gap) * 4);
      }`,
    ];
  }
}
