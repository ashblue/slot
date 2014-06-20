'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    var Class = function (url, val, options) {
        if (!url) return console.error('Cannot generate a new slot without a url');
        this.settings = $.extend(this, options, sl.settings);
        this.input = new sl.Input(this.settings.type, url, this.settings);
        this.input.set(val);

        var self = this;
        var input = this.input;
        sl.dataCollection.add(url, function () {
            // @TODO Fire another callback to gather all image data
            self.input.clearState();
            // If a value is present attempt to assign an image
        });

        return this;
    };

    Class.prototype.get = function () {
        // Returns a string or array depending on slot or string status
    };

    sl.Class = Class;
});