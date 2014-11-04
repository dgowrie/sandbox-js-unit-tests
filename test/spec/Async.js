define(['Async', 'jquery'], function (Async, $) {


	describe('Async', function () {
	  
		describe("Ping", function () {
			it("should update in 500 ms", function () {
				Async.poll.ping(function (message) {
					expect(message).to.be("Pong!");
				});
			});
		});

		describe("View", function () {
			describe("Show", function () {
				it("should show in 250 ms", function (done) {
					Async.view.show().then(function () {
						done();
					});
				});
			});
		});

		describe("getTemplate", function () {
			it("should get template via Ajax", function (done) {
				Async.getTemplate("list.html").then(function (t) {
					expect(t).to.be.ok();
					done();
				});
			});
		});

		describe("Refresh", function () {
			it("should update in 500 ms", function (done) {
				Async.deferredRefresh().then(function (message) {
					expect(message).to.be("Ping!");
					done();
				});
			});
		});

		// TODO: Show timeouts
		// fix timeout of 2000ms exceeded
		
	});

});