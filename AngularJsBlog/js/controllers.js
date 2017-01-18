
'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller(
	'BlogCtrl', 
	[
		'$scope', 
		'BlogList',
		function BlogCtrl($scope, BlogList)
		{
			BlogList.get(
				{},
				function success(response) {
					console.log("Success"+JSON.stringfy(response));
					$scope.blogList = response;
				},
				function error(errorResponse) {
					console.log("Error:"+JSON.stringfy(errorResponse));
				}
			);

		}
	]
);

/*REST PARA NOTICIA INTERNA NÃO ATUALIZADO*/
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