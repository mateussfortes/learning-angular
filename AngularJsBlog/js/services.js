'use strict';

var blogServices = angular.module('blogServices', ['ngResource']);

blogServices.factory(
	'BlogList', 
	[
		'$resource',
		function($resource) {
			return $resource(
				"http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList",
				{}, 
				{
					get: {method: 'GET', cache: false, isArray: true}
				}
			);
		}
	]
);

blogServices.factory(
	'BlogPost', 
	[
		'$resource', 
		function($resource) {
			return $resource(
				"http://www.micbutton.com/rs/blogPost", 
				{}, 
				{
					get: {method: 'GET', cache: false, isArray: false},
					save: {method: 'POST', cache: false, isArray: false},
					update: {method: 'PUT', cache: false, isArray: false},
					delete: {method: 'DELETE', cache: false, isArray: false}
				}
			);
		}
	]
);