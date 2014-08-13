nrwk.factory('http', [

	'$q',

	function
	(
		$q
	)
	{
		'use strict';

		var http = require('http'),
			request = require('request'),
			unzip = require('unzip');

		var api = {

			getJson: function(url, qs)
			{
				var def = $q.defer();

				request({
					url: url,
					qs: qs,
					json: true
				}, function (error, response, body) {
				  	if (!error && response.statusCode == 200) {
				  		def.resolve(angular.fromJson(body));
				  	} else {
				  		def.reject();
				  	}
				});

				return def.promise;
			},

			downloadZipContents: function(url, targetPath){

				var def = $q.defer();

				var req = request({
					method: 'GET',
					uri: url,
					headers: {
						"User-Agent": "VIVO (http://getvivo.com)"
					}
				});

				req.pipe(unzip.Extract({ path: targetPath }))
					.on('close', function(){
						def.resolve(targetPath);
					})
					.on('error', function(err){
						def.reject(err);
					});

				return def.promise;

			}

		};

		return api;
	}

]);