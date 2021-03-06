'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<div class="slot slot-single slot-loading slot-{{size}}">\n    <input class="slot-input hide"\n           type="text"\n           name="{{name}}"\n           value="{{value}}"\n    {{#if required}}required="required"{{/if}} />\n\n    <div class="slot-loader">\n        <span class="slot-loader-message">Loading...</span>\n    </div>\n\n    <div class="slot-image-wrapper">\n        <span class="slot-image-inner">\n            <span class="slot-image-placeholder slot-add glyphicon glyphicon-plus"></span>\n            <div class="slot-image hide"></div>\n        </span>\n    </div>\n\n    <span class="slot-remove glyphicon glyphicon-remove"></span>\n    <span class="slot-text"></span>\n</div>';
    window.sl.view.slot = Handlebars.compile(src);
});