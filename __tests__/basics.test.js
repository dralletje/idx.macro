const path = require('path');
const pluginTester = require('babel-plugin-tester');
const plugin = require('babel-macros');

pluginTester({
  plugin,
  snapshot: true,
  tests: withFilename([
    `
      import idx from '../idx.macro'

      idx(global, _ => _.test.lol);
    `,
  ]),
});

/*
 * This adds the filename to each test so you can do require/import relative
 * to this test file.
 */
function withFilename(tests) {
  return tests.map(t => {
    const test = { babelOptions: { filename: __filename } };
    if (typeof t === 'string') {
      test.code = t;
    } else {
      Object.assign(test, t);
    }
    return test;
  });
}
