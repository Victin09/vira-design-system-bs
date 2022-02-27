import { asyncDebounce, log, setAttr } from "../helpers";
import { ROOT } from '../context';

const CONTROL_REGEXP = /((|:)[a-z][a-z0-9-]+)([\s]|$|\[(!|)(\.|)([a-z0-9@-]+)(:([^)=\]]+)|)(=([^\]]+?)|)])/gi;
const BOOL_ATTRS = [
  'disabled',
  'hidden',
  'checked',
  'pressed',
  'selected',
  'special',
];

export const CONTROL_ATTR = 'control';

export default class ControlBehavior {
  constructor(host) {
    this.host = host;

    this.apply = asyncDebounce(this.apply, this);
  }

  changed(name, value) {
    if (name === CONTROL_ATTR && value) {
      this.apply(this.state, this.applyValue);
    }
  }

  apply(state, applyValue, dryRun = false) {
    this.state = state;
    this.applyValue = applyValue;

    const isBool = typeof state === 'boolean';

    const { host } = this;
    const value = host.getAttribute(CONTROL_ATTR);

    log('control triggered', state, applyValue, value);

    if (!value) return;

    let token;

    const elements = [];

    while (token = CONTROL_REGEXP.exec(value)) {
      let [s, id, special, s3, invert, dot, attr, s7, units, s9, val] = token; // lgtm [js/unused-local-variable]
      let element;

      invert = !!invert;

      if (invert && isBool) {
        state = !state;
      }

      // find controlled node

      if (special) {
        if (id === ':root') {
          element = ROOT;
        } else if (id === ':self') {
          element = host;
        } else {
          continue;
        }
      } else {
        element = host.vdsQueryById(id);
      }

      if (!element) continue;

      // if no attribute specified then just toggle element
      if (!attr) {
        if (!dryRun) {
          if (isBool) {
            element.hidden = !state;
          } else {
            element.hidden = !element.hidden;
          }
        }

        elements.push(element);

        continue;
      }

      if (BOOL_ATTRS.includes(attr)) {
        applyValue = true;
      }

      // if no value specified
      if (val == null && typeof applyValue === 'boolean') {
        if (!dryRun) {
          setAttr(element, attr, state);
        }

        elements.push(element);
      } else if (!dryRun) {
        let firstValue, secondValue;

        if (val == null) {
          firstValue = secondValue = applyValue;
        } else {
          const tmp = val.split('|');

          firstValue = tmp[0];
          secondValue = tmp[1] || firstValue;
        }

        let setValue = firstValue;

        attr = attr.replace(/^@/, '--');

        const isProp = attr.startsWith('--');

        if (state === false) {
          if (firstValue == null) {
            setValue = null;
          } else if (units) {
            setValue = `${secondValue}${units}`;
          } else {
            setValue = secondValue;
          }
        } else if (units) {
          setValue = `${firstValue}${units}`;
        }

        if (dot) {
          element[attr] = setValue;
        } else {
          if (isProp) {
            if (setValue != null && setValue !== false) {
              element.style.setProperty(attr, String(setValue));
            } else {
              element.style.removeProperty(attr);
            }
          } else {
            setAttr(element, attr, setValue != null ? String(setValue).replace(/@/g, () => applyValue) : null);
          }
        }
      }
    }

    if (elements.length) {
      const isLabelled = host.vdsHasAria('labelledby');

      host.vdsSetAria('controls', elements.map(el => {
        if (!isLabelled && !host.vdsHasAria('labelledby') && !host.hasAttribute('labelledby')) {
          host.vdsSetAria('describedby', el.vdsUniqId);
          // dont replace with vdsSetAria, it can happen before target element init!
          el.setAttribute('aria-labelledby', host.vdsUniqId);
        }

        return el.vdsUniqId;
      }).filter(id => id).join(' '));
    } else {
      host.vdsSetAria('controls', null);
    }
  }
}
