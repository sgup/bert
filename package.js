Package.describe({
  name: 'shridhar:bert-fontawesome5',
  version: '2.1.4',
  summary: 'A client side, multi-style alerts system for Meteor.',
  git: 'https://github.com/sgup/bert-fontawesome5',
  documentation: 'README.md'
});

Package.onUse( function( api ) {
  api.versionsFrom( '1.2.0.2' );

  api.use([
    'ecmascript',
    'templating',
    'session',
    'jquery',
    'fourseven:scss@4.5.4',
  ], 'client');

  api.addFiles([
    'templates/bert-alert.html',
    'templates/bert-alert.js',
    'templates/body.html',
    'stylesheets/colors.scss',
    'stylesheets/flexbox.scss',
    'stylesheets/bert.scss',
    'bert.js',
  ], 'client');

  api.export( 'Bert' );
});

Package.onTest(function (api) {
  api.use( [ 'tinytest', 'session', 'jquery' ] );
  api.use( 'shridhar:bert-fontawesome5' );
  api.addFiles( 'tests/client.js', 'client' );
});
