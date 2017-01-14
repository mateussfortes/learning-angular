
'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller(
	'MainCtrl', 
	[
		'$scope', 
		'$location', 
		'$http', 
		function MainCtrl($scope, $location, $http) {
			$scope.message = "Hello World with Angular";
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
			$scope.message = "Olá, mundo!";
		}
	]
);

var addonsControllers = angular.module('addonsControllers', []);

addonsControllers.controller(
	'AddonsCtrl', 
	[
		'$scope', 
		'checkCReds',
		'$location',
		'AddonsList',
		'$http', 
		'getToken',	
		function AddonsCtrl($scope, checkCReds, $location, AddonsList, $http, getToken) {
			if(checkCReds() !== true) {
				$location.path('/loginForm');
			}

			$https.defaults.headers.common['Authorization'] = 'Basic' + getToken();

			AddonsList.getList(
				{},
				function success(response) {
					console.log("Success" + JSON.stringify(response));
					$scope.addonsList = response;
				},
				function error(errorResponse) {
					console.log("Error:" + JSON.stringify(errorResponse));
				}
			);
			$scope.addonsActiveClass = 'active';
 
		}
	]
);

helloWorldControllers.controller(
	'CustomerCtrl',
	[
		'$scope',
		function CustomerCtrl($scope) {
			$scope.customerName = "Bob's Buger";
			$scope.customerNumber = "44522";
			
			$scope.changeCustomer = function() {
				$scope.customerName = $scope.cName;
				$scope.customerNumber = $scope.cNumber;
			};

		}
	]
);

helloWorldControllers.controller(
	'AddCustomerCtrl',
	[
		'$scope',
		'$location',
		function AddCustomerCtrl($scope, $location) {
			$scope.submit = function() {
				$location.path('/addedCustomer/' + $scope.cName + '/' + $scope.cCity);
			};
		}
	]
);

helloWorldControllers.controller(
	'AddedCustomerCtrl',
	[
		'$scope',
		'$routeParams',
		function AddedCustomerCtrl($scope, $routeParams) {
			$scope.customerName = $routeParams.customer;
			$scope.customerCity = $routeParams.city;
		}
	]
);