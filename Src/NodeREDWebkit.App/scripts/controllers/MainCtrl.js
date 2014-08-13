nrwk.controller('MainCtrl', [

	'$scope',
	'$location',
	'$window',

    function
    (
		$scope, 
		$location,
		$window
	)
    {
    	'use strict';

    	$scope.iframeSrc = "";

    	var http = require('http');
		var express = require("express");
		var RED = require("node-red");

		var app = new express();
		app.use("/", express.static("public"));

		var server = http.createServer(app);

		var settings = {
		    httpAdminRoot:"/red",
		    httpNodeRoot: "/api",
		    verbose: true
		};

		RED.init(server, settings);

		app.use(settings.httpAdminRoot, RED.httpAdmin);
		app.use(settings.httpNodeRoot, RED.httpNode);

		server.listen(1881);

		RED.start();

		$scope.iframeSrc = "http://127.0.0.1:1881/red";

    }

]);