angular.module('comission', [])
	.config(comissionRouter);

function comissionRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/information.html'})
		.when('/search', {templateUrl: 'partials/search.html'})
		.when('/adding', {templateUrl: 'partials/adding.html'})
		.when('/express', {templateUrl: 'partials/express.html'})
		.when('/contacts', {templateUrl: 'partials/contacts.html'});
}