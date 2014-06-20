'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    window.sl.modal = {
        $modal: null,
        show: function (dataUrl, callback) {
            var url = sl.dataCollection.get(dataUrl);

            if (this.$modal) this.$modal.detach();
            this.$modal = $(sl.view.modal())
                .appendTo('body');

            this.$modal.modal('show');
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