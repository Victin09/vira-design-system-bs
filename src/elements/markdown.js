import VdsEl from './el';

export default class VdsMarkdown extends VdsEl {
  static get vdsTag() {
    return 'vds-markdown';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      gap: '1x',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} pre, ${tag} textarea {
        display: none;
      }`,
    ];
  }

  static get vdsContext() {
    return {
      'attrs:list': {
        position: 'inside',
      },
    };
  }

  static get vdsBehaviors() {
    return {
      markdown: true,
    };
  }
}
