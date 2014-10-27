define([
  'imgdimdetect'
], function(test) {
  describe('image dimensions detection', function() {
    it('you should be able to create a function that returns a module', function() {
      var module = test.imageDimDetect('http://placehold.it/300x500');

      expect(module.testIt).to.be.a('function');
      expect(module.src).to.eql('http://placehold.it/300x500');
      expect(module.testIt()).to.eql('image src path: http://placehold.it/300x500');

      // module.name = 'katniss';
      // module.greeting = 'hi';
      // expect(module.name).to.eql('katniss');
      // expect(module.greeting).to.eql('hi');
      // expect(module.sayIt()).to.eql('hi, katniss');
    });
  });
});