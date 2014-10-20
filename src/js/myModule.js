define(['myModule'], function (string) {
	
	return {

		string: string,

		sayIt: function () {
			console.log('Burt blurted loudly \"' + string + '!\"')
		}
	};

});