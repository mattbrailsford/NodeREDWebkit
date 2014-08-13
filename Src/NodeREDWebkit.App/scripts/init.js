(function(){

	'use strict';

	// The single-instance config option in node-webkit
	// doesn't seem to work too well, so here we create
	// a server to check for other running instances.
	// If a server is found then the current running
	// instance is brought to front, and this instance
	// will close.

	var http = require('http');
	var port = 5150;

	var server = http.createServer(function(req, res){

		// Respond to request
		res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Vivo App');

        // Show window
        var nwWindow = require('nw.gui').Window.get();
        nwWindow.show();
        nwWindow.focus();

	})
	.listen(port, '127.0.0.1', function(){

		// Start the app
		bootstrapApp();

		// Show the window
		var nwWindow = require('nw.gui').Window.get();
		nwWindow.show();

	});

	server.on('error', function(){

		// Another instance must be running, so make
		// a request to it to bring it to front, then
		// close this instance.
		http.get('http://127.0.0.1:' + port, function(){
			require('nw.gui').Window.get().close(true);
		});

	});

})();