function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

var currentUserEmail = '';

/*
    *   Searching from front page
    */
var Organisation = {
    name: '',
    building: '',
    street: '',
    town: '',
    city: '',
    county: '',
    postcode: '',
    country: '',
    email: '',
    description: '',
    website: '',
    ahsn: '',
    ccg: '',
    digitaltag: '',
    medicaltag: '',
    logo: '',
    video: '',
    objectives: '',
    aim: '',
    type: '',
    id: ''
};

var Contact = {
    name: '',
    building: '',
    street: '',
    town: '',
    city: '',
    county: '',
    postcode: '',
    country: '',
    email: '',
    description: '',
    website: '',
    ahsn: '',
    ccg: '',
    digitaltag: '',
    medicaltag: '',
    logo: '',
    video: '',
    objectives: '',
    aim: '',
    type: '',
    id: '',
    password: ''
};


var Product = {
    name: '',
    description: '',
    website: '',
    ahsn: '',
    ccg: '',
    digitaltag: '',
    medicaltag: '',
    logo: '',
    video: '',
    objectives: '',
    type: '',
    id: '',
    orgid: ''
};

var CollaborationRequest = {
    type: '',
    title: '',
    description: '',
    problem: '',
    aim: '',
    benefit: '',
    value: ''
};

var Products = [];
var Orgs = [];
var Contacts = [];
var Collabs = [];

function register()
{
    if ($("#email").val() == "" || $("#password").val() == "")
    {
        alert("Please enter an email address and password");
        return false;
    }

    if ($("#confirmPassword").val() != $("#password").val()) {
        alert("Please ensure the passwords match");
        return false;
    }

    Contact.email = $("#email").val();
    Contact.name = $("#name").val();
    Contact.organisation = $("#org").val();
    Contact.password = $("#password").val();

    $.ajax({
        type: 'POST',
        url: '/konferhealthserver/account/register',
        data: { json: JSON.stringify(Contact) },
        dataType: 'json'
    });

    Organisation.name = Contact.organisation;
    setCookie(Contact.email, JSON.stringify(Contact), 1);
    setCookie(Contact.email + ":org", JSON.stringify(Organisation), 1);

    //Redirect to organisation page
    window.location = '/#/profile-org'
}

function loadOrg()
{
    Organisation = getCookie(Contact.email + ":org");
    $("#org").html(Organisation.name);
}


function login()
{
    if ($("#email").val() == "")
    {
        alert("Please enter a username and password");
        return false;
    }

    var usr = getCookie($("#email").val());

    if (usr === undefined)
    {
        alert("Please enter a valid username and password");
        return false;
    }

    var contact = JSON.parse(usr);

    if (contact.password == $("#password"))
    {
        currentUserEmail = $("#email").val();
        window.location = '/#/profile-org';
    }
}

var app = angular.module('konferHealth', ['ngRoute', 'ngMap', 'ngAnimate', 'angular-carousel']);


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
	        .when('/profile-mysugr', {
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
				controller  : 'loginController'
			})
            .when('/logout', {
                templateUrl: 'login.html',
                controller: 'loginController'
            })
			.when('/register', {
				templateUrl : 'register.html',
				controller  : 'loginController'
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
