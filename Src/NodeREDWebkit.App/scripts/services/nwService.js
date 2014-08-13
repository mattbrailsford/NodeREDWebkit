nrwk.factory('nw', [

	function()
	{
		'use strict';

		var gui = require('nw.gui');

		return {

			gui: gui,
			app: gui.App,
			window: gui.Window.get()

		};
	}

]);