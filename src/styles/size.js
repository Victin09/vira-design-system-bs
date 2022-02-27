import { parseAttr } from '../helpers';
import { insertRuleSet } from '../css';

export const SIZES = {
  xxs: [.666, 1],
  xs: [.75, 1],
  sm: [.875, 1.5],
  md: [1, 1.5],
  lg: [1.125, 1.75],
  xl: [1.25, 2],
  xxl: [1.5, 2.25],
  h1: [2.5, 3],
  h2: [2.25, 3],
  h3: [1.75, 2.5],
  h4: [1.5, 2],
  h5: [1.25, 2],
  h6: [1, 1.5],
  hero: [3, 4],
};

let PROPS = '';

Object.keys(SIZES).forEach(size => {
  const arr = SIZES[size];

  PROPS += `--${size}-font-size: ${arr[0]}rem;
--${size}-line-height: ${arr[1]}rem;`;
});

insertRuleSet('vds-sizes', [`:root{${PROPS}`]);

const BASE_STYLES = {
  'font-size': 'var(--font-size)',
  'line-height': 'var(--line-height)',
};

/**
 * @param {String} val
 * @param {Object} defaults
 * @param {Boolean} [propsOnly]
 * @return {Array<Object>|undefined}
 */
export default function sizeAttr(val, defaults, propsOnly) {
  if (!val) val = 'md';

  const { mods, all, values } = parseAttr(val, 1);
  const styles = {};
  const mod = all[0];

  if (mod === 'smaller') {
    return [{
      'font-size': 'calc(var(--font-size) / 1.5)',
    }];
  } else if (mod === 'bigger') {
    return [{
      'font-size': 'var(--line-height)',
    }];
  }

  all[1] = all[1] || all[0];

  if (values.includes(all[0])) {
    let value = all[0];

    styles['--font-size'] = value === '-' ? 'inherit' : value;
  } else if (mods.includes(all[0])) {
    styles['--font-size'] = `var(--${all[0]}-font-size, inherit)`;
  } else {
    return;
  }

  if (values.includes(all[1])) {
    let value = all[1];

    styles['--line-height'] = value === '-' ? 'inherit' : value;
  } else if (mods.includes(all[1])) {
    styles['--line-height'] = `var(--${all[1]}-line-height, inherit)`;
  }

  return (propsOnly ? [] : [BASE_STYLES]).concat(styles);
}
