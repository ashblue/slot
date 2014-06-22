'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    sl.settings = {
        type: 'slot', // slot for text value, strip for arrays
        size: 'normal', // Accepts 'normal' or 'compact' for an input that works better in tight places
        view: 'horizontal', // Display as a horizontal never ending list or
        target: '#slot', // Append item to this ID
        input: null, // Force replace the generated input with an already existing one

        filter: null, // Database ID reference or a Slot object
        filterUrl: null, // URL for the filtered data (not necessary if .filter = Slot)
        filterKey: null, // Key to use on filtered data to gather items from

        // Set image retrieval repository and sources
        imageUrl: 'data/images.json', // Optional secondary URL to retrieve images, if you don't set it image will be pulled from current data
        imageKey: 'image', // Key assumed to contain an image url on retrieved data
        imageSrcKey: 'src', // Image source key on the retrieved image URL

        name: '', // HTML name attribute
        required: false, // Enforce HTML5 required attribute
        limit: Number.POSITIVE_INFINITY, // Limit the number of strip results (strips only) // @TODO Not implemented

        parentSlot: null, // Assign a parent Slot instance to limit the number of displayed results to the parentKey (assumes results in key are IDs)
        parentKey: null // Key to use for limiting displayed results
    };
});