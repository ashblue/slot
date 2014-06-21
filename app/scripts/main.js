'use strict';
$(document).ready(function () {
    window.sl = sl || {};
    window.sl.view = window.sl.view || {};

    // Find all slots and post-process them
    var $slots = $('.slot-input');
    $slots.each(function () {
        var $input = $(this);
        var $target = $('<div></div>');
        var url = $input.data('url');
        var value = $input.val();

        var options = $.extend($input.data('options'), {
            target: $target.get(0),
            input: $input.get(0)
        });

        $input.hide();
        $target.insertAfter($input);

        new sl.Class(url, value, options);
    });
});