// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'viraDesignSystem',
  summary: 'The vira front-end framework for developing responsive, mobile first projects on the web.',
  version: '1.0.0',
  git: 'https://github.com/Victin09/vira-design-system.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/vira-design-system.css',
    'dist/js/vira-design-system.js'
  ], 'client')
})
