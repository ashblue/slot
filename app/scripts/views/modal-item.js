'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<a class="list-group-item" data-id="{{_id}}">\n    <span class="slot-modal-thumb" {{#if imageSrc}}style="background-image: url({{imageSrc}})"{{/if}}></span>\n    {{name}}\n</a>';
    window.sl.view.modalItem = Handlebars.compile(src);
});