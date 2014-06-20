'use strict';
$(document).ready(function () {
    window.sl = window.sl || {};

    // @TODO We need two kind of settings, these global settings and class based settings
    sl.settings = {
        type: 'slot', // slot for text value, strip for arrays
        imageUrl: 'data/images.json', // Optional secondary URL to retrieve images, if you don't set it image will be pulled from current data
        imageKey: 'image', // Key assumed to contain an image url on retrieved data
        imageSrcKey: 'src', // Image source key on the retrieved image URL
        name: '', // HTML name attribute
        nameKey: 'name', // Key used for display name
        parentSlot: null, // Assign a parent Slot instance to limit the number of displayed results to the parentKey (assumes results in key are IDs)
        parentKey: null, // Key to use for limiting displayed results
        required: false, // Enforce HTML5 required attribute
        size: 'normal', // Accepts 'normal' or 'compact' for an input that works better in tight places
        limit: Number.POSITIVE_INFINITY, // Limit the number of strip results (strips only)
        view: 'horizontal', // Display as a horizontal never ending list or
        target: '#slot', // Append item to this ID
        title: 'Available Data', // Vanity name used when displaying the modal
        maxResults: 40 // Max number of results to display in the modal (prevents memory errors)
    };
});