const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  baseUrl: "https://localhost:8080",
=======
  e2e: {
    baseUrl: 'https://localhost:8080',  // Adjust URL as per your setup
  },
>>>>>>> 2e9fa324448a95f8064a9c940ef478d3bfc12a9b
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
