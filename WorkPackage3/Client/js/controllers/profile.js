
app.controller('profileController', function ($scope, $location) {
    var idCounter = 1;

    $scope.Organisation = {
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
        phone: '',
        id: ''
    };

    $scope.Contact = {
        name: '',
        organisation: '',
        title: '',
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


    $scope.Product = {
        name: '',
        description: '',
        website: '',
        ahsn: '',
        ccg: '',
        digitaltag: '',
        problem: '',
        medicaltag: '',
        logo: '',
        video: '',
        objectives: '',
        type: '',
        id: '',
        orgid: ''
    };

    $scope.CollaborationRequest = {
        type: '',
        title: '',
        description: '',
        problem: '',
        aim: '',
        benefit: '',
        value: ''
    };

    var tabs = [{
      name: 'About',
      active: true
    },{
     name: 'Messages',
     active: false
    },{
     name: 'Events',
     active: false
    },{
     name: 'Case Studies',
     active: false
    }, {
        name: 'Contacts',
        active: false
    }, {
        name: 'Products',
        active: false
    }, {
        name: 'Organisations',
        active: false
    }, {
        name: 'Contracts',
        active: false
    }];
    $scope.activateTab = function(e, tab) {
       e.preventDefault();
       _.each(tabs, function(eachTab) {
         eachTab.active = (eachTab.name == tab);
       });
    }
    $scope.isActive = function(tab) {
       var thisTab = _.find(tabs, function(eachTab){ return eachTab.name == tab});
       return thisTab.active;
    }

    $scope.getProfileData = function() {
       return {
         user : 'Medelinked',
         summary : 'Personal Health Record',
         avatar: 'images/medelinked-logo.jpg'
       }
    }

    $scope.getProfileDataApp = function () {
        return {
            user: 'Medelinked - Personal Health Account',
            summary: 'Personal Health Record',
            avatar: 'images/medelinked-logo.jpg'
        }
    }

    $scope.getProfileDataMySugr = function () {
        return {
            user: 'MySugr',
            summary: 'Diabetes Management',
            avatar: 'images/mysugr-logo.png'
        }
    }

    $scope.getProfileDataMySugrApp = function () {
        return {
            user: 'MySugr App',
            summary: 'Diabetes Management',
            avatar: 'images/mysugr-logo-main.png'
        }
    }

    $scope.getProfileDataLocumsNest = function () {
        return {
            user: 'Locums Nest',
            summary: 'Recruitment & Human Resources',
            avatar: 'images/locums-nest.png'
        }
    }

    $scope.launchModal = function(e, show) {
         e.preventDefault();
         $scope.showModal = show;

    }

    $scope.launchMsgModal = function (e, show) {
        e.preventDefault();
        $scope.showMsgModal = show;

    }

    $scope.launchProfileModal = function (e, show) {
        e.preventDefault();
        $scope.showProfileModal = show;
    }

    
    $scope.register = function () {

        if ($("#email").val() == "" || $("#password").val() == "") {
            alert("Please enter an email address and password");
            return false;
        }

        if ($("#confirmPassword").val() != $("#password").val()) {
            alert("Please ensure the passwords match");
            return false;
        }

        $scope.Contact.email = $("#email").val();
        $scope.Contact.name = $("#name").val();
        $scope.Contact.organisation = $("#org").val();
        $scope.Contact.password = $("#password").val();

        //try
        //{
        //    $.ajax({
        //        type: 'POST',
        //        url: '/konferhealthserver/account/register',
        //        data: { json: JSON.stringify(Contact) },
        //        dataType: 'json'
        //    });
        //}
        //catch (ex)
        //{

        //}    

        $scope.Organisation.name = $scope.Contact.organisation;
        window.localStorage.setItem("CurrentUser", $scope.Contact.email);
        window.localStorage.setItem($scope.Contact.email, JSON.stringify(Contact));
        window.localStorage.setItem($scope.Contact.email + ":org", JSON.stringify($scope.Organisation));

        $location.path("/profile-org");
    }

    $scope.login = function () {
        
        if ($("#email").val() == "") {
            alert("Please enter a username and password");
            return false;
        }

        var usr = window.localStorage.getItem($("#email").val());

        if (usr === undefined) {
            alert("Please enter a valid username and password");
            return false;
        }

        var allow = true;

        //try
        //{
        //    $.ajax({
        //        type: 'POST',
        //        url: '/konferhealthserver/account/login',
        //        data: { json: JSON.stringify(Contact) },
        //        dataType: 'json',
        //        success: function (data) {

        //            if (data === undefined) {
        //                allow = false;
        //            }
        //        }
        //    });

        //}
        //catch (ex) {
        //}

        if (allow) {

        }

        //Now simulate locally
        $scope.Contact = JSON.parse(usr);

        if ($scope.Contact.password == $("#password").val()) {
            window.localStorage.setItem("CurrentUser", $scope.Contact.email);
            $location.path("/profile-org");
        }
        else
        {
            alert("Please enter a valid username and password");
        }

    }

    $scope.addProduct = function()
    {
        var eml = window.localStorage.getItem("CurrentUser");
        window.localStorage.setItem(eml + ":org:prod", JSON.stringify($scope.Product));
    }

    $scope.saveProfile = function () {

        var eml = window.localStorage.getItem("CurrentUser");
        window.localStorage.setItem(eml + ":org", JSON.stringify($scope.Organisation));

        $scope.showProfileModal = false;

        //$.ajax({
        //    type: 'PUT',
        //    url: '/konferhealthserver/products/' + Organisation.id,
        //    data: { value: Organisation },
        //    dataType: 'json',
        //    success: function (data) {

        //    }
        //});

    }

    $scope.$on('$routeChangeSuccess', function (next, current) {

        if ($location.path().indexOf('profile-org') > -1)
        {
            //Load details of the org from storage
            var eml = window.localStorage.getItem("CurrentUser");
            var org = window.localStorage.getItem(eml + ":org");
            $scope.Organisation = JSON.parse(org);
            
            var prod = window.localStorage.getItem(eml + ":org:prod");

            if (prod != null)
            {
                $scope.Product = JSON.parse(prod);
            }
            
        }
        
        if ($location.path().indexOf('profile-user') > -1) {
            //Load details of the org from storage
            var eml = window.localStorage.getItem("CurrentUser");
            var cntc = window.localStorage.getItem(eml);

            if (cntc != null)
            {
                $scope.Contact = JSON.parse(cntc);
            }
        }
    });
});
