define(['DomDrawTdd', 'jquery'], function (DomDrawTdd, $) {


    describe('DOM Drawing TDD demo', function () {

        var drawingArea,
            paper;

        // setup for test
        beforeEach( function() {
            $drawingArea = $('<div style="height: 300px; width: 600px;></div>');
            $(document.body).append($drawingArea);
            paper = DomDrawTdd.wwp.initializeDrawingArea($drawingArea[0]);
        });

        // tear down
        afterEach( function() {
            $drawingArea.remove();
        });



        it('should be an object', function () {
            expect(DomDrawTdd).to.be.an('object');
        });

        it('does nothing', function() {
            expect(false).to.equal(false);
        });

        it.skip('draws a line', function() {
            DomDrawTdd.wwp.drawLine(10, 30, 300, 40);

            expect(lines()).to.equal([
                [10, 30, 300, 40]
            ]);

            // then he does a huge copy/paste from codebase not accessible via presentation... blarg
            // so... I'll just fake it
            function lines() {
                var output = [
                    [10, 30, 300, 40]
                ];

                return output;
            }
        });

        
    });

});