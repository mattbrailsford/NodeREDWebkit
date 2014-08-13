nrwk.directive('nwTray', [

	'$window',
	'nw',

	function 
	(
		$window,
		nw
	)
	{
		'use strict';

		return {
			restrict: 'A',
			link: function(scope, element, attrs)
			{
				if (process.platform === 'win32') {

					// Tray icon
					var trayOpts = {
	                    icon: 'assets/logo2.png', //Relative to package.json file
	                    title: 'Node-RED'
	                };

	                var tray = new nw.gui.Tray(trayOpts);

	                // Tray menu
	                var menu = new nw.gui.Menu();

	                menu.append(new nw.gui.MenuItem({
	                    label: 'Show Window',
	                    click: function () {
	                        nw.window.show();
	                        nw.window.focus();
	                    }
	                }));

	                menu.append(new nw.gui.MenuItem({
	                    label: 'Hide Window',
	                    click: function () {
	                        nw.window.hide();
	                    }
	                }));

	                menu.append(new nw.gui.MenuItem({
	                    label: 'Exit',
	                    click: function () {
	                        nw.window.close();
	                    }
	                }));

	                tray.menu = menu;
	                tray.on('click', function () {
	                    nw.window.show();
	                    nw.window.focus();
	                });

	                //Push tray icon to global window to tell garbage collector that tray icon is not garbage
	                $window.tray = tray;

				};
			}
		}		
	}

]);