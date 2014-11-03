define(['DomDrawTdd'], function (DomDrawTdd) {


    describe('DOM Drawing TDD demo', function () {

        var drawingArea,
            paper;

        // setup for test
        beforeEach( function() {
            $drawingArea = $('<div style="height: 300px; width: 600px;></div>');
            $(document.body).append(drawingArea);
            paper = DomDrawTdd.wwp.initializeDrawingArea(drawingArea[0]);
        });

        // tear down
        afterEach( function() {
            $drawingArea.remove();
        });



        it('should be an object', function () {
            expect(DateRefactor).to.be.an('object');
        });

        it('does nothing', function() {
            expect(false).to.equal(false);
        });

        
    });

});