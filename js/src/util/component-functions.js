/**
 * --------------------------------------------------------------------------
 * Vira Design System (v1.0.0): util/component-functions.js
 * Licensed under MIT (https://github.com/Victin09/vira-design-system/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import EventHandler from '../dom/event-handler'
import { getElementFromSelector, isDisabled } from './index'

const enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`
  const name = component.NAME

  EventHandler.on(document, clickEvent, `[data-vds-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault()
    }

    if (isDisabled(this)) {
      return
    }

    const target = getElementFromSelector(this) || this.closest(`.${name}`)
    const instance = component.getOrCreateInstance(target)

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]()
  })
}

export {
  enableDismissTrigger
}
