/**
* --------------------------------------------------------------------------
* Vira Design System (v1.0.0): index.js
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
* --------------------------------------------------------------------------
*/

// Global selectors
export const dataToggleString = 'data-vds-toggle',
  dataTargetString = 'data-vds-target',
  dataParentString = 'data-vds-parent',
  dataDismissString = 'data-vds-dismiss',
  fadeString = 'fade',
  showString = 'show',
  activeString = 'active',
  activeClass = `.${activeString}`;

export const getSelector = element => {
  let selector = element.getAttribute(dataTargetString)

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href')

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    if (!hrefAttr || (!hrefAttr.includes('#') && !hrefAttr.startsWith('.'))) {
      return null
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = `#${hrefAttr.split('#')[1]}`
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null
  }

  return selector
}

export const getElementFromSelector = element => {
  const selector = getSelector(element)

  return selector ? document.querySelector(selector) : null
}