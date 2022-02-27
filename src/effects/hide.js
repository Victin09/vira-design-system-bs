import { getRealHeight, setTransitionTimeout } from '../helpers';
import transitionAttr from '../styles/transition';

export const HIDE_EFFECT_ATTR = 'effect';

// const TRANSITION = transitionAttr('opacity, height').transition;
const EFFECTS = {
  collapse: {
    visible(el) {
      const realHeight = getRealHeight(el);

      return {
        maxHeight: `${realHeight}px`,
        opacity: '1',
      };
    },
    hidden: {
      maxHeight: '0',
      opacity: '0',
    },
    clear: ['maxHeight', 'opacity'],
    transition: transitionAttr('opacity, height').transition,
  },
};

function clear(host, effect) {
  if (effect && effect.clear) {
    effect.clear.forEach(style => {
      host.style[style] = '';
    });
  }

  host.style.transition = '';
}

function setStyles(host, styles, transition = '') {
  Object.assign(host.style, styles);

  if (transition) {
    host.style.transition = transition;
  }
}

const TRANSITION_NAME = 'hiding-time';

export function hideEffect(host, bool, effectName) {
  effectName = host.getAttribute(HIDE_EFFECT_ATTR) || effectName;
  const effect = EFFECTS[effectName];
  const isVisible = !host.style.display;

  host.vdsEffected = true;
  host.style.display = '';
  host.style.transition = '';
  host.offsetHeight; // trigger re-flow

  if (!('vdsCollapseId' in host)) {
    host.vdsCollapseId = 0;
  }

  host.vdsCollapseId++;

  const id = host.vdsCollapseId;

  const transitionInProgress = host.vdsEffectTransition;

  host.vdsEffectTransition = true;

  let visibleStyles = {}, hiddenStyles = {}, transition;

  if (effect) {
    const visibleEffect = effect.visible;
    const hiddenEffect = effect.hidden;

    transition = effect.transition;

    if (visibleEffect) {
      if (typeof visibleEffect === 'function') {
        visibleStyles = visibleEffect(host);
      } else {
        visibleStyles = visibleEffect;
      }
    }

    if (hiddenEffect) {
      if (typeof hiddenEffect === 'function') {
        hiddenStyles = hiddenEffect(host);
      } else {
        hiddenStyles = hiddenEffect;
      }
    }
  }

  const onInit = host.vdsInitial || !host.vdsIsConnected;

  if (onInit) {
    host.vdsSetMod('hidden', bool);
    host.vdsSetMod('leave', false);
    host.vdsSetMod('enter', false);

    if (bool) {
      host.style.display = 'none';
      host.vdsSetMod('enter', true);
    } else {
      delete host.style.display;
    }

    host.vdsEffectTransition = false;

    return;
  }

  if (!transitionInProgress && ((bool && !isVisible) || (!bool && isVisible))) {
    if (!isVisible) {
      host.style.display = 'none';
    }

    return;
  }

  if (!bool) {
    setStyles(host, hiddenStyles);

    host.vdsSetMod('hidden', true);
    host.vdsSetMod('enter', true);
    host.vdsSetMod('leave', false);

    host.offsetHeight; // trigger re-flow

    setStyles(host, visibleStyles, transition);

    host.vdsSetMod('hidden', false);
    host.vdsSetMod('enter', false);

    setTransitionTimeout(host, () => {
      if (id !== host.vdsCollapseId) return;

      host.vdsEffectTransition = false;

      clear(host, effect);
    }, TRANSITION_NAME);
  } else {
    setStyles(host, visibleStyles);

    host.vdsSetMod('hidden', false);
    host.vdsSetMod('leave', true);
    host.vdsSetMod('enter', false);

    host.offsetHeight; // trigger re-flow

    host.vdsSetMod('hidden', true);

    setStyles(host, hiddenStyles, transition);

    setTransitionTimeout(host, () => {
      if (id !== host.vdsCollapseId) return;

      host.vdsEffectTransition = false;

      host.style.display = 'none';
      host.vdsSetMod('leave', false);
      host.vdsSetMod('enter', true);

      clear(host, effect);
    }, TRANSITION_NAME);
  }
}
