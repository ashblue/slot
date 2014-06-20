'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<div class="modal fade" id="slot-modal">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title">Search: <span class="slot-modal-title">{{title}}</span></h4>\n                <form class="form-inline" role="form" autocomplete="off">\n                    <div class="form-group">\n                        <input id="slot-modal-filter" type="text" class="form-control" name="name" placeholder="Filter Results">\n                    </div>\n                </form>\n            </div>\n            <div class="modal-body">\n                <div class="list-group" id="slot-modal-results"></div>\n                <button id="slot-modal-prev" class="btn btn-default">Prev</button>\n                <button id="slot-modal-next" class="btn btn-default">Next</button>\n            </div>\n            <div class="modal-footer">\n                <button id="slot-modal-submit" type="button" class="btn btn-primary">Select</button>\n            </div>\n        </div>\n    </div>\n</div>';
    window.sl.view.modal = Handlebars.compile(src);
});