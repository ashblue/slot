'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<div class="slot slot-single">\n    <input class="slot-input"\n           type="hidden"\n           name="{{name}}"\n           value="{{value}}"\n    {{#if required}}required{{/if}} />\n\n    <div class="slot-loader">\n        <span class="slot-loader-message">Loading</span>\n    </div>\n\n    <div class="slot-image-wrapper">\n        <span class="slot-image-placeholder">+</span>\n        <img class="slot-image hide" src="" />\n    </div>\n\n    <span class="slot-clear">x</span>\n</div>';
    window.sl.view.strip = Handlebars.compile(src);
});