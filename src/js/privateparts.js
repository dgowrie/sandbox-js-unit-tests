var person = (function () {

	'use strict';

	var chew = function () {
			console.log('chew');
		},
		
		swallow = function () {
			console.log('swallow');
		},
		
		eat = function () {
			for (var i = 0, len = 10; i < len; i++ ) {
				chew();
			}
			swallow();
		};

	return {
		eat: eat
	};

}());

person.eat(); // public, can be unit tested
person.chew(); // private, cannot be unit tested