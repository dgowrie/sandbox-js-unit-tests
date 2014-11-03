//  singletons

// If first you unit test init, then move on to unit test addUser,
// wanting to verify what happens if the token isn't set, it wouldn't
// be possible because the token would've already been set by init.
// You'd need to reset the data singleton. 
// ... or use Object.create() ?

(function() {
	'use strict';


	var data = {
		token: null,
		users: []
	};

	function init(username, password) {
		data.token = username + password;
	}

	function addUser(user) {
		if (data.token) {
			data.users.push(user);
		}
	}


}());



// Modified approach, better demos the problem
// Run this, then if you want to test just
// 'addUser' but want to see what would happen if 
// token wasn't set, you can't ...
// You'd have to manually reset 'data'... 


(function() {
	'use strict';

	var data = {
		token: null,
		users: []
	};

	function setToken( username, password ) {
		data.token = username + password;
	}

	function addUser( user ) {
		var success = false;

		if ( data.token ) {
			data.users.push( user );
			success = true;
		}
	
		return success;
	}

	setToken( 'davidgowrie', 'password' );
	addUser( { username: 'davidgowrie' } );
	console.log( data );

}());


// To make this testable, test the flows in the object without having to know what to clear:
// 1. Use a function to return the data object
// 2. Cleanup: wrap the two functions in an object
// 3. Add an init function, to pass in data we want to use (no longer using global data)
// 4. Update / add users.x invocations, including the users.init with 'newData' i.e. new instance of data we want
// 5. Can now use the init method in our unit tests to clear the data obj, to test the false condition
// Alternative: running unit tests, setup and tear down could manually reset everything... but 
// this way you have one line of code (in this case the init) to reset everything.

(function() {
	'use strict';

	var newData = function () { // 1
		return {
			token: null,
			users: []
		};
	};

	var users = { // 2

		init: function ( data ) { // 3
			this.data = data;
		},

		setToken: function ( username, password ) {
			this.data.token = username + password;
		},

		addUser: function ( user ) {
			var success = false;

			if ( this.data.token ) {
				this.data.users.push( user );
				success = true;
			}
		
			return success;
		}

	};

	// 4
	users.init( newData() );
	users.setToken( 'davidgowrie', 'password' );
	users.addUser( { username: 'davidgowrie' } );
	console.log( users.data );


	// 5
	users.addUser( { username: 'ted' } ); // true - but we want to test the 'false' condition i.e. no token set
	users.init( newData() ); // reinitialize the data object via the init
	console.log( users.data ); // confirming it is cleared
	users.addUser( { username: 'ted' } ); // false - i.e we have tested the false condition, no token set

}());

