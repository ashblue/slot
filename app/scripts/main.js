'use strict';
$(document).ready(function () {
    window.sl = sl || {};
    window.sl.view = window.sl.view || {};

    var basic = new sl.Class('/data/inventory.json');
    var prePopulate = new sl.Class('/data/inventory.json', 'epic_sword', {
        target: '#slot-pop'
    });
});