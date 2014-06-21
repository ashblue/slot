'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    // @TODO If the passed value does not exist in the retrieved data, fire a console error
    // and throw a warning symbol on the input
    var Class = function (url, val, options) {
        var self = this;
        if (!url) return console.error('Cannot generate a new slot without a url');
        this.url = url;
        this.settings = $.extend(this, sl.settings, options);
        var filter = this.isFilter();
        this.input = new sl.Input(this.settings.type, url, this.settings);

        if (!filter) {
            this.load(val);
        } else {
            sl.dataCollection.add(this.filterUrl, function () {
                self.load(val);
            });
        }

        return this;
    };

    Class.prototype.load = function (val) {
        var self = this;
        sl.dataCollection.add(this.url, function () {
            sl.dataCollection.add(self.imageUrl, function () {
                // If there is an image populate it
                if (val) {
                    self.input.set(val);
                } else {
                    self.input.clearState();
                }
            });
        });
    };

    Class.prototype.get = function () {
        // Returns a string or array depending on slot or string status
        if (this.type === 'slot') {

        }
    };

    // Setup filter and make sure everything is ready
    Class.prototype.isFilter = function () {
        // Make sure its a slot an not a strip as the target (also checks that something is there)
        if (this.filter && typeof this.filter === 'object' && this.filter.type === 'slot')
            this.filterUrl = this.filter.url;
        if (!this.filterUrl) return;
        if (!this.filterKey) return console.error('Missing filter key');

        this._filter = true;
        return true;
    };

    sl.Class = Class;
});