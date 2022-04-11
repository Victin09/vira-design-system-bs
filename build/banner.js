'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Vira Design System${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright ${year} ${pkg.author}
  * Licensed under MIT (https://github.com/Victin09/vira-design-system/blob/main/LICENSE)
  */`
}

module.exports = getBanner
