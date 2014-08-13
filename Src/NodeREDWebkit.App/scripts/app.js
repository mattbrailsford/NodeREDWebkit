'use strict';

var nrwk = angular.module('nrwk', ['ngRoute']).config([

    '$compileProvider',
    '$routeProvider',
    '$sceDelegateProvider',

    function ($compileProvider, $routeProvider, $sceDelegateProvider) {

        // Whitelist file urls
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(file):/);

        $sceDelegateProvider.resourceUrlWhitelist([
             // Allow same origin resource loads.
             'self',
             // Allow loading from our assets domain.  Notice the difference between * and **.
             'http://127.0.0.1:1881/**'
        ]);

    }

]);