/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): collapse.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/

import { showString, getSelector } from './dom/selectors';
import { executeAfterTransition } from './util/index';
import EventHandler from './util/event-handler';

// Selectors
const COLLAPSE_CLASS = 'collapse',
      COLLAPSING_CLASS = 'collapsing',
      CLASS_NAME_HORIZONTAL = 'collapse-horizontal',
      WIDTH = 'width',
      HEIGHT = 'height',
      DATA_KEY = 'vds.collapse',
      EVENT_KEY = `.${DATA_KEY}`,
      DATA_API_KEY = '.data-api',
      EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`,
      SELECTOR_DATA_TOGGLE = '[data-vds-toggle="collapse"]';
      

// Collapse
class Collapse {
  constructor(parent, element) {
    this.parent = parent;
    this.element = element;
  }
  
  toggle() {
    if (this.isShown()) {
      this.hide()
    } else {
      this.show()
    }
  }
  
  isShown(element = this.element) {
    return element.classList.contains("show")
  }

  getDimension() {
    return this.element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT
  }

  show() {
    // Get the natural height of the content
    const getHeight = () => {
      // Make it visible
      this.element.style.display = 'block';
      // Get it's height
      const height = content.scrollHeight + 'px';
      // Hide it again
      this.element.style.display = '';

      return height;
    };

    // Remove the "collapse" class
    this.element.classList.remove(COLLAPSE_CLASS);
    // Add the "collapsing" class
    this.element.classList.add(COLLAPSING_CLASS);
    // Get element dimension
    const dimension = this.getDimension();
    // Set element dimentsion to 0
    this.element.style[dimension] = 0

    // Set the "aria-expanded" attribute to "true"
    this.parent.setAttribute('aria-expanded', true);

    // When the transition is complete, show it
    const complete = () => {
      // Remove the "collapsing" class
      this.element.classList.remove(COLLAPSING_CLASS);
      // Add both the "collapse" and the "show" class
      this.element.classList.add(COLLAPSE_CLASS, showString);
      // Remove the inline height
      this.element.style.height = '';
    };

    executeAfterTransition(complete, this.element, true)
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
    const scrollSize = `scroll${capitalizedDimension}`

    // Set element dimension
    this.element.style[dimension] = `${this.element[scrollSize]}px`
  };

  hide() {
    // Get element dimension
    const dimension = this.getDimension()
    // Set element dimension
    this.element.style[dimension] = `${this.element.getBoundingClientRect()[dimension]}px`
    // Force reflow to enable transition
    this.element.offsetHeight;
    // Add the "collapsing" class
    this.element.classList.add(COLLAPSING_CLASS);
    // Remove both the "collapse" and the "show" class
    this.element.classList.remove(COLLAPSE_CLASS, showString);
    // Set the "aria-expanded" attribute to false
    this.parent.setAttribute('aria-expanded', false);

    // When the transition is complete, hide it
    const complete = () => {
      // Remove the "collapsing" class
      this.element.classList.remove(COLLAPSING_CLASS)
      // Add the "collapse" class
      this.element.classList.add(COLLAPSE_CLASS);
    };
    // Set element dimension to 0
    this.element.style[dimension] = ''
    executeAfterTransition(complete, this.element, true)
  };
};

// API implementation
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {
    event.preventDefault()
  }
  const test = [].concat(...Element.prototype.querySelectorAll.call(document.documentElement, getSelector(this)))
  for (const element of test) {
    new Collapse(this, element).toggle();
  }
});

export default Collapse;
