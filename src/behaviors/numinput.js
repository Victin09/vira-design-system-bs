import InputBehavior from './input';
import NumberFormat from '../formatters/number';
import { getFloatFromAttr, isEqual } from '../helpers';

export default class NumInputBehavior extends InputBehavior {
  init() {
    this.props.value = (val) => {
      if (val == null) {
        this.setValue(null);
      } else {
        this.setValue(getFloatFromAttr(val, 0), true);
      }
    };
    this.props.min = (val) => {
      return getFloatFromAttr(val, Number.MIN_SAFE_INTEGER);
    };
    this.props.max = (val) => {
      return getFloatFromAttr(val, Number.MAX_SAFE_INTEGER);
    };
    this.props.type = 'number';

    super.init();

    const { ref } = this;

    ref.type = 'number';
    ref.inputMode = 'decimal';
    ref.value = this.value;

    ref.addEventListener('focus', (event) => {
      try {
        ref.select();
      } catch (e) {
      }
    });
  }

  changed(name, value) {
    super.changed(name, value);

    this.declareProps();
  }

  setValue(value, silent) {
    const originValue = value;

    if (value != null) {
      value = getFloatFromAttr(value);
    }

    if (value != null) {
      if (value > this.max) {
        value = this.max;
      } else if (value < this.min) {
        value = this.min;
      }
    }

    if (this.ref) {
      if (originValue == null || originValue === '') {
        if (this.ref.value) {
          this.ref.value = '';
        }
      } else {
        this.ref.value = value;
      }
    }

    if (isEqual(this.value, value)) return;

    this.value = value;

    if (!silent) {
      this.emit('input', this.value);
    }

    this.declareProps();
  }

  declareProps() {
    let visibleValue = this.value != null ? `"${NumberFormat(this.value, this.locale, this)}"` : `"${this.placeholder}"`;

    this.host.style.setProperty('--value', visibleValue);
  }
}
