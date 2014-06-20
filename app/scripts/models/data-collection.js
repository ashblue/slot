'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    // Pockets of data retrieved from the server
    window.sl.dataCollection = {
        list: [],
        data: {},

        add: function (urlLink, callback) {
            var url = this.get(urlLink);

            if (url) return url.$ajax.done(callback);
            url = new sl.Data(urlLink, callback);
            this.data[urlLink] = url;
            this.list.push(url);

//            // Make sure this data URL hasn't been populated yet
//            var url = this.get(urlLink);
//            if (url && url._ready) return callback(url);
//
//            if (!url) {
//                url = new sl.data(url);
//                this.data[urlLink] = url;
//            }
//            url.populate(callback);
        },

        get: function (url) {
            return this.data[url];
        }
    };
});