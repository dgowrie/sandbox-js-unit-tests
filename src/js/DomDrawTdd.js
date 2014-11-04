// DomDrawTdd module

define(function () {

	var wwp = {};
	
	(function() {
		'use strict';
	
		var paper;

		wwp.initializeDrawingArea = function(drawingAreaDiv) {
			// paper = new Raphael(drawingAreaDiv);
			// return paper;
		};

		wwp.drawLine = function( startX, startY, endX, endY ) {
			// paper.path('M' + startX	+ ',' + startY + 'L' + endX + ',' + endY);
		};
	
	}());
	

	return {
		wwp: wwp
	};

});