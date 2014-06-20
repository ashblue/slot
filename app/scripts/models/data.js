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
            self.results = results;
            callback(results);
            self._ready = true;

            self.list = results;
            results.forEach(function (res) {
                self.results[res._id] = res;
            });
        });
    };

    sl.Data = Data;
});