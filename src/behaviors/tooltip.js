import Behavior from './behavior';
import { fixPosition, isTouch } from '../helpers';

export default class TooltipBehavior extends Behavior {
  connected() {
    const { host } = this;
    const parent = this.parent = this.host.parentNode;

    if (parent && parent.vdsElement && !parent.hasAttribute('describedby')) {
      parent.setAttribute('describedby', this.vdsId);
    }

    let hover = false;
    let focus = false;

    host.hidden = true;

    this.setMod('tooltip', true);

    if (isTouch) return;

    const showTooltip = () => {
      this.use('fixate')
        .then(Fixate => Fixate.start());

      host.hidden = false;
      parent.vdsSetMod('tooltip-shown', true);
    };

    const hideTooltip = () => {
      this.use('fixate')
        .then(Fixate => Fixate.end());

      host.hidden = true;
      parent.vdsSetMod('tooltip-shown', false);
    };

    const onMouseEnter = () => {
      hover = true;

      if (focus) return;

      showTooltip();

      setTimeout(() => {
        fixPosition(host);
      });
    };

    const onMouseLeave = () => {
      hover = false;
      focus = false;

      hideTooltip();
    };

    const onFocus = () => {
      focus = true;

      if (hover) return;

      showTooltip();
    };

    const onBlur = () => {
      focus = false;

      if (hover) return;

      hideTooltip();
    };

    parent.addEventListener('hoverstart', onMouseEnter);
    parent.addEventListener('hoverend', onMouseLeave);

    this.removeListeners = () => {
      parent.removeEventListener('hoverstart', onMouseEnter);
      parent.removeEventListener('hoverend', onMouseLeave);
    };

    host.vdsSetContextHook('focus', (val) => {
      if (val) {
        onFocus();
      } else {
        onBlur();
      }
    });
  }

  disconnected() {
    const removeListeners = this.removeListeners;

    if (removeListeners) {
      removeListeners();
    }
  }
}
