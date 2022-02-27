import Behavior from './behavior';
import { error, parseAllValues, svgElement } from '../helpers';
import Icons from '../icons';
import { ICONS_PROVIDER } from '../settings';

export default class IconBehavior extends Behavior {
  init() {
    this.setMod('icon', true);
  }

  connected() {
    this.host.vdsSetAria('hidden', true);
    this.host.vdsSetMod('provider', ICONS_PROVIDER);

    this.apply();
  }

  changed(name) {
    if (!this.isConnected) return;

    if (name === 'name') {
      this.apply();
    }
  }

  apply() {
    const { host } = this;

    const value = this.host.vdsGetAttr('name');

    // empty tag
    this.innerHTML = '';

    if (!value) return;

    const names = parseAllValues(value);

    names.forEach(name => {
      if (host.querySelector(`svg[name="${name}"]`)) return;

      Icons.load(name.trim()).then(svg => {
        if (!svg) return;

        const svgNode = svgElement(svg);

        svgNode.setAttribute('name', name);
        svgNode.style.opacity = '0';

        host.appendChild(svgNode);
      }).catch(() => {
        error('icon not found:', name);

        return '';
      });
    });
  }
}
