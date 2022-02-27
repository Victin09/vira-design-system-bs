import Behavior from './behavior';

export default class InputGroupBehavior extends Behavior {
  init() {
    this.on('focusin', () => {
      this.setMod('focus', true);
    });
    this.on('focusout', () => {
      this.setMod('focus', false);
    });
    this.on('click', () => {
      const input = this.host.querySelector('input');

      if (input) {
        input.focus();
      }
    }, { passive: true });
  }

  connected() {
    this.setContext('inputgroup', this);
  }
}
