module.exports = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '4.0.0-alpha.1',
  drivers: {
    chrome: {
      version: '79.0.3945.36',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    ie: {
      version: '3.14.0',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    },
    firefox: {
      version: '0.23.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    },
    edge: {
      version: '17134'
    }
  }
};
