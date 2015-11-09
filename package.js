Package.describe({
  name: 'useful:logs-standard-config',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  
  api.addFiles('logs-to-console.js');
  api.addFiles('logs-standard-config.js');

  api.export(['Logs', 'LogsConfig']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('random');
  api.use('underscore');
  api.use('useful:logs');
  api.use('useful:logs-standard-config');

  api.addFiles('logs-standard-config-tests.js');
});
