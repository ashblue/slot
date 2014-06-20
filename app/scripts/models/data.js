'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    // Pockets of data retrieved from the server
    var Data = function (url, callback) {
        this.url = url;
        this.list = []; // Loopable retrieved data
        this.results = {}; // ID set of results
        this.$ajax = null;
        this._ready = false; // Is the data loaded yet?
        this.populate(callback);

        return this;
    };

    Data.prototype.populate = function (callback) {
        var self = this;

        this.$ajax = $.get(this.url, function (results) {
            results.forEach(function (result) {
                self.results[result._id] = result;
            });
            self.list = results;
            results.forEach(function (res) {
                self.results[res._id] = res;
            });

            callback(self);

            self._ready = true;
        });
    };

    Data.prototype.get = function (id) {
        return this.results[id];
    };

    sl.Data = Data;
});