import { ROOT, setRootContext } from './context';
import { devMode, isYesValue, requestIdleCallback } from './helpers';

const DATASET = ROOT.dataset;
const SCHEME_OPTIONS = ['auto', 'light', 'dark'];
const CONTRAST_OPTIONS = ['auto', 'no-preference', 'more'];
const ICONS_OPTIONS = ['feather', 'eva', 'ion', 'no'];
const BEHAVIORS_OPTIONS = ['auto', 'no', 'manual'];

export const preventInit = DATASET.vdsPrevent != null;
export const behaviorOption = BEHAVIORS_OPTIONS.includes(DATASET.vdsBehaviors)
  ? DATASET.vdsBehaviors
  : 'auto';

export function scheme(val) {
  let currentScheme = DATASET.vdsScheme || 'auto';

  if (!SCHEME_OPTIONS.includes(currentScheme)) {
    currentScheme = 'auto';
  }

  if (val == null) {
    return currentScheme;
  }

  if (SCHEME_OPTIONS.includes(val)) {
    DATASET.vdsScheme = val;
  }
}

export function contrast (val) {
  let currentContrast = DATASET.vdsContrast || 'auto';

  if (!CONTRAST_OPTIONS.includes(currentContrast)) {
    currentContrast = 'auto';
  }

  if (val == null) {
    return currentContrast;
  }

  if (CONTRAST_OPTIONS.includes(val)) {
    DATASET.vdsContrast = val;
  }
}

export function reduceMotion(bool) {
  if (bool == null) return DATASET.vdsReduceMotion != null;

  if (bool) {
    DATASET.vdsReduceMotion = '';
  } else {
    delete DATASET.vdsReduceMotion;
  }
}

export const USE_SHADOW = isYesValue(DATASET.vdsShadow);
export const USE_HIDDEN_STYLES = DATASET.vdsStyles === 'hidden';
export const ICONS_PROVIDER = ICONS_OPTIONS.includes(DATASET.vdsIcons) ? DATASET.vdsIcons : 'ion';
export const SCROLLBAR = DATASET.vdsScrollbar != null;

setRootContext('scheme', scheme());
setRootContext('contrast', contrast());
setRootContext('reduceMotion', scheme());
setRootContext('allowShadow', USE_SHADOW);
setRootContext('iconsProvider', ICONS_PROVIDER);

if (!reduceMotion()) {
  reduceMotion(true);

  requestIdleCallback(() => {
    reduceMotion(false);
  });
}

if (devMode) {
  DATASET.vdsDev = '';
}

/**
 * Workaround over non-consistent 100vh value on mobile devices.
 */
function setWindowHeight() {
  ROOT.style.setProperty('--window-height', `${window.innerHeight / 100}px`);
}

window.addEventListener('resize', setWindowHeight, { passive: true });

setWindowHeight();
