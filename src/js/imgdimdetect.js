define(function() {
  return {
    imageDimDetect : function(URL) {

        var src = URL;

        function test() {
            return 'image src path: ' + this.src;
        }


    	return {

    		testIt: test,

    		src: src
    	};

    }
  };
});