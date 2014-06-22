'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<div class="slot slot-loading slot-multi slot-{{size}}">\n    <ul class="box-sizing slot-list"></ul>\n    <div class="slot-add"><button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-plus"></span></button></div>\n    <div class="slot-left"><span class="glyphicon glyphicon-chevron-left"></span></div>\n    <div class="slot-right"><span class="glyphicon glyphicon-chevron-right"></span></div>\n    <div class="slot-loader">\n        <span class="slot-loader-message">Loading...</span>\n    </div>\n</div>';
    window.sl.view.strip = Handlebars.compile(src);
});