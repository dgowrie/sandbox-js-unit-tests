define([
  'imgdimdetect'
], function(test) {
  describe('image dimensions detection', function() {

    it('should be able to pass data to and get data returned from the function', function() {

      var fakeDatum = {
        mediaTile: 'http://placehold.it/300x500',
        mediaTileW: null,
        mediaTileH: null
      },
        boo = {}, // need to move this and fakeDatum up in nested scope??

        module = test.imageDimDetect(fakeDatum, boo);

      expect(module.testIt).to.be.a('function');
      expect(module.src).to.eql('http://placehold.it/300x500');
      expect(module.testIt()).to.eql('image src path: http://placehold.it/300x500');

      test.src = 'http://placehold.it/600x400';
      expect(test.src).to.eql('http://placehold.it/600x400');
    });

    // return dimensions of the passed image asset via promise
    describe('promise', function() {

      it.skip('should return the width and height of the image asset', function() {
        //...
        


      });
    });


  });
});