
'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller(
	'BlogCtrl', 
	[
		'$scope', 
		function BlogCtrl($scope)
		{
			$scope.blogList = [
				{
					"_id": 2,
					"date": 1400623623107,
					"introText": "Este é um blog sobre AngularJS. Nós iremos mostrar como construir",
					"blogText": "Este é um blog sobre ANgularJS. Nós iremos mostrar como construir um blog e como adicionar comentarios em cada post."
				},{
					"_id": 2,
					"date": 1400623623107,
					"introText": "Este é um blog sobre AngularJS. Nós iremos mostrar como construir",
					"blogText": "Este é um blog sobre ANgularJS. Nós iremos mostrar como construir um blog e como adicionar comentarios em cada post."
				}
			];

		}
	]
);

blogControllers.controller(
	'BlogViewCtrl', 
	[
		'$scope',
		'$routeParams',
		function BlogCtrl($scope, $routeParams)
		{
			var blogId = $routeParams.id;
			var blog1 = {
				"_id": 2,
				"date": 1400623623107,
				"introText": "Este é um blog sobre AngularJS. Nós iremos mostrar como construir",
				"blogText": "Este é um blog sobre ANgularJS. Nós iremos mostrar como construir um blog e como adicionar comentarios em cada post.",
				"comments" :
				[	
					{
						"commentText" : "Very good post. I love it."
					},
					{
						"commentText" : "When can we learn services."
					}
				]
			};
			
			var blog2 = {
				"_id": 2,
				"date": 1400623623107,
				"introText": "Este é um blog sobre AngularJS. Nós iremos mostrar como construir",
				"blogText": "Este é um blog sobre ANgularJS. Nós iremos mostrar como construir um blog e como adicionar comentarios em cada post.",
				"comments" :
				[	
					{
						"commentText" : "Very good post. I love it."
					},
					{
						"commentText" : "When can we learn services."
					}
				]
			};

			if(blogId === '1')
			{
				$scope.blogEntry = blog1;
			}
			else if(blogId === '2')
			{
				$scope.blogEntry = blog2;
			}
		
		}
	]
);