'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    var _event = {
        clickItem: function (e) {
            var $el = $(e.currentTarget);
            this.callback($el.attr('data-id'));
            this.$modal.modal('hide');
        },

        filterChange: function (e) {
            var $input = $(e.currentTarget);
            var search = $input.val().toLowerCase();
            var data = sl.dataCollection.get(this.dataUrl).list;
            var results = [];

            data.forEach(function (item) {
                if (item.name.toLowerCase().indexOf(search) !== -1) {
                    results.push(item);
                }
            });

            this.set(results);
        }
    };

    window.sl.modal = {
        $modal: null,
        callback: null, // Curently active callback
        dataUrl: null,

        show: function (dataUrl, callback, options) {
            this.settings = options || {}; // Prevents us from having to manually clear the options
            this.dataUrl = dataUrl;
            this.callback = callback;
            var data = this.get();

            if (this.$modal) this.$modal.detach();
            this.$modal = $(sl.view.modal())
                .appendTo('body');

            this.$modal.find('#slot-modal-filter').keyup(_event.filterChange.bind(this));

            this.$modal.modal('show');

            this.set(data);
        },

        get: function () {
            var data = sl.dataCollection.get(this.dataUrl);

            if (this.settings.filter) {
                var filter = sl.dataCollection.get(this.settings.filterUrl);
                var filterId = sl.filter.getFilterId(this.settings.filter);
                if (filterId === '') return []; // Failsafe in-case parent is empty

                var filterData = filter.get(filterId)[this.settings.filterKey];
                return filterData.map(function (id) {
                    return data.get(id);
                });

            } else {
                return data.list;
            }
        },

        set: function (data) {
            var self = this;
            var imageData = sl.dataCollection.get(sl.settings.imageUrl);
            var results = data.slice(0, 40);
            this.$modal.find('#slot-modal-results').children().detach(); // Clear the input

            results.forEach(function (result) {
                var h = { name: result.name, _id: result._id };
                var img = imageData.get(result.image);
                if (img) h.imageSrc = img.src;

                $(sl.view.modalItem(h))
                    .click(_event.clickItem.bind(self))
                    .appendTo('#slot-modal-results');
            });
        }
    };
});