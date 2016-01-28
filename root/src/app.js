/* globals requirejs: false */

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
      app: '../app',
      'bs.ie10hack': 'bootstrap_util/ie10-viewport-bug-workaround',
      'jquery.alpha': 'plugin-A/jquery.alpha',
      'jquery.beta': 'plugin-B/jquery.beta',
      jquery: [
        '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
        //If the CDN location fails, load from this location
        'lib/jquery/jquery.min'
      ],
      jqueryui: [
        '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min',
        //If the CDN location fails, load from this location
        'lib/jquery/jquery-ui.min'
      ],
      bootstrap: [
        '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
        //If the CDN location fails, load from this location
        'lib/bootstrap-3.3.6-dist/js/bootstrap.min'
      ]
    },
    'shim': {
        'bs.ie10hack': ['jquery'],
        'jquery.alpha': ['jquery'],
        'jquery.beta': ['jquery']
    }
});

// Load the main app module to start the app
requirejs(['app/main']);
