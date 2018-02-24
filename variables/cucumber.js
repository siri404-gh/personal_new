const { dist } = require('./common');

module.exports = {
  report: `${dist}/reports/.cucumber/`,
  jsonFile: `${dist}/reports/.cucumber/output.json`,
  output: `${dist}/reports/.cucumber/index.html`
};