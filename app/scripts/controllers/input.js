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
                sl.modal.show(this.url, this.set.bind(this), this.settings);
            }
        },

        invalidInput: function (e) {
            this.$view.addClass('slot-invalid');
        },

        validInput: function (e) {
            this.$view.removeClass('slot-invalid');
        },

        addSlot: function (e) {
            sl.modal.show(this.url, this.add.bind(this), this.settings);
        },

        nextSlot: function (e) {
            var $item = this.$view.find('.slot-item:first');
            this.$view.find('.slot-list').append($item);
        },

        prevSlot: function (e) {
            var $item = this.$view.find('.slot-item:last');
            this.$view.find('.slot-list').prepend($item);
        },

        removeSlotItem: function () {
            $(this).detach();
        },

        disable: function (e) {
            e.preventDefault();
            e.stopPropagation();
        },

        dragStart: function (e) {
            e.dataTransfer.setData('index', $(this).index());
        },

        drop: function (e) {
            var $el = $(this);
            var i = e.dataTransfer.getData('index');
            var $origin = $el.parent().children().eq(i);

            // Determine the direction of the appended index so we know what side to place it on
            if ($el.index() < i) {
                $el.before($origin);
            } else {
                $el.after($origin);
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
        if (this.settings.input) {
            this.$view.find('.slot-input').replaceWith(this.settings.input);
        }

        // Set proper data bindings
        this._bind();

        return this;
    };

    Input.prototype._bind = function () {
        var self = this;
        var filter = this.settings.filter;

        if (this.type === 'slot') {
            this.$view.click(_event.clickSlot.bind(this));
            this.$view.find('input').change(function (e) {
                if ($(e.currentTarget).is(':invalid')) _event.invalidInput.apply(self, [e]);
                else if ($(e.currentTarget).is(':valid')) _event.validInput.apply(self, [e]);
            });
        } else if (this.type === 'strip') {
            this.$view.find('.slot-add').click(_event.addSlot.bind(this));
            this.$view.find('.slot-right').click(_event.nextSlot.bind(this));
            this.$view.find('.slot-left').click(_event.prevSlot.bind(this));
        }

        // If a filter is available, attempt to listen to the parent input if it can be done
        if (filter) {
            var filterType = sl.filter.getFilterType(filter);

            if (filterType === 'object') {
                filter.input.$view.find('.slot-input').change(function () {
                    if ($(this).val() === '') self.clear();
                });

            } else if (filterType === 'jquery') {
                sl.filter.$getInput(filter).change(function () {
                    if ($(this).val() === '') self.clear();
                });
            }
        }
    };

    Input.prototype.get = function () {
        if (this.type === 'slot') {
            return this.$view.find('.slot-input').val();
        } else if (this.type === 'strip') {
            return this.$view.find('input').map(function () {
                return $(this).val();
            });
        }
    };

    Input.prototype.set = function (val) {
        var self = this;

        if (this.type === 'slot') {
            var data = sl.dataCollection.get(this.url).get(val);
            if (!data) {
                console.error('slot value missing, removed', val);
                return this.clear();
            }

            this.$view.find('.slot-input').val(val);
            this.$view.find('.slot-text').html(data.name);
            this.triggerChange();

            var imageSrc = this.getImageSrc(val);
            if (imageSrc) {
                this.$view.find('.slot-image').css({ background: 'url(' + imageSrc + ')' }).removeClass('hide').show();
                this.$view.find('.slot-image-placeholder').hide();
            }
            this.setState('ready');
        } else if (this.type === 'strip') {
            if (!Array.isArray(val)) return;
            val.forEach(function (id) {
                self.add(id);
            });
        }
    };

    Input.prototype.triggerChange = function () {
        if (this.type !== 'slot') return;
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        this.$view.find('input').get(0).dispatchEvent(evt);
    };

    // For adding items to a strip only
    Input.prototype.add = function (id) {
        var data = sl.dataCollection.get(this.url).get(id);
        if (!data) {
            return console.error('slot value missing, removed', id);
        }

        var $stripItem = $(sl.view.stripItem({
            value: id,
            name: this.settings.name,
            text: data.name
        }))
            .appendTo(this.$view.find('.slot-list'))
            .click(_event.removeSlotItem);

        // Special drag data bindings
        $stripItem.get(0).addEventListener('dragstart', _event.dragStart);
        $stripItem.get(0).addEventListener('drop', _event.drop);
        $stripItem.get(0).addEventListener('dragover', _event.disable);

        var imageSrc = this.getImageSrc(id);
        if (imageSrc) $stripItem.css({ background: 'url(' + imageSrc + ')' });
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
        if (this.type === 'slot') {
            this.clearState();
            this.$view.find('.slot-image').hide();
            this.$view.find('.slot-image-placeholder').show();
            this.$view.find('.slot-text').html('');
            this.$view.find('.slot-input').val('');
            this.triggerChange();
        } else if (this.type === 'strip') {
            this.$view.find('.slot-item').detach();
        }
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