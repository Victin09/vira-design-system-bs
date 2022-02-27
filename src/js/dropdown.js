/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): collapse.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/

import {
  dataToggleString,
  showString
} from './dom/selectors';
import EventHandler from './util/event-handler';


const SELECTOR_DATA_TOGGLE = `[${dataToggleString}="dropdown"]`,
  DATA_KEY = 'vds.dropdown',
  EVENT_KEY = `.${DATA_KEY}`,
  DATA_API_KEY = '.data-api',
  EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`,
  EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;

// Dropdown
class Dropdown {
  constructor(element) {
    this.element = element;
  }

  static clearMenus(event) {
    // const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE)
    const toggles = [].concat(...Element.prototype.querySelectorAll.call(document.documentElement, SELECTOR_DATA_TOGGLE))
    toggles.forEach(element => {
      const context = new Dropdown(element)
      if (!context.isShown()) {
        return
      }

      if (event.composedPath().includes(context.element) && event.type !== 'keyup') {
        return
      }

      // Check for the dropdown toggle selector
      const dropdownTrigger = element.matches(SELECTOR_DATA_TOGGLE),
            // Get the dropdown menu
            dropdownMenu = element.nextElementSibling;
  
      // Check if there are any dropdowns
      if(dropdownTrigger && dropdownMenu) {
        // Remove the "show" class on the dropdown menu
        dropdownMenu.classList.remove(showString);
        // Remove the "show" class on the trigger
        element.classList.remove(showString);
        // Set the "aria-expanded" attribute to "false"
        element.setAttribute('aria-expanded', false);
      }
    });
  };

  isShown(element = this.element) {
    return element.classList.contains(showString)
  }

  toggle() {
    return this.isShown() ? this.hide() : this.show()
  }

  show() {
    const dropdownMenu = this.element.nextElementSibling;
    // Open the clicked dropdown
    dropdownMenu.classList.add(showString);
    // Add the "show" class on toggle
    this.element.classList.add(showString);
    // Set the "aria-expanded" attribute to "true"
    this.element.setAttribute('aria-expanded', true);
  }

  hide() {
    const dropdownMenu = this.element.nextElementSibling;
    // Remove the "show" class on the dropdown menu
    dropdownMenu.classList.remove(showString);
    // Remove the "show" class on the trigger
    this.element.classList.remove(showString);
    // Set the "aria-expanded" attribute to "false"
    this.element.setAttribute('aria-expanded', false);
  }
};

// API implementation

// Clear dropdowns when clicked outside of dropdown
EventHandler.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus)
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus)
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault()
  new Dropdown(this).toggle();
})

export default Dropdown;
