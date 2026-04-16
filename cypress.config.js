const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kitapsepeti.com',
    viewportWidth: 1500,
    viewportHeight: 1000,
    testIsolation: true,
    
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    },

    setupNodeEvents(on, config) {
      // Eklentiler buraya
    },
  },

  chromeWebSecurity: false,
  
  blockHosts: [
    "*google-analytics.com",
    "*googletagmanager.com",
    "*pagead2.googlesyndication.com"
  ]
});