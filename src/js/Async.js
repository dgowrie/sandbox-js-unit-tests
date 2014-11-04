// Async example module

define(['jquery'], function ($) {

	var poll = {
		ping: function (pong) {
			setTimeout(function () { pong("Pong!"); }, 5000);
		}
	};

	var view = {
		$el: $("#main"),
		show: function () {
			return this.$el.fadeIn(250).promise();
		}
	};

	var getTemplate = function (path, callback) {
		return $.ajax({ url: path });
	};

	function deferredRefresh() {
		return $.Deferred(function (dfd) {
			setTimeout(function () {
				dfd.resolve("Ping!");
			}, 500);
		}).promise();
	}

	return {

		poll: poll,
		view: view,
		getTemplate: getTemplate,
		deferredRefresh: deferredRefresh

	};

});