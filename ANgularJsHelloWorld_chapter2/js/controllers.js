
'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller(
	'MainCtrl', 
	[
		'$scope', 
		'$location', 
		'$http', 
		function MainCtrl($scope, $location, $http) {
			$scope.message = "World";
		}
	]
);

helloWorldControllers.controller(
	'ShowCtrl', 
	[
		'$scope', 
		'$location', 
		'$http', 
		function ShowCtrl($scope, $location, $http) {
			$scope.message = "World";
		}
	]
);