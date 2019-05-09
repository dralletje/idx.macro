const path = require('path');
const pluginTester = require('babel-plugin-tester');
const plugin = require('babel-plugin-macros');

pluginTester({
  plugin,
  pluginName: 'Babel plugin macros',
  snapshot: true,
  tests: withFilename([
    `
      import idx from '../idx.macro'

      idx(global, _ => _.test.lol);
    `,
  ]),
});

pluginTester({
  plugin,
  pluginName: 'Babel plugin macros v2',
  snapshot: true,
  tests: withFilename([
    `
      import idx from '../idx.macro'
      import nonexisting from '/notexisting'

      idx(nonexisting, _ => _[1][2][3]);
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
