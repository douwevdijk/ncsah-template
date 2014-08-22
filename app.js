var app = angular.module('ncsahApp',  ['ngRoute']);

app.config(function ($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.
		when('/', {templateUrl: 'partials/index.html'}).
		when('/ncsah', {templateUrl: 'partials/ncsah.html'}).
		when('/lessen', {templateUrl: 'partials/lessen.html'}).
		when('/pictures', {templateUrl: 'partials/pictures.html'}).
		when('/contact', {templateUrl: 'partials/contact.html'}).
		when('/zitles', {templateUrl: 'partials/zitles.html'}).
		when('/rijles', {templateUrl: 'partials/rijles.html'})
		
		$locationProvider.html5Mode(true);
    	$locationProvider.hashPrefix('!');
});		  