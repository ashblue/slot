'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    var STATES = {
        loading: 'slot-loading',
        ready: 'slot-ready'
    };

    var STATE_LIST = [STATES.ready, STATES.loading];

    var _event = {
        clickSlot: function (e) {
            var $slot = $(e.currentTarget);
            if ($slot.hasClass(STATES.ready)) {
                this.clear();
            } else {
                sl.modal.show(this.url, this.set);
            }
        }
    };

    /**
     * Generate a slot or strip input type and return an API to interface with it
     * @param type
     * @param options
     * @returns {Input}
     * @constructor
     */
    var Input = function (type, url, options) {
        this.type = type;
        this.url = url;
        this.settings = options;
        this.$view = $(sl.view[type](options));

        this.$view.appendTo(options.target);

        // Set proper data bindings
        this._bind();

        return this;
    };

    Input.prototype._bind = function () {
//        this.$view.find('.slot-clear').click(this.clear);
        this.$view.click(_event.clickSlot.bind(this));
    };

    Input.prototype.clear = function () {
        // Completely wipe the input (including image)
        if (this.type === 'slot') {
            this.$view.find('.slot-input').val('');
        }
    };

    Input.prototype.get = function () {
        // Get the current value
    };

    Input.prototype.set = function (val) {
        if (this.type === 'slot') {
            var data = sl.dataCollection.get(this.url).get(val);
            this.$view.find('.slot-input').val(val);
            this.$view.find('.slot-text').html(data.name);
            var imageSrc = this.getImageSrc(val);
            if (imageSrc) {
                this.$view.find('.slot-image').attr('src', imageSrc).removeClass('hide');
                this.$view.find('.slot-image-placeholder').hide();
            }
        }

        // Set the current value on the text input
        // Or generate the necessary image inputs
    };

    Input.prototype.add = function (id) {
        // Add a new item to the array (input only)
    };

    Input.prototype.remove = function (id) {
        // Remove an item from the array
    };

    Input.prototype.getImageSrc = function (val) {
        var imageData = sl.dataCollection.get(this.settings.imageUrl);
        var data = sl.dataCollection.get(this.url).get(val);
        var imageId = data[this.settings.imageKey];
        if (imageId) return imageData.get(imageId)[this.settings.imageSrcKey];
    };

    // Clear everything back to the original state
    Input.prototype.clear = function () {
        this.clearState();
        this.$view.find('.slot-image').hide();
        this.$view.find('.slot-image-placeholder').show();
        this.$view.find('.slot-text').html('');
        this.$view.find('.slot-input').val('');
    };

    // Wipe all available states
    Input.prototype.clearState = function () {
        var states = '';
        STATE_LIST.forEach(function (state) {
            states += state + ' ';
        });

        this.$view.removeClass(states);
    };

    Input.prototype.setState = function (state) {
        this.clearState();
        this.$view.addClass(STATES[state]);
    };

    sl.Input = Input;
});