// Karma configuration
// https://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-08-07 using
// generator-karma 1.0.0

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "mocha",
      "chai"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-carousel/dist/angular-carousel.js',
      'bower_components/wowjs/dist/wow.js',
      'bower_components/showdown/src/showdown.js',
      'bower_components/angular-markdown-directive/markdown.js',
      'bower_components/angular-metatags/angular-metatags-module/angular-metatags.js',
      'bower_components/angular-lazy-img/release/angular-lazy-img.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/angular-slick/dist/slick.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-socialshare/dist/angular-socialshare.min.js',
      'bower_components/querystring/querystring.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      //"PhantomJS"
      "Chrome"
    ],

    // Which plugins to enable
    plugins: [
      //"karma-phantomjs-launcher",
      'karma-mocha',
      'karma-chai',
      'karma-coverage'
    ],

    // Code coverage report
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'https://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
