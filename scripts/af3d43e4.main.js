"use strict";$(document).ready(function(){window.sl=window.sl||{},window.sl.view=window.sl.view||{};var a='<div class="modal fade" id="slot-modal-content">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title">Data Results</h4>\n            </div>\n            <div class="modal-body">\n                <form class="form" role="form" autocomplete="off">\n                    <div class="form-group">\n                        <input id="slot-modal-filter" type="text" class="form-control" name="name" placeholder="Filter Results">\n                    </div>\n                </form>\n                \n                <div class="list-group" id="slot-modal-results"></div>\n            </div>\n        </div>\n    </div>\n</div>';window.sl.view.modal=Handlebars.compile(a)}),$(document).ready(function(){window.sl=window.sl||{},window.sl.view=window.sl.view||{};var a='<a class="list-group-item" data-id="{{_id}}">\n    <span class="slot-modal-thumb" {{#if imageSrc}}style="background-image: url({{imageSrc}})"{{/if}}></span>\n    {{name}}\n</a>';window.sl.view.modalItem=Handlebars.compile(a)}),$(document).ready(function(){window.sl=window.sl||{},window.sl.view=window.sl.view||{};var a='<div class="slot slot-single slot-loading slot-{{size}}">\n    <input class="slot-input hide"\n           type="text"\n           name="{{name}}"\n           value="{{value}}"\n    {{#if required}}required="required"{{/if}} />\n\n    <div class="slot-loader">\n        <span class="slot-loader-message">Loading...</span>\n    </div>\n\n    <div class="slot-image-wrapper">\n        <span class="slot-image-inner">\n            <span class="slot-image-placeholder slot-add glyphicon glyphicon-plus"></span>\n            <div class="slot-image hide"></div>\n        </span>\n    </div>\n\n    <span class="slot-remove glyphicon glyphicon-remove"></span>\n    <span class="slot-text"></span>\n</div>';window.sl.view.slot=Handlebars.compile(a)}),$(document).ready(function(){window.sl=window.sl||{},window.sl.view=window.sl.view||{};var a='<div class="slot slot-loading slot-multi slot-{{size}}">\n    <ul class="box-sizing slot-list"></ul>\n    <div class="slot-add"><button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-plus"></span></button></div>\n    <div class="slot-left"><span class="glyphicon glyphicon-chevron-left"></span></div>\n    <div class="slot-right"><span class="glyphicon glyphicon-chevron-right"></span></div>\n    <div class="slot-loader">\n        <span class="slot-loader-message">Loading...</span>\n    </div>\n</div>';window.sl.view.strip=Handlebars.compile(a)}),$(document).ready(function(){window.sl=window.sl||{},window.sl.view=window.sl.view||{};var a='<li draggable="true" class="slot-item" title="{{text}}">\n    <input class="slot-item-input hide"\n           type="text"\n           name="{{name}}[]"\n           value="{{value}}" />\n    <span class="slot-item-name slot-marquee"><span>{{text}}</span></span>\n    <span class="slot-item-remove glyphicon glyphicon-remove"></span>\n</li>';window.sl.view.stripItem=Handlebars.compile(a)}),$(document).ready(function(){window.sl=window.sl||{},sl.settings={type:"slot",size:"normal",view:"horizontal",target:"#slot",input:null,filter:null,filterUrl:null,filterKey:null,imageUrl:"data/images.json",imageKey:"image",imageSrcKey:"src",name:"",required:!1,limit:Number.POSITIVE_INFINITY,parentSlot:null,parentKey:null}}),$(document).ready(function(){window.sl=window.sl||{};var a=function(a,b){return this.url=a,this.list=[],this.results={},this.$ajax=null,this._ready=!1,this.populate(b),this};a.prototype.populate=function(a){var b=this;this.$ajax=$.get(this.url,function(c){c.forEach(function(a){b.results[a._id]=a}),b.list=c,c.forEach(function(a){b.results[a._id]=a}),a(b),b._ready=!0})},a.prototype.get=function(a){return this.results[a]},sl.Data=a}),$(document).ready(function(){window.sl=window.sl||{},window.sl.dataCollection={list:[],data:{},add:function(a,b){var c=this.get(a);return c?c.$ajax.done(function(){b(c)}):(c=new sl.Data(a,b),this.data[a]=c,void this.list.push(c))},get:function(a){return this.data[a]}}}),$(document).ready(function(){window.sl=window.sl||{},sl.filter={getFilterType:function(a){var b="string";return"object"==typeof a?b="object":"string"==typeof a&&0===a.indexOf("#")&&(b="jquery"),b},$getInput:function(a){var b=$(a);return b.hasClass(".slot")&&(b=b.find(".slot-input")),b},getFilterId:function(a){var b=a,c=this.getFilterType(a);return"object"===c?b=a.get():"jquery"===c&&(b=this.$getInput(a).val()),b}}}),$(document).ready(function(){window.sl=window.sl||{};var a={clickItem:function(a){var b=$(a.currentTarget);this.callback(b.attr("data-id")),this.$modal.modal("hide")},filterChange:function(a){var b=$(a.currentTarget),c=b.val().toLowerCase(),d=sl.dataCollection.get(this.dataUrl).list,e=[];d.forEach(function(a){-1!==a.name.toLowerCase().indexOf(c)&&e.push(a)}),this.set(e)}};window.sl.modal={$modal:null,callback:null,dataUrl:null,show:function(b,c,d){this.settings=d||{},this.dataUrl=b,this.callback=c;var e=this.get();this.$modal&&this.$modal.detach(),this.$modal=$(sl.view.modal()).appendTo("body"),this.$modal.find("#slot-modal-filter").keyup(a.filterChange.bind(this)),this.$modal.modal("show"),this.set(e)},get:function(){var a=sl.dataCollection.get(this.dataUrl);if(this.settings.filter){var b=sl.dataCollection.get(this.settings.filterUrl),c=sl.filter.getFilterId(this.settings.filter);if(""===c)return[];var d=b.get(c)[this.settings.filterKey];return d.map(function(b){return a.get(b)})}return a.list},set:function(b){var c=this,d=sl.dataCollection.get(sl.settings.imageUrl),e=b.slice(0,40);this.$modal.find("#slot-modal-results").children().detach(),e.forEach(function(b){var e={name:b.name,_id:b._id},f=d.get(b.image);f&&(e.imageSrc=f.src),$(sl.view.modalItem(e)).click(a.clickItem.bind(c)).appendTo("#slot-modal-results")})}}}),$(document).ready(function(){window.sl=window.sl||{};var a={loading:"slot-loading",ready:"slot-ready"},b=[a.ready,a.loading],c={clickSlot:function(b){var c=$(b.currentTarget);c.hasClass(a.ready)?this.clear():sl.modal.show(this.url,this.set.bind(this),this.settings)},invalidInput:function(){this.$view.addClass("slot-invalid")},validInput:function(){this.$view.removeClass("slot-invalid")},addSlot:function(){sl.modal.show(this.url,this.add.bind(this),this.settings)},nextSlot:function(){var a=this.$view.find(".slot-item:first");this.$view.find(".slot-list").append(a)},prevSlot:function(){var a=this.$view.find(".slot-item:last");this.$view.find(".slot-list").prepend(a)},removeSlotItem:function(){$(this).detach()},disable:function(a){a.preventDefault(),a.stopPropagation()},dragStart:function(a){a.dataTransfer.setData("index",$(this).index())},drop:function(a){var b=$(this),c=a.dataTransfer.getData("index"),d=b.parent().children().eq(c);b.index()<c?b.before(d):b.after(d)}},d=function(a,b,c){return this.type=a,this.url=b,this.settings=c,this.$view=$(sl.view[a](c)),this.$view.appendTo(c.target),this.settings.input&&this.$view.find(".slot-input").replaceWith(this.settings.input),this._bind(),this};d.prototype._bind=function(){var a=this,b=this.settings.filter;if("slot"===this.type?(this.$view.click(c.clickSlot.bind(this)),this.$view.find("input").change(function(b){$(b.currentTarget).is(":invalid")?c.invalidInput.apply(a,[b]):$(b.currentTarget).is(":valid")&&c.validInput.apply(a,[b])})):"strip"===this.type&&(this.$view.find(".slot-add").click(c.addSlot.bind(this)),this.$view.find(".slot-right").click(c.nextSlot.bind(this)),this.$view.find(".slot-left").click(c.prevSlot.bind(this))),b){var d=sl.filter.getFilterType(b);"object"===d?b.input.$view.find(".slot-input").change(function(){""===$(this).val()&&a.clear()}):"jquery"===d&&sl.filter.$getInput(b).change(function(){""===$(this).val()&&a.clear()})}},d.prototype.get=function(){return"slot"===this.type?this.$view.find(".slot-input").val():"strip"===this.type?this.$view.find("input").map(function(){return $(this).val()}):void 0},d.prototype.set=function(a){var b=this;if("slot"===this.type){var c=sl.dataCollection.get(this.url).get(a);if(!c)return console.error("slot value missing, removed",a),this.clear();this.$view.find(".slot-input").val(a),this.$view.find(".slot-text").html(c.name),this.triggerChange();var d=this.getImageSrc(a);d&&(this.$view.find(".slot-image").css({background:"url("+d+")"}).removeClass("hide").show(),this.$view.find(".slot-image-placeholder").hide()),this.setState("ready")}else if("strip"===this.type){if(!Array.isArray(a))return;a.forEach(function(a){b.add(a)}),this.setState("ready")}},d.prototype.triggerChange=function(){if("slot"===this.type){var a=document.createEvent("HTMLEvents");a.initEvent("change",!1,!0),this.$view.find("input").get(0).dispatchEvent(a)}},d.prototype.add=function(a){var b=sl.dataCollection.get(this.url).get(a);if(!b)return console.error("slot value missing, removed",a);var d=$(sl.view.stripItem({value:a,name:this.settings.name,text:b.name})).appendTo(this.$view.find(".slot-list")).click(c.removeSlotItem);d.get(0).addEventListener("dragstart",c.dragStart),d.get(0).addEventListener("drop",c.drop),d.get(0).addEventListener("dragover",c.disable);var e=this.getImageSrc(a);e&&d.css({background:"url("+e+")"})},d.prototype.remove=function(){},d.prototype.getImageSrc=function(a){var b=sl.dataCollection.get(this.settings.imageUrl),c=sl.dataCollection.get(this.url).get(a),d=c[this.settings.imageKey];return d?b.get(d)[this.settings.imageSrcKey]:void 0},d.prototype.clear=function(){"slot"===this.type?(this.clearState(),this.$view.find(".slot-image").hide(),this.$view.find(".slot-image-placeholder").show(),this.$view.find(".slot-text").html(""),this.$view.find(".slot-input").val(""),this.triggerChange()):"strip"===this.type&&this.$view.find(".slot-item").detach()},d.prototype.clearState=function(){var a="";b.forEach(function(b){a+=b+" "}),this.$view.removeClass(a)},d.prototype.setState=function(b){this.clearState(),this.$view.addClass(a[b])},sl.Input=d}),$(document).ready(function(){window.sl=window.sl||{};var a=function(a,b,c){var d=this;if(!a)return console.error("Cannot generate a new slot without a url");this.url=a,this.settings=$.extend(this,sl.settings,c);var e=this.isFilter();return this.input=new sl.Input(this.settings.type,a,this.settings),e?sl.dataCollection.add(this.filterUrl,function(){d.load(b)}):this.load(b),this};a.prototype.load=function(a){var b=this;sl.dataCollection.add(this.url,function(){sl.dataCollection.add(b.imageUrl,function(){a?b.input.set(a):b.input.clearState()})})},a.prototype.get=function(){return this.input.get()},a.prototype.isFilter=function(){return this.filter&&"object"==typeof this.filter&&"slot"===this.filter.type&&(this.filterUrl=this.filter.url),this.filterUrl?this.filterKey?(this._filter=!0,!0):console.error("Missing filter key"):void 0},sl.Class=a}),$(document).ready(function(){window.sl=sl||{},window.sl.view=window.sl.view||{},$(".slot-input").each(function(){var a=$(this),b=$("<div></div>"),c=a.data("url"),d=a.val(),e=$.extend(a.data("options"),{target:b.get(0),input:a.get(0)});a.hide(),b.insertAfter(a),new sl.Class(c,d,e)}),$(".slot-strip").each(function(){var a=$(this),b=$("<div></div>"),c=a.data("url"),d=JSON.parse(a.val()),e=a.attr("name"),f=$.extend(a.data("options"),{target:b.get(0),type:"strip",name:e});b.insertAfter(a),a.detach(),new sl.Class(c,d,f)})});