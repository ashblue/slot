'use strict';
$(document).ready(function () {
    var basic = new sl.Class('/data/inventory.json');
    var slot = new sl.Class('/data/inventory.json', null, { type: 'strip', target: '#strip' });

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

    var slotFilterInputParent = new sl.Class('/data/inventory.json', null, {
        required: true,
        target: '#slot-filter-demo-parent'
    });
    var slotFilterInput = new sl.Class('/data/upgrades.json', null, {
        "required": true,
        "filter": slotFilterInputParent,
        "filterKey": "upgrades",
        "target": "#slot-filter-demo"
    });
});