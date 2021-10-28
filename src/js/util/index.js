/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): index.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/

import { dataTargetString } from '../dom/selectors';

// Get the target of the controller element
const getTarget = el => {
  // Check for the "data-vds-target" attribute
  let target = el.getAttribute(dataTargetString);

  // If there isn't one
  if(!target) {
    // Check for the "href" attribute
    target = el.getAttribute('href');
  }

  // If there's a match, return the target
  return target;
};

const execute = callback => {
  if (typeof callback === 'function') {
    callback()
  }
}

export const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback)
    return
  }

  const durationPadding = 5
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding

  let called = false

  const handler = ({ target }) => {
    if (target !== transitionElement) {
      return
    }

    called = true
    transitionElement.removeEventListener('transitionend', handler)
    execute(callback)
  }

  transitionElement.addEventListener('transitionend', handler)
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement)
    }
  }, emulatedDuration)
}

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0
  }

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)

  const floatTransitionDuration = Number.parseFloat(transitionDuration)
  const floatTransitionDelay = Number.parseFloat(transitionDelay)

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0]
  transitionDelay = transitionDelay.split(',')[0]

  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000
}


const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event('transitionend'))
}

export default getTarget;
