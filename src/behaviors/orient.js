import Behavior from "./behavior";

export const ORIENT_ATTR = 'orient';
export const VERTICAL = 'vertical';
export const HORIZONTAL = 'horizontal';

export default class OrientBehavior extends Behavior {
  constructor(host, value = '') {
    super(host);

    const mods = value.split(/\s+/g);

    this.aria = !mods.includes('no-aria');
    this.dynamic = mods.includes('dynamic');

    this.orient = mods.includes('v') ? 'v' : 'h';

    if (this.dynamic) {
      host.addEventListener('focusin', () => {
        const styles = getComputedStyle(host);

        this.set(styles.flexFlow.includes('column')
          || styles.getPropertyValue('--orient') === 'v' ? 'v' : 'h');
      }, { passive: true });
    }
  }

  set(val) {
    const { host } = this;

    if (val == null) {
      const attrValue = host.vdsGetAttr(ORIENT_ATTR, true);
      val = attrValue != null ? attrValue : 'h';
    }

    const orientation = val === 'v' ? VERTICAL : HORIZONTAL;

    host.vdsSetAria('orientation', orientation);
    host.vdsSetContext('orientation', orientation);

    this.orient = orientation;
  }

  connected() {
    this.set();
  }

  changed(name) {
    if (name === ORIENT_ATTR) {
      this.set();
    }
  }
}
