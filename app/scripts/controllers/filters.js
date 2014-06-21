'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    sl.filter = {
        getFilterType: function (filter) {
            var result = 'string';

            if (typeof filter === 'object') {
                result = 'object';
            } else if (typeof filter === 'string' && filter.indexOf('#') === 0) {
                result = 'jquery';
            }

            return result;
        },

        // Returns the div, jQuery selectors only
        $getInput: function (filter) {
            var $filter = $(filter);

            // Double check that we are looking at an input and not a generated Slot
            if ($filter.hasClass('.slot')) {
                $filter = $filter.find('.slot-input');
            }

            return $filter;
        },

        // Get the true ID by figuring out if its a jQuery selector, string, or Slot object
        getFilterId: function (filter) {
            var result = filter;
            var type = this.getFilterType(filter);

            if (type === 'object') {
                result = filter.get();
            } else if (type === 'jquery') {
                result = this.$getInput(filter).val();
            }

            return result;
        }
    };
});