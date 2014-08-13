'use strict';

$.fn.hasAttr = function(attrName)
{
	var attrValue = this.attr(attrName);
	return typeof attrValue !== 'undefined' && attrValue !== false;
};

$.fn.scrollParent = function() {

	var p = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow") + $.css(this,"overflow-y"));
			}).eq(0);

	return p || $(document);
}