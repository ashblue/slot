'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};
    window.sl.view = window.sl.view || {};

    var src = '<div class="modal fade" id="slot-modal-content">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title">Data Results</h4>\n            </div>\n            <div class="modal-body">\n                <form class="form" role="form" autocomplete="off">\n                    <div class="form-group">\n                        <input id="slot-modal-filter" type="text" class="form-control" name="name" placeholder="Filter Results">\n                    </div>\n                </form>\n                \n                <div class="list-group" id="slot-modal-results"></div>\n            </div>\n        </div>\n    </div>\n</div>';
    window.sl.view.modal = Handlebars.compile(src);
});