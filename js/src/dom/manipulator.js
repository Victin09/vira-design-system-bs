/**
 * --------------------------------------------------------------------------
 * Vira Design System (v1.0.0): dom/manipulator.js
 * Licensed under MIT (https://github.com/Victin09/vira-design-system/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (value === Number(value).toString()) {
    return Number(value)
  }

  if (value === '' || value === 'null') {
    return null
  }

  return value
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-vds-${normalizeDataKey(key)}`, value)
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-vds-${normalizeDataKey(key)}`)
  },

  getDataAttributes(element) {
    if (!element) {
      return {}
    }

    const attributes = {}
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('vds'))

    for (const key of bsKeys) {
      let pureKey = key.replace(/^vds/, '')
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length)
      attributes[pureKey] = normalizeData(element.dataset[key])
    }

    return attributes
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-vds-${normalizeDataKey(key)}`))
  },

  offset(element) {
    const rect = element.getBoundingClientRect()

    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    }
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    }
  }
}

export default Manipulator
