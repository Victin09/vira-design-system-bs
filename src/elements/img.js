import { parseAttr } from '../helpers';
import VdsEl from './el';
import { requireChild } from '../dom-helpers';

export default class VdsImg extends VdsEl {
  static get vdsTag() {
    return 'vds-img';
  }

  static get vdsContents() {
    return 'img';
  }

  static get vdsBehaviors() {
    return {
      image: true,
    };
  }

  static get vdsGenerators() {
    return {
      fit(val) {
        const { values, mods } = parseAttr(val);

        if (!mods.length) {
          val = 'none';
        } else {
          val = mods[0];
        }

        values[0] = values[0] || mods[1];
        values[1] = values[1] || mods[2];

        return {
          'object-fit': val,
          'object-position': `${values[0] || 'initial'} ${values[1] || ''}`,
        };
      },
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      fit: 'contain',
      sizing: 'content',
      box: 'y',
      text: 'v-middle',
      width: 'max 100%',
    };
  }

  static vdsCSS({ tag, css }) {
    return [
      ...css,

      `${tag} > img {
        display: block;
      }`,
    ];
  }

  vdsConnected() {
    super.vdsConnected();

    requireChild(this, 'img');
  }
}
