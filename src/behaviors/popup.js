import {
  deepQuery,
  deepQueryAll,
  fixPosition, isFocusable,
  resetScroll,
  scrollParentToChild,
} from '../helpers';
import WidgetBehavior from './widget';


export default class PopupBehavior extends WidgetBehavior {
  static get params() {
    return {
      provideValue: false,
      contextValue: false,
      linkValue: false,
      linkHostValue: false,
    };
  }

  init() {
    this.host.vdsPopup = this;

    super.init();

    this.setMod('popup', true);

    this.on('mousedown', (event) => {
      event.stopPropagation();
    });

    this.on('click', (event) => {
      event.stopPropagation();
    });

    this.on('keydown', (event) => {
      const { button } = this;

      if (event.key === 'Escape') {
        if (button) {
          this.close();
          button.host.focus();
        }
        event.stopPropagation();
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.stopPropagation();
      }
    });

    this.on('mouseenter', () => {
      if (!this.button) return;

      this.button.host.style.setProperty('--local-mark-color', 'transparent');
    });

    this.on('mouseleave', () => {
      if (!this.button) return;

      this.button.host.style.removeProperty('--local-mark-color');
    });
  }

  connected() {
    const { host } = this;

    const shadowRoot = host.vdsContext.$shadowRoot;

    if (shadowRoot) {
      bindGlobalEvents(shadowRoot);
    }

    this.setContext('popup', this);

    this.provideAction('close', (bool) => {
      this.close();

      if (bool) {
        this.doAction('close');
      }
    });

    this.linkContext('button', (button, oldButton) => {
      if (oldButton) {
        oldButton.unlinkPopup(this);
      }

      if (button) {
        button.linkPopup(this);
      }
    });

    this.close(true);
  }

  disconnected() {
    this.close();

    if (this.button) {
      this.button.unlinkPopup(this);
    }

    delete this.button;
  }

  open() {
    const { host } = this;

    if (this.isOpen) return;

    host.vdsUse('fixate')
      .then(Fixate => Fixate.start());

    this.openEffect(true);

    if (this.button) {
      this.button.host.vdsSetAria('expanded', true);
    }

    fixPosition(host);

    this.emit('open', null);
    this.emit('toggle', null);

    resetScroll(host, true);

    // Select element with current value (for menus)
    function setCurrent() {
      const currentEl = deepQuery(host, '[is-current]');

      if (currentEl) {
        scrollParentToChild(host, currentEl);

        if (isFocusable(currentEl)) {
          currentEl.focus();

          return true;
        }
      }

      // Select first focusable element
      let activeElement;

      if (isFocusable(host)) {
        activeElement = host;
      } else {
        activeElement = host.vdsDeepQuery('input, [tabindex]:not([tabindex="-1"]):not([disabled])');
      }

      if (activeElement && isFocusable(activeElement)) {
        activeElement.focus();

        return true;
      }
    }

    if (!setCurrent()) {
      setTimeout(setCurrent, 100);
    }
  }

  close(silent = false) {
    const { host } = this;

    if (!this.isOpen) return;

    host.vdsUse('fixate')
      .then(Fixate => Fixate.end());

    this.openEffect(false);

    if (silent) return;

    if (this.button) {
      this.button.set(false);
      this.button.host.focus();
    }

    host.style.removeProperty('--transform');

    this.emit('close', null);
    this.emit('toggle', null);

    resetScroll(host, true);

    const childPopup = host.vdsDeepQuery('[is-popup]');

    if (childPopup) {
      childPopup.vdsPopup.close();
    }
  }

  openEffect(bool) {
    this.host.hidden = !bool;
  }

  get isOpen() {
    return !this.host.hidden;
  }
}

function findParentPopup(element) {
  const elements = [];

  while (element) {
    const VdsAction = element.VdsAction;

    if (VdsAction && VdsAction.popup) {
      const popupEl = VdsAction.popup.host;

      if (popupEl) {
        elements.push(popupEl);
      }
    }

    element = element.parentNode || element.host;
  }

  return elements;
}

function handleOutside(event) {
  if (event.vdsPopupHandled) return;

  const popups = findParentPopup(event.target);

  deepQueryAll(this === window ? document : this, '[is-popup]')
    .forEach((currentPopup) => {
      if (!popups.includes(currentPopup)) {
        if (currentPopup.vdsPopup) {
          currentPopup.vdsPopup.close();
        }

        event.vdsPopupHandled = true;
      }
    });
}

function bindGlobalEvents(root) {
  if (root.vdsPopupEventsBinded) return;

  ['mousedown', 'touchstart', 'focusin'].forEach(eventName => {
    root.addEventListener(eventName, handleOutside.bind(root), { passive: true });

    root.vdsPopupEventsBinded = true;
  });
}

bindGlobalEvents(window);
