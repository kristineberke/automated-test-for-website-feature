const { defineConfig } = require('cypress');

module.exports = defineConfig({
  baseUrl: 'https://localhost:8080',
  viewportWidth: 1280,
  viewportHeight: 720,
});
