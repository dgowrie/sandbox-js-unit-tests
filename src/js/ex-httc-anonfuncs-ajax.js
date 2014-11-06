//  Hard to test code ex: Anonymous Functions

// Problem being that testing the code in the callback (1) is difficult without
// actually making the AJAX request. If you really wanted to unit test the 
// callback, you'd need to either actually make the AJAX request or simulate
// the AJAX request.

(function() {

	'use strict';

	$.ajax({
		url: '/people',
		success: function (data) { // 1
			var $list = $('#list').empty();
			$.each( data.people, function ( index, person ) {
				$( '<li />', {
					text: person.fullName
				} ).appendTo( $list );
			});
		}
	});

	/* assumed JSON file:
		{ people: [{ fullName: "Douglas Crockford" }, { fullName: "Nicholas Zakas" }, { fullName: "Steve Souders" }] }
	*/


}());



// Modified approach:
// 1. Splits the callback out to new function
// 2. Call that function by it's handle as the success callback
// 3. Can now call that function outside of the ajax request, for testing

(function() {

	'use strict';

	function render( data ) { // 1

		var $list = $('#list').empty();
		$.each( data.people, function ( index, person ) {
			$( '<li />', {
				text: person.fullName
			} ).appendTo( $list );
		});

	}

	$.ajax({
		url: '/people',
		success: render // 2
			
		
	});

	/* assumed JSON file:
		{ people: [{ fullName: "Douglas Crockford" }, { fullName: "Nicholas Zakas" }, { fullName: "Steve Souders" }] }
	*/

// 3 
render({ people: [{ fullName: "Douglas Crockford" }, { fullName: "Nicholas Zakas" }, { fullName: "Steve Souders" }] });

}());