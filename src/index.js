import {
  devMode,
  isDefined,
  isTouch,
  log,
  warn,
  deepQueryAll,
  deepQuery,
  requestIdleCallback,
  resetScroll,
  isEqual,
  error,
} from './helpers';
import { extractColor } from './dom-helpers';

import { define, assign as baseAssign } from './api';

export { FLEX_GAP_SUPPORTED } from './styles/gap';
import initSticky from './sticky';

import * as elements from './elements';
import VdsBase from './elements/base';
import styles from './styles/base';
import VdsAction from './elements/action';
// export * from './behaviors/widget';
// export * from './helpers';
import { findContrastLightness, rgbToHsl, hslToRgb, hplToRgb, getContrastRatio } from './color';
// import * as themes from './themes';
// import * as css from './css';
import behaviors from './behaviors';
import units from './units';
import svg from './svg';
import icons from './icons';
import routing from './routing';
import themeAttr from './styles/theme';
import props from './props';
import generators from './generators';
import { scheme, contrast, reduceMotion, preventInit, behaviorOption } from './settings';
import CONTEXT, { initContext } from './context';
import { applyTheme, BASE_THEME, hue, generateTheme, themeToProps, THEME_MAP } from './themes';
import { generateCSS, insertRuleSet, stylesString } from './css';
import Behavior from './behaviors/behavior';

import('./focus-visible.js').then(() => {
  // do nothing
});

initSticky(); // enable sticky detection

function assign(element, options, replace) {
  return baseAssign(element, options, elements, replace);
}

const color = {
  extractColor,
  findContrastLightness,
  rgbToHsl,
  hslToRgb,
  hplToRgb,
  getContrastRatio,
};

const themes = {
  generate: generateTheme,
  convertToProps: themeToProps,
};

const helpers = {
  resetScroll,
  stylesString,
};

const BODY = document.body;

if (window.ViraDesign) {
  throw error('Several instances of ViraDesign Framework is loaded. Initialization aborted');
}

setTimeout(() => {
  applyTheme(BODY, BASE_THEME, 'main');
});

const themeStyles = themeAttr('main');

insertRuleSet('theme:base', generateCSS('body', [...themeStyles, {
  '--diff-color': 'var(--bg-color)',
}], false));

const ViraDesign = {
  initialized: false,
  tags: {},
  isTouch,
  version: process.env.APP_VERSION,
  scheme,
  contrast,
  reduceMotion,
  behaviors,
  Behavior,
  props,
  generators,
  CONTEXT,
  routing,
  icons,
  svg,
  elements,
  deepQueryAll,
  deepQuery,
  requestIdleCallback,
  helpers,
  styles,
  isEqual,
  define,
  assign,
  units,
  hue,
  themes,
  color,
  dev: devMode,
  env: typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'production',
  // css,
};

Object.keys(THEME_MAP).forEach(theme => {
  CONTEXT[`theme:${theme}`] = THEME_MAP[theme];
});

function defineElement(el) {
  const tag = el.vdsTag;

  if (isDefined(tag)) {
    if (devMode) {
      warn('already defined: ', JSON.stringify(tag));
    }

    return;
  }

  // For hidden elements generate styles immediately
  if (el.vdsAllStyles.display === 'none') {
    el.vdsInit();
  }

  customElements.define(tag, el);
}

ViraDesign.init = () => {
  if (ViraDesign.initialized) {
    log('already initialized');

    return;
  }

  initContext();

  const rootEls = document.querySelectorAll('vds-root');

  rootEls.forEach(el => {
    el.vdsParent = el.parentNode;

    el.parentNode.removeChild(el);

    el.style.visibility = 'hidden';
  });

  // init all vira elements
  Object.values(elements)
    .forEach(defineElement);

  // show all vds-root elements back
  rootEls.forEach(el => {
    el.vdsParent && el.vdsParent.appendChild(el);
  });

  // setTimeout is used to give some time for themes to initialize.
  setTimeout(() => {
    rootEls.forEach(el => {
      el.style.visibility = '';
    });

    requestAnimationFrame(() => {
      window.dispatchEvent(viraReadyEvent);
    });
  }, 50);

  ViraDesign.initialized = true;
};

ViraDesign.getElementById = function (id) {
  return document.querySelector(`[vds-id="${id}"]`);
};

ViraDesign.getElementsById = function (id) {
  return document.querySelectorAll(`[vds-id="${id}"]`);
};

window.ViraDesign = ViraDesign;

const viraReadyEvent = new CustomEvent('viraReady', { cancelable: true });
const vdsReadyEvent = new CustomEvent('vdsReady');

if (behaviorOption !== 'auto') {
  Object.keys(elements)
    .forEach(name => {
      const Element = elements[name];

      assign(Element.vdsTag, {
        behaviors: {},
      }, true);
    });

  if (behaviorOption === 'no') {
    behaviors.clearAll();
  }
}

if (window.dispatchEvent(viraReadyEvent) && !preventInit) {
  ViraDesign.init();
}

export default ViraDesign;

export {
  STATES_MAP,
  CUSTOM_UNITS,
  ROOT_CONTEXT,
} from './helpers';

export {
  ViraDesign,
  VdsBase,
  VdsAction,
  elements,
  scheme,
  contrast,
  reduceMotion,
  CONTEXT,
  behaviors,
  Behavior,
  routing,
  icons,
  svg,
  deepQueryAll,
  deepQuery,
  requestIdleCallback,
  helpers,
  isEqual,
  styles,
  define,
  assign,
  units,
  hue,
  themes,
  color,
  // css,
};
