import WidgetBehavior, { BOOL_TYPE } from "./widget";
import MenuBehavior from './menu';
import { deepQueryAll, setAttr } from '../helpers';

const Menu = MenuBehavior.prototype;

export default class RadioGroupBehavior extends WidgetBehavior {
  static get params() {
    return {
      input: true,
      provideValue: true,
      itemRole: 'radio',
      contextValue: true,
    };
  }

  init() {
    this.props.disabled = (val) => {
      const { host } = this;
      const value = BOOL_TYPE(val);

      const actionEls = deepQueryAll(host, '[vds-action]');

      actionEls.forEach(el => {
        setAttr(el, 'disabled', value);
      });

      return value;
    };

    super.init();

    this._items = [];

    this.setContext('radiogroup', this);
    this.setMod('radiogroup', true);

    this.on('keydown', this.onKeyDown.bind(this));
  }

  addItem(item) {
    Menu.addItem.call(this, item);
  }

  removeItem(item) {
    Menu.removeItem.call(this, item);
  }

  setCurrent(item) {
    Menu.setCurrent.call(this, item);
  }

  getItemsInOrder() {
    return Menu.getItemsInOrder.call(this, '[vds-action]', 'VdsAction');
  }

  onKeyDown(event) {
    Menu.onKeyDown.call(this, event);
  }
}
