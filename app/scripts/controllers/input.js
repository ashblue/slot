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
                console.log('clear item')
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
        if (type === 'slot') {
            this.$view.find('.slot-input').val('');
        }
    };

    Input.prototype.get = function () {
        // Get the current value
    };

    Input.prototype.set = function (val) {
        if (this.type === 'slot') {
            this.$view.find('.slot-input').val(val);
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

    Input.prototype.setImage = function (id, src) {
        // Populate the image tag for an id
    };

    Input.prototype.clearState = function () {
        var states = '';
        STATE_LIST.forEach(function (state) {
            states += state + ' ';
        });

        this.$view.removeClass(states);
    };

    Input.prototype.setState = function () {

    };

    sl.Input = Input;
});