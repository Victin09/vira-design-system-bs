/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): collapse.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/

import {
  dataToggleString,
  dataDismissString,
  fadeString,
  showString
} from './dom/selectors';
import getTarget from './util/index';
import EventHandler from './util/event-handler';
import { getElementFromSelector } from './dom/selectors'

const DATA_KEY = 'vds.modal';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`

const EVENT_SHOW = `show${EVENT_KEY}`

const OPEN_SELECTOR = '.modal.show'
const SELECTOR_DATA_TOGGLE = '[data-vds-toggle="modal"]';

const modalString = 'modal',
      modalBackdropString = 'modal-backdrop',
      modalBackdropClass = `.${modalBackdropString}`,
      modalToggleSelector = `[${dataToggleString}="${modalString}"]`,
      modalDismissSelector = `[${dataDismissString}="${modalString}"]`;

// Modal
class Modal {
  constructor(element) {
    this.element = element;
    this.isShown = false;
  }

  toggle() {
    return this.isShown ? this.hide() : this.show()
  }

  show() {
      // Check for the "fade" class on the modal
      const modalHasAnimation = this.element.classList.contains(fadeString);
  
      // Remove the keyboard focus from the trigger
      document.activeElement.blur();
      // Add "overflow: hidden" on the body
      document.body.style.overflow = 'hidden';
      // Create a new div element
      const modalBackdrop = document.createElement('div');
      // Add the "modal-backdrop" class to it
      modalBackdrop.className = modalBackdropString;
      // Append it to the body
      document.body.appendChild(modalBackdrop);
      // Show modal
      this.element.style.display = 'block';
      // Remove the "aria-hidden" attribute
      this.element.removeAttribute('aria-hidden');
      // Set the "aria-modal" attribute to "true"
      this.element.setAttribute('aria-modal', true);
      // Set the "role" attribute to "dialog"
      this.element.setAttribute('role', 'dialog');

      // Check if the modal should be animated
      if(modalHasAnimation) {
        // Add the "fade" class on the modal backdrop
        modalBackdrop.classList.add(fadeString);
        // Force reflow to enable transition
        modalBackdrop.offsetHeight;
      }

      // Add the "show" class on the modal backdrop
      modalBackdrop.classList.add(showString);

      EventHandler.on(this.element, EVENT_CLICK_DISMISS, () => {
          this.hide()
      })

      const complete = () => {
        // Add the "show" class on the modal
        this.element.classList.add(showString);
        this.isShown = true;
        // Remove event listener after it runs
        modalBackdrop.removeEventListener('transitionend', complete);
      };

      modalBackdrop.addEventListener('transitionend', complete); 
  }

  hide() {
    // Check for the "fade" class on the modal
    const modalHasAnimation = this.element.classList.contains(fadeString);
    const modalBackdrop = document.querySelector(modalBackdropClass);

    // Remove the "show" class on the modal
    this.element.classList.remove(showString);
    // Set the "aria-hidden" attribute to "true"
    this.element.setAttribute('aria-hidden', true);
    // Remove the "aria-modal" attribute
    this.element.removeAttribute('aria-modal');
    // Remove the "role" attribute
    this.element.removeAttribute('role');
    // Remove "overflow: hidden" from the body
    document.body.style.overflow = '';

    // Check if the modal should be animated
    if(modalHasAnimation) {
      const modalComplete = () => {
        // Remove the "show" class from the modal backdrop
        modalBackdrop.classList.remove(showString);
        // Remove event listener after it runs
        this.element.removeEventListener('transitionend', modalComplete);
      };

      this.element.addEventListener('transitionend', modalComplete);

      const modalBackdropComplete = () => {
        // Hide modal
        this.element.style.display = 'none';
        // Remove the modal backdrop
        modalBackdrop.remove();
        // Remove event listener after it runs
        modalBackdrop.removeEventListener('transitionend', modalBackdropComplete);
      };

      modalBackdrop.addEventListener('transitionend', modalBackdropComplete);
    } else {
      // Hide modal
      modal.style.display = 'none';
      // Remove the modal backdrop
      modalBackdrop.remove();
    }
  }
};

/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  const target = getElementFromSelector(this)

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }

  EventHandler.one(target, EVENT_SHOW, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return
    }

    EventHandler.one(target, EVENT_HIDDEN, () => {
      if (isVisible(this)) {
        this.focus()
      }
    })
  })

  // avoid conflict when clicking moddal toggler while another one is open
  const allReadyOpen = Element.prototype.querySelector.call(document.documentElement, OPEN_SELECTOR)
  if (allReadyOpen) {
    new Modal(allReadyOpen).hide();
  }

  new Modal(target).toggle();
})

export default Modal;
