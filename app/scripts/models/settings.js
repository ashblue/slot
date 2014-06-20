'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    sl.settings = {
        type: 'slot', // slot for text value, strip for arrays
        size: 'normal', // Accepts 'normal' or 'compact' for an input that works better in tight places
        view: 'horizontal', // Display as a horizontal never ending list or
        target: '#slot', // Append item to this ID

        // @TODO Needs rigging
        // Set image retrieval repository and sources
        imageUrl: 'data/images.json', // Optional secondary URL to retrieve images, if you don't set it image will be pulled from current data
        imageKey: 'image', // Key assumed to contain an image url on retrieved data
        imageSrcKey: 'src', // Image source key on the retrieved image URL

        // @TODO Needs rigging
        name: '', // HTML name attribute
        required: false, // Enforce HTML5 required attribute
        limit: Number.POSITIVE_INFINITY, // Limit the number of strip results (strips only)

        parentSlot: null, // Assign a parent Slot instance to limit the number of displayed results to the parentKey (assumes results in key are IDs)
        parentKey: null // Key to use for limiting displayed results


    };
});