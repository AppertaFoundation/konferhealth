
app.controller('profileController', function ($scope) {
    var idCounter = 1;

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

    

    var existingTerm = $location.search().term;
    if (existingTerm) {
        $scope.searchTerm.term = existingTerm;
    }
    $scope.submitSearch = function () {
        $location.path("/search/list/").search('term', $scope.searchTerm.term);
    }

});
