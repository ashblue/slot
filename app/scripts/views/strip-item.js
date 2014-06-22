'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<li draggable="true" class="slot-item" title="{{text}}">\n    <input class="slot-item-input hide"\n           type="text"\n           name="{{name}}[]"\n           value="{{value}}" />\n    <span class="slot-item-name slot-marquee"><span>{{text}}</span></span>\n    <span class="slot-item-remove glyphicon glyphicon-remove"></span>\n</li>';
    window.sl.view.stripItem = Handlebars.compile(src);
});