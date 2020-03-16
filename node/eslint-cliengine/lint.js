const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
  baseConfig: {
    extends: ['.eslintrc-base.js']
  },
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: {
    'no-console': 2
  }
});

const report = cli.executeOnFiles(['code.js']);

const formatter = cli.getFormatter();

console.log(formatter(report.results));
