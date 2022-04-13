// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Vira Design System's docs
 * Copyright 2022 Vira Design System
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false, viraDesignSystem: false */

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

  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = toastPlacement.dataset.originalClass + ' ' + this.value
    })
  }

  document.querySelectorAll('.bd-example .toast')
    .forEach(function (toastNode) {
      const toast = new viraDesignSystem.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      const toast = new viraDesignSystem.Toast(toastLiveExample)

      toast.show()
    })
  }

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const alertTrigger = document.getElementById('liveAlertBtn')

  function alert(message, type) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-vds-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
  }

  if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
      alert('Nice, you triggered this alert message!', 'success')
    })
  }

  // Demos within modals
  document.querySelectorAll('.tooltip-test')
    .forEach(function (tooltip) {
      new viraDesignSystem.Tooltip(tooltip)
    })

  document.querySelectorAll('.popover-test')
    .forEach(function (popover) {
      new viraDesignSystem.Popover(popover)
    })

  // Indeterminate checkbox example
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.indeterminate = true
    })

  // Disable empty links in docs examples
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault()
      })
    })

  // Modal relatedTarget demo
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.vds.modal', function (event) {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-vds-* attributes
      const recipient = button.getAttribute('data-vds-whatever')

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })
  }

  // Insert copy to clipboard button before .highlight
  const btnTitle = 'Copy to clipboard'
  const btnEdit = 'Edit on StackBlitz'
  const btnHtml = '<div class="bd-clipboard"><button type="button" class="btn-clipboard">Copy</button></div>'
  document.querySelectorAll('div.highlight')
    .forEach(function (element) {
      element.insertAdjacentHTML('beforebegin', btnHtml)
    })

  /**
   *
   * @param {string} selector
   * @param {string} title
   */
  function snippetButtonTooltip(selector, title) {
    document.querySelectorAll(selector).forEach(function (btn) {
      // console.log(new viraDesignSystem())
      const tooltipBtn = new viraDesignSystem.Tooltip(btn, { title: title })

      btn.addEventListener('mouseleave', function () {
        // Explicitly hide tooltip, since after clicking it remains
        // focused (as it's a button), so tooltip would otherwise
        // remain visible until focus is moved away
        tooltipBtn.hide()
      })
    })
  }

  snippetButtonTooltip('.btn-clipboard', btnTitle)
  snippetButtonTooltip('.btn-edit', btnEdit)

  const clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (event) {
    const tooltipBtn = viraDesignSystem.Tooltip.getInstance(event.trigger)

    tooltipBtn.setContent({ '.tooltip-inner': 'Copied!' })
    event.trigger.addEventListener('hidden.vds.tooltip', function () {
      tooltipBtn.setContent({ '.tooltip-inner': btnTitle })
    }, { once: true })
    event.clearSelection()
  })

  clipboard.on('error', function (event) {
    const modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    const fallbackMsg = 'Press ' + modifierKey + 'C to copy'
    const tooltipBtn = viraDesignSystem.Tooltip.getInstance(event.trigger)

    tooltipBtn.setContent({ '.tooltip-inner': fallbackMsg })
    event.trigger.addEventListener('hidden.vds.tooltip', function () {
      tooltipBtn.setContent({ '.tooltip-inner': btnTitle })
    }, { once: true })
  })
})()
