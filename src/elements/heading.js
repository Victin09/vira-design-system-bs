import { devMode, warn } from '../helpers';
import VdsEl from './el';

const LEVELS = [1, 2, 3, 4, 5, 6];

export default class VdsHeading extends VdsEl {
  static get vdsTag() {
    return 'vds-heading';
  }

  static get vdsRole() {
    return 'heading';
  }

  static get vdsGenerators() {
    return {
      level(val) {
        if (!val || !LEVELS.includes(Number(val))) val = 1;

        const fontSize = `var(--h${val}-font-size)`;
        const lineHeight = `var(--h${val}-line-height)`;

        return [{
          $suffix: ':not([size])',
          'font-size': fontSize,
          'line-height': lineHeight,
          '--font-size': fontSize,
          '--line-height': lineHeight,
        }];
      },
    };
  }

  static get vdsAttrs() {
    return {
      level: 2,
    };
  }

  static get vdsStyles() {
    return {
      display: 'block',
      level: this.vdsAttrs.level,
      color: 'var(--local-text-color, var(--text-soft-color))',
      text: 'heading',
    };
  }

  vdsChanged(name, oldValue, value) {
    super.vdsChanged(name, oldValue, value);

    switch (name) {
      case 'level':
        if (!value) value = this.constructor.vdsAttrs.level;

        if (devMode && !LEVELS.includes(Number(value))) {
          return warn('invalid heading level', value);
        }

        this.vdsSetAria('level', value);
        break;
    }
  }

  vdsConnected() {
    super.vdsConnected();

    const region = this.closest('[vds-region]');

    if (region && !region.vdsHasAria('labelledby') && !region.hasAttribute('labelledby')) {
      region.vdsSetAria('labelledby', this.vdsUniqId);
    }
  }
}
