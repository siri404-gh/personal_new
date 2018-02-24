exports.config = {
  user: 'BROWSERSTACK_USER',
  key: 'BROWSERSTACK_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    'browserstack.debug': true
  }]
};