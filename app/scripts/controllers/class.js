'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    var Class = function (url, val, options) {
        if (!url) return console.error('Cannot generate a new slot without a url');
        this.settings = $.extend(this, sl.settings, options);
        this.input = new sl.Input(this.settings.type, url, this.settings);

        var self = this;
        var input = this.input;

        sl.dataCollection.add(url, function (urlData) {
            var data = urlData.get(val);

            sl.dataCollection.add(self.imageUrl, function (imageData) {
                // If there is an image populate it
                if (val) {
                    self.input.set(val);
                } else {
                    self.input.clearState();
                }
            });
        });

        return this;
    };

    Class.prototype.get = function () {
        // Returns a string or array depending on slot or string status
    };

    sl.Class = Class;
});