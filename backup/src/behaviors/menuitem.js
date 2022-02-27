import Behavior from './behavior';

export default class MenuItemBehavior extends Behavior {
  static get params() {
    return {
      provideValue: false,
    };
  }

  init() {
    this.host.vdsMenuItem = this;

    this.on(['click', 'tap'], () => {
      if (this.menu) {
        this.menu.setCurrent(this);

        if (!this.hasPopup) {
          this.doAction('close', true);
        }
      }
    });
  }

  connected() {
    this.linkContext('menu', (menu) => {
      if (this.menu) {
        this.menu.removeItem(this);
      }

      this.menu = menu;

      if (menu) {
        menu.addItem(this);
      }
    }, false);
  }
}
