var seep = require("../seep");

var app = seep.Application.extend({

	w: new seep.ui.Window("My Window"),

	init: function() {
		this._super();
		this.setMainWindow(this.w);
		this.w.add(new seep.ui.Text("Hello"));
		this.w.add(new seep.ui.Text("World!"));
		this.w.addListener("onload", function() {
				alert("add");
			}.runInClient(), "onloader");
	}

});


exports.foobar = app;