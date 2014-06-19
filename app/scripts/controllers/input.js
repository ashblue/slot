'use strict';
define([
    'models/settings'
], function (settings) {
    'use strict';

    /**
     * Generate a slot or strip input type and return an API to interact with it
     * @param type
     * @param options
     * @returns {Input}
     * @constructor
     */
    var Input = function (type, options) {
        // Generate and attach the view
        // Set proper data bindings

        return this;
    };

    Input.prototype.clear = function () {
        // Completely wipe the input (including image)
    };

    Input.prototype.get = function () {
        // Get the current value
    };

    Input.prototype.set = function (id) {
        // Set the current value on the text input
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

    return Input;
});