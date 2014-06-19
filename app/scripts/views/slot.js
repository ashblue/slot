'use strict';
define([
    'handlebars'
], function () {
    var src = '<div class="slot slot-single">\n    <input class="slot-input"\n           type="hidden"\n           name="{{name}}"\n           value="{{value}}"\n    {{#if required}}required{{/if}} />\n\n    {{#if value}}\n    <div class="slot-loader">\n        <div class="slot-loader-progress" style="width: 10%">\n            <span class="slot-loading-message">Loading</span>\n        </div>\n    </div>\n    {{/if}}\n\n    <div class="slot-image-wrapper">\n        <span class="slot-image-placeholder">+</span>\n        <img class="slot-image hide" src="" />\n    </div>\n\n    <span class="slot-remove">x</span>\n</div>';
    return Handlebars.compile(src);
});