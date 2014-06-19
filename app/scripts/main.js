'use strict';

/**
 * @NOTE Assume jQuery and Bootstrap are already available
 */
require.config({
    baseUrl: 'scripts',
    shim: {
        handlebars: {
            exports: 'handlebars'
        }
    },

    paths: {
        handlebars: '../../bower_components/handlebars/handlebars'
    }
});

require([
    'handlebars'
], function (a) {
    console.log('i am a test', Handlebars);
});