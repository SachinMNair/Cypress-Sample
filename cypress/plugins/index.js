const path = require('path')
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:browser:launch', (browser, options) => {
    console.log("Reached inside browser launch");
    const downloadDirectory = path.join(__dirname, '..', 'downloads')
    if (browser.family === 'chrome') {
      options.preferences.default['download.default_directory'] = downloadDirectory
      return options
    }
  if (browser.family === 'firefox') {
      console.log("Updating FF options");
      options.preferences['browser.download.dir'] = downloadDirectory
      options.preferences['browser.download.folderList'] = 2
      return options
    }
  })
}
