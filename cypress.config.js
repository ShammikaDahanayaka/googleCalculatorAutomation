const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //watchForFileChanges:false,
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.google.com/search?q=calculator/'
  },
})
