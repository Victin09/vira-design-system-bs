import VdsEl from './el';
import { h } from '../dom-helpers';

export default class VdsCode extends VdsEl {
  static get vdsTag() {
    return 'vds-code';
  }

  static get vdsRole() {
    return 'figure';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      radius: '1r',
      text: 'monospace',
      fill: 'hue(0 0 0) :special[#dark]',
      color: 'hue(0 0 100) :special[#light]',
      '@com-color': 'hue(0 0 low) :special[hue(0 0 12 special)]',
      '@spc-color': 'hue(0 0 100) :special[color(white)]',
      '@nam-color': 'hue(0 0 100) :special[color(white)]',
      '@key-color': 'hue(240 70) :special[hue(240 70 10 special)]',
      '@num-color': 'hue(280 100 pastel) :special[hue(280 100 10 pastel special)]',
      '@pct-color': 'hue(60 pastel) :special[hue(60 100 10 pastel special)]',
      '@rex-color': 'hue(340 70) :special[hue(340 70 10 special)]',
      '@str-color': 'hue(180 70) :special[hue(180 70 10 special)]',
      '@unk-color': 'hue(240 0) :special[hue(240 0 10 special)]',
      '@pls-color': 'hue(180 70) :special[hue(180 70 10 special)]',
      '@mns-color': 'hue(1 70) :special[hue(1 70 10 special)]',
      '@mrk-color': 'hue(240 70 60) :special[hue(240 0 0 special)]',
      '@mrk-bg-color': 'hue(240 70 3) :special[hue(240 70 50 special)]',
      '@imp-color': 'color(white)',
      '@imp-bg-color': 'hue(1 70 special)',
    };
  }

  static nuCSS({ tag, css }) {
    return [
      ...css,

      `${tag} vds-block {
        white-space: pre;
      }`,

      `${tag} > pre, ${tag} > textarea {
        display: none;
      }`,

      `${tag} vds-el {
        display: inline !important;
      }`,

      `${tag} vds-el[plus]::before {
        content: '+ ';
        display: inline-block;
      }`,

      `${tag} vds-el[minus]::before {
        content: '- ';
        display: inline-block;
      }`,

      `${tag} vds-el[number]::before {
        content: '1. ';
        display: inline-block;
      }`,

      `${tag} vds-el[fill] {
        border-radius: var(--radius);
        padding: .25em;
      }`,
    ];
  }

  static get vdsBehaviors() {
    return {
      code: true,
    };
  }

  vdsConnected() {
    super.vdsConnected();

    this.classList.add('notranslate');

    const ref = this.querySelector('textarea, pre');

    if (!ref) return;

    const container = h('vds-block');

    container.innerHTML = (ref.tagName === 'TEXTAREA' ? ref.textContent : ref.innerHTML)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/#\[\[|!\[\[|]]#|]]!/g, '');

    this.appendChild(container);
  }
}
