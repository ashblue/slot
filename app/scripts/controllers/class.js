'use strict';
define([
    'models/settings'
], function (settings) {
    'use strict';

    var Class = function (val, url, options) {
        $.extend(this, options);
        if (options) object.merge(this, settings);

        // Discover input type from the options
        // Generate an input class

        return this;
    };

    Class.prototype.get = function () {

    };

    return Class;
});