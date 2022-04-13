/* global viraDesignSystem: false */
(function () {
  'use strict'
  const tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-vds-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new viraDesignSystem.Tooltip(tooltipTriggerEl)
  })
})()
