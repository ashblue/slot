'use strict';
$(document).ready(function () {
    var basic = new sl.Class('/data/inventory.json');

    var prePopulate = new sl.Class('/data/inventory.json', 'epic_sword', {
        target: '#slot-pop'
    });
    var prePopulateNoImage = new sl.Class('/data/inventory.json', 'epic_no_image', {
        target: '#slot-pop-no-image'
    });
    var prePopulateVertical = new sl.Class('/data/inventory.json', 'epic_sword_vertical', {
        target: '#slot-pop-vert-overflow'
    });

    var slotInput = new sl.Class('/data/inventory.json', 'epic_sword', {
        target: '#slot-input',
        name: 'slot-input',
        required: true
    });
});