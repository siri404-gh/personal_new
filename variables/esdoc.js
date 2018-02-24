const { dist, src } = require('./common');

module.exports = {
  src,
  docs: `${dist}/reports/.docs`,
  title: 'Title',
  description: 'Description',
  github: '',
  twitter: '',
  site: '',
  image: '',
  interfaces: ["describe", "it", "context", "suite", "test"],
};