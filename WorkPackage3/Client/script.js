


var app = angular.module('konferHealth', ['ngRoute', 'ngMap', 'ngAnimate', 'angular-carousel']);

app.factory('dataService', function () {

    var savedData = {}

    function set(key, data) {
        savedData = data;
        setCookie(key, data, 1);
    }

    function get(key) {
        return getCookie(key);
    }

    return {
        set: set,
        get: get
    }

});

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'searchController'
			})

			// route for the about page
			.when('/search/list', {
				templateUrl : 'pages/search.html',
				controller  : 'searchController'
			})

			// route for the contact page
			.when('/search/map', {
				templateUrl : 'pages/map.html',
				controller  : 'searchController'
			})
			// route for the contact page
			.when('/profile', {
				templateUrl : 'pages/profile.html',
				controller  : 'profileController'
			})
            .when('/profile-2', {
                templateUrl: 'pages/profile-2.html',
                controller: 'profileController'
            })
            .when('/profile-org', {
                templateUrl: 'pages/profile-new.html',
                controller: 'profileController'
            })
            .when('/profile-mysugr', {
                templateUrl: 'pages/profile-mysugr.html',
                controller: 'profileController'
            })
	        .when('/profile-mysugr-app', {
	            templateUrl: 'pages/profile-mysugr-app.html',
	            controller: 'profileController'
	        })
			.when('/single', {
				templateUrl : 'pages/single.html',
				controller  : 'aboutController'
			})
			.when('/forms', {
				templateUrl : 'pages/forms.html',
				controller  : 'aboutController'
			})
			.when('/builder', {
				templateUrl : 'pages/pathway-builder.html',
				controller  : 'aboutController'
			})
            .when('/collaboration-myd', {
                templateUrl: 'pages/collaboration-myd.html',
                controller: 'profileController'
            })
            .when('/collaboration-yourmd', {
                templateUrl: 'pages/collaboration-yourmd.html',
                controller: 'profileController'
            })
            .when('/collaboration-ccg', {
                templateUrl: 'pages/collaboration-ccg.html',
                controller: 'profileController'
            })
            .when('/collaboration', {
                templateUrl: 'pages/collaboration.html',
                controller: 'aboutController'
            })
			.when('/login', {
				templateUrl : 'login.html',
				controller  : 'profileController'
			})
            .when('/logout', {
                templateUrl: 'login.html',
                controller: 'profileController'
            })
			.when('/register', {
				templateUrl : 'register.html',
				controller  : 'profileController'
			})
            .when('/profile-user', {
                templateUrl: 'pages/profile-new-user.html',
                controller: 'profileIndividualController'
            })
			.when('/profile-individual', {
				templateUrl : 'pages/profile-individual.html',
				controller  : 'profileIndividualController'
			});

	});


	app.controller('loginController', function($scope) {


	});

	app.controller('aboutController', function($scope) {
	    $(".circle-wrapper .circle-pin").click(function () {
	        $(this).toggleClass("active");
	    });
	});

	app.controller('contactController', function($scope, NgMap) {


	});
