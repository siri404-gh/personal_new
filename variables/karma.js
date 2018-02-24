const { dist, src } = require('./common');

module.exports = {
  karma_files: [`${src}/**/*.test.js`],
  karma_preprocessors: ['webpack', 'coverage'],
  karma_browsers: ['PhantomJS'],
  karma_coverage_reporters: ['spec', 'coverage'],
  karma_coverage_dir: `${dist}/reports/.coverage/`,
};