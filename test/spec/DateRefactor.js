define(['DateRefactor'], function (DateRefactor) {

    describe('DateRefactor', function () {

        it('should be an object', function () {
            expect(DateRefactor).to.be.an('object');
        });

        describe('prettyDate', function () {

            it('should work... ', function () {

                var now = '2008/01/28 22:25:00';

                expect( DateRefactor.prettyDate( now, '2008/01/28 22:24:30' ) ).to.equal( 'just now' );
                expect( DateRefactor.prettyDate( now, '2008/01/28 22:23:30' ) ).to.equal( '1 minute ago' );
                expect( DateRefactor.prettyDate( now, '2008/01/27 22:24:30' ) ).to.equal( 'Yesterday' );
                expect( DateRefactor.prettyDate( now, '2008/01/26 22:24:30' ) ).to.equal( '2 days ago' );
                expect( DateRefactor.prettyDate( now, '2008/01/21 22:24:30' ) ).to.equal( '1 weeks ago' );


            });

        });

    });

});