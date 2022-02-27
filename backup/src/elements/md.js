import VdsMarkdown from './markdown';

export default class VdsMd extends VdsMarkdown {
  static get vdsTag() {
    return 'vds-md';
  }

  static get vdsStyles() {
    return {
      display: 'inline-block',
      text: 'baseline',
    };
  }

  static get vdsBehaviors() {
    return {
      markdown: 'inline',
    }
  }
}
