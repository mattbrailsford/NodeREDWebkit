function bootstrapApp() {

	// List dependencies
	var libraries = [
		"jquery-2.0.3.min",
		"angular.min",
		"angular-route.min",
		"angular-resource.min"
	];

	var services = [
		"nwService",
		"httpService"
	];

	var controllers = [
		"MainCtrl"
	];

	var filters = [
		
	];	

	var directives = [
		"nwApp",
		"nwTray"
	];

	var extensions = [
		"jQuery"
	];	

	// Agregate dependencies
	var allScripts = [];

	// Libraries
	libraries.forEach(function(n){
		allScripts.push('vendor/' + n + '.js');
	});

    // The app
	allScripts.push('scripts/app.js');

	// Services
	services.forEach(function (n) {
        allScripts.push('scripts/services/' + n + '.js');
    });

    //Controllers
    controllers.forEach(function (n) {
        allScripts.push('scripts/controllers/' + n + '.js');
    });

    //Filters
    filters.forEach(function (n) {
        allScripts.push('scripts/filters/' + n + '.js');
    });

    //Directives
    directives.forEach(function (n) {
        allScripts.push('scripts/directives/' + n + '.js');
    });

    //Extensions
    extensions.forEach(function (n) {
        allScripts.push('scripts/extensions/' + n + '.js');
    });

	// Load dependencies
	$LAB
		.setOptions({ AlwaysPreserveOrder: true })
		.script(allScripts)
		.wait(function(){

			// Start the app
			angular.bootstrap(document, ['nrwk']);

		});

};