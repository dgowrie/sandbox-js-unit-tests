define(['jquery'], function($) {
  return {
    imageDimDetect : function(feedDatum, boo) {

        var src = feedDatum.mediaTile;
        var that = this;

        function test() {
            return 'image src path: ' + this.src;
        }


        function getPromise(theDatum) {

            // theDatum is passed in to create a closure of sorts for the entire feedDatum obj
            var deferred = $.Deferred(),
                img = new Image();

            img.onload = function() {
                deferred.resolve({ // 'thepromise' to be returned
                    item: theDatum,
                    w: img.width,
                    h: img.height
                });
            };

            img.src = theDatum.mediaTile;

            return deferred.promise();

        }

        $.when(getPromise(feedDatum)).done(function(thepromise) {
            var thatDatum = thepromise.item;
            thatDatum.mediaTileW = thepromise.w;
            thatDatum.mediaTileH = thepromise.h;
            console.log('inside Promise -> feedDatum.mediaTileW: ', thatDatum.mediaTileW);

            // check if mediaOrient not set
            if (thatDatum.mediaOrient === '') {
                thatDatum.mediaOrient = that.getMediaOrient(thatDatum);
            }
                        
            // Push each post to data collection
            //that.addItems(thatDatum);

           // that.itemCounter(thatDatum.id);
           boo.foo = 'bar';
            
        });





    	return {

    		testIt: test,

    		src: src
    	};

    }
  };
});