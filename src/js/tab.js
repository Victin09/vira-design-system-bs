/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): collapse.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/
import {
  dataToggleString,
  fadeString,
  showString,
  activeString,
  activeClass
} from './dom/selectors';
import getTarget from './util/index';
import EventHandler from './util/event-handler';
import { getElementFromSelector } from './dom/selectors'

/**
 * Constants
 */
const DATA_KEY = 'vds.tab';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const SELECTOR_DATA_TOGGLE = '[data-vds-toggle="tab"], [data-vds-toggle="pill"], [data-vds-toggle="list"]';
const NAV_CLASS = '.nav';

// Tab
class Tab {
  constructor(element) {
    this.element = element;
  }

  show() {
    // Selectors
    const tabToggleSelector = `[${dataToggleString}="tab"]`;
  
    // Variables
    const navs = document.querySelectorAll(NAV_CLASS);
  
    // Check if there are any navs
    if(navs.length > 0) {
      // Loop through them
      navs.forEach(nav => {
        const target = getElementFromSelector(this.element)
        const tabs = nav.querySelectorAll(SELECTOR_DATA_TOGGLE);
        tabs.forEach(() => {
          // Get the targeted tab pane
          const tabPane = document.querySelector(getTarget(this.element));

          // Check for the "nav" class on the nav
          if(nav.matches(NAV_CLASS) && nav.contains(this.element)) {
            // Clear all tabs
            const clearTabs = () => {
              // Loop through them
              tabs.forEach(el => {
                // Check if the tab should be cleared
                if(el !== this.element) {
                  // Remove the "active" class
                  el.classList.remove(activeString);

                  // Check for the "role" attribute
                  if(el.getAttribute('role') === 'tab') {
                    // Set the "aria-selected" attribute to "false"
                    el.setAttribute('aria-selected', false);
                  }
                }
              });
            };

            // Clear all active tabs
            clearTabs();

            // Add the "active" class
            this.element.classList.add(activeString);

            // Check for the "role" attribute
            if(this.element.getAttribute('role') === 'tab') {
              // Set the "aria-selected" attribute to "true"
              this.element.setAttribute('aria-selected', true);
            }

            // Check if there are any tab panes
            if(tabPane) {
              // Check for the "show" class on the tab pane
              const tabPaneOpen = tabPane.classList.contains(showString),
                    // Get the tab content
                    tabContent = tabPane.parentElement;

              if(this.element.matches(tabToggleSelector) && tabContent) {
                // Get the tab panes
                const tabPanes = Array.from(tabContent.children),
                      // Get the active tab pane
                      tabPaneActive = tabContent.querySelector(`:scope > ${activeClass}`);

                // Hide all tab panes
                const hideTabPanes = () => {
                  // Loop through them
                  tabPanes.forEach(el => {
                    // Check if the tab pane should be hidden
                    if(el !== tabPane) {
                      // Remove the "show" class
                      el.classList.remove(showString);

                      // Check if the tab pane should be animated
                      if(el.classList.contains(fadeString) && tabPaneActive) {
                        // When the transition is complete, hide it
                        const complete = () => {
                          // Remove the "active" class
                          el.classList.remove(activeString);
                          // Remove event listener after it runs
                          tabPaneActive.removeEventListener('transitionend', complete);
                        };

                        tabPaneActive.addEventListener('transitionend', complete);
                      } else {
                        // Remove the "active" class
                        el.classList.remove(activeString);
                      }
                    }
                  });
                };

                // Hide all open tab panes
                hideTabPanes();

                // Check if the tab pane should be opened
                if(!tabPaneOpen) {
                  // Check if the tab pane should be animated
                  if(tabPane.classList.contains(fadeString) && tabPaneActive) {
                    // When the transition is complete, show it
                    const complete = () => {
                      // Add the "active" class
                      tabPane.classList.add(activeString);
                      // Force reflow to enable transition
                      tabPane.offsetHeight;
                      // Add the "show" class
                      tabPane.classList.add(showString);
                      // Remove event listener after it runs
                      tabPaneActive.removeEventListener('transitionend', complete);
                    };

                    tabPaneActive.addEventListener('transitionend', complete);
                  } else {
                    // Add both the "active" and the "show" class
                    tabPane.classList.add(activeString, showString);
                  }
                }
              }
            }
          }
        });
      });
    }
  }
};

/**
 * Data API implementation
 */

 EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }

  new Tab(this).show();
})

export default Tab;
