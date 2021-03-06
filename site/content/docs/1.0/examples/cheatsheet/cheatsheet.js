/* global viraDesignSystem: false */

(function () {
  'use strict'

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(function (tooltip) {
      new viraDesignSystem.Tooltip(tooltip, {
        selector: '[data-vds-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-vds-toggle="popover"]')
    .forEach(function (popover) {
      new viraDesignSystem.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(function (toastNode) {
      const toast = new viraDesignSystem.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links and submit buttons
  document.querySelectorAll('[href="#"], [type="submit"]')
    .forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    const hash = window.location.hash

    if (hash === '') {
      return
    }

    const link = document.querySelector('.bd-aside a[href="' + hash + '"]')

    if (!link) {
      return
    }

    const active = document.querySelector('.bd-aside .active')
    const parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    const expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})()
