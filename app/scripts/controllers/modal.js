'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    var modal = {
        $modal: null,
        show: function (url, callback) {
            var url = sl.dataCollection.get(url);

            if (this.$modal) this.$modal.detach();
            this.$modal = $(sl.view.modal())
                .appendTo('body');

            // Filter binding
        },

        set: function (data) {
            // Clear input
            // Inject first 40 results max
            // Create each item through a view
            // Bind each item to close the modal and trigger a callback when clicked
        },

        filter: function (text) {
            // create a temp array with matches and send it off to set
        }
    };
});