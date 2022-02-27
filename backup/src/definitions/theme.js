import VdsDefinition from './definition';
import { ALL_THEME_MODS, declareTheme, hueFromString, removeTheme } from '../themes';
import { devMode, warn } from '../helpers';
import { getOptimalSaturation } from '../color';

const ATTRS_LIST = [
  'name',
  'hue',
  'saturation',
  'pastel',
  'mod',
];

const NAME_STOP_LIST = [
  'text',
  'bg',
  'border',
  'mark',
  'outline',
  'subtle',
  'text',
  'special',
  'input',
  'diff',
  'local',
  'main',
  'tint',
  'tone',
  'swap',
];

const SELECTOR = '[vds][theme]';

const VERIFY_MAP = new Map;

/**
 * @class
 * @property vdsParent
 */
export default class VdsTheme extends VdsDefinition {
  static get vdsTag() {
    return 'vds-theme';
  }

  static get vdsGenerators() {
    return ATTRS_LIST.reduce((attrs, attr) => {
      attrs[attr] = '';

      return attrs;
    }, {});
  }

  vdsChanged(name, oldValue, value) {
    super.vdsChanged(name, oldValue, value);

    if (!this.vdsIsConnected) return;

    this.vdsApply();
  }

  vdsConnected() {
    super.vdsConnected();

    this.vdsParent = this.parentNode;

    setTimeout(() => this.vdsApply(true));
  }

  vdsDisconnected() {
    super.vdsDisconnected();

    // remove theme
    if (this.vdsParent && this.vdsName) {
      removeTheme(this.vdsParent, this.vdsName, this.vdsProps || {});
    }

    delete this.vdsParent;
  }

  vdsApply(initial = false) {
    if (!this.vdsParent) return;

    const attrs = [...this.attributes].reduce((map, attr) => {
      if (attr.name === 'pastel') {
        map[attr.name] = this.hasAttribute('pastel');
      } else {
        map[attr.name] = this.vdsGetAttr(attr.name, true);
      }

      return map;
    }, {});

    let { name = '', hue, saturation, pastel, mod } = attrs;

    const cache = JSON.stringify({ name, hue, saturation, pastel, mod });

    if (this.vdsCache === cache) return;

    this.vdsCache = cache;

    if (hue && hue !== '0' && isNaN(Number(hue))) {
      hue = hueFromString(hue);
    }

    pastel = !!pastel;
    name = name.trim();

    if (NAME_STOP_LIST.includes(name)) {
      warn('[vds-theme] reserved name used:', JSON.stringify(name));

      return;
    }

    name = name || 'main';

    hue = hue != null ? Number(hue) : null;
    saturation = saturation == null || saturation === 'auto' ? (pastel ? 100 : getOptimalSaturation(hue)) : Number(saturation);

    if (hue > 359 || hue < 0) {
      warn('[vds-theme] hue is out of range [0..359]:', JSON.stringify(hue));

      return;
    }

    if (saturation > 100 || saturation < 0) {
      warn('[vds-theme] saturation is out of range [0..100]:', JSON.stringify(saturation));

      return;
    }

    const defaultMods = mod || '';

    // check modifiers
    if (devMode) {
      const mods = defaultMods.split(/\s+/g);

      mods.forEach(md => {
        if (md && !ALL_THEME_MODS.includes(md)) {
          warn('[vds-theme] unsupported modifier:', JSON.stringify(md));
        }
      });
    }

    this.vdsName = name;
    this.vdsHue = hue;
    this.vdsSaturation = saturation;
    this.vdsPastel = pastel;
    this.vdsMods = defaultMods;

    if (!initial) {
      removeTheme(this.vdsParent, this.vdsName, this.vdsProps);
    }

    if (hue == null || hue !== hue || saturation !== saturation) {
      warn('incorrect theme', {
        definition: this,
        name,
        hue,
        saturation,
        pastel,
      });

      return;
    }

    declareTheme(this.vdsParent, name, hue, saturation, pastel, defaultMods || '');

    if (!initial) {
      const parent = this.vdsParent;

      if (!VERIFY_MAP.has(parent)) {
        VERIFY_MAP.set(parent, setTimeout(() => {
          const values = [];

          VERIFY_MAP.delete(parent);
          [...parent.querySelectorAll(SELECTOR)]
            .forEach(el => {
              values.push(...el.vdsEnsureThemes(true, values));
            });
        }));
      }
    }
  }
}
