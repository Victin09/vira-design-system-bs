/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): collapse.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/

import {
  dataDismissString,
  fadeString,
  showString,
  getElementFromSelector
} from './dom/selectors';
import EventHandler from './util/event-handler';
import { executeAfterTransition } from './util/index';

const DATA_KEY = 'vds.alert'
const EVENT_KEY = `.${DATA_KEY}`
const ALERT_CLASS = 'alert',
  ALERT_DISMISS_SELECTOR = `[${dataDismissString}="${ALERT_CLASS}"]`,
  CLICK_EVENT = `click.dismiss${EVENT_KEY}`

// Alert
class Alert {
  constructor(dismissElement, element) {
    this.dismissElement = dismissElement;
    this.element = element;
  }

  dismiss() {
    // Check if the alert should be cleared
    if(this.dismissElement && this.element) {
      // Check for both the "fade" and the "show" class on the alert
      const alertHasAnimation = this.element.classList.contains(fadeString, showString);

      // Check if the alert dismiss should be animated
      if(alertHasAnimation) {
        // Remove the "show" class from the alert
        this.element.classList.remove(showString);

        const complete = () => {
          // Remove the "fade" class from the alert
          this.element.classList.remove(fadeString);
          // Remove the alert
          this.element.remove();

          EventHandler.off(this.element, this.EVENT_KEY)
        };

        executeAfterTransition(complete, this.element, true)
      } else {
        const complete = () => {
          // Remove the alert
          this.element.remove();

          EventHandler.off(this.element, this.EVENT_KEY)
        }
        executeAfterTransition(complete, this.element, true)
      }
    }
  }
};

EventHandler.on(document, CLICK_EVENT, ALERT_DISMISS_SELECTOR, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }
  
  const target = getElementFromSelector(this) || this.closest(`.${ALERT_CLASS}`)
  // Check for the alert dismiss selector
  const alertDismiss = this.matches(ALERT_DISMISS_SELECTOR);
  new Alert(alertDismiss, target).dismiss();
})

export default Alert;
