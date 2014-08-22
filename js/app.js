var app = angular.module('ncsahApp',  ['ngRoute']);

app.config(function ($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.
		when('/', {templateUrl: 'partials/index.html'}).
		when('/ncsah', {templateUrl: 'partials/ncsah.html'}).
		when('/lessen', {templateUrl: 'partials/lessen.html'}).
		when('/pictures', {templateUrl: 'partials/pictures.html'}).
		when('/contact', {templateUrl: 'partials/contact.html'}).
		when('/instructie', {templateUrl: 'partials/instructie.html'})

		$locationProvider.html5Mode(true).hashPrefix('!');
});

    app.controller('mainController', function($scope, $window){
      $scope.$on('$routeChangeSuccess', function(scope, next, current){

			 jQuery('body').scrollTop(0);

        } );
      });

	app.directive('ngLoader', function ($timeout) {
		return {
			restrict: 'AE',
			link: function (scope, element) {

				var img = element.find('img');
			  var spinner = element.find('.ai-indicator');
				var figure = element.find('figure');

				img.load(function() {

					spinner.css('display', 'none');
					$timeout(function () { figure.css('opacity', '1'); }, 100);

				});



			}


		}
	});
