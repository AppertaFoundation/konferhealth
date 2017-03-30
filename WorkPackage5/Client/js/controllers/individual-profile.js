app.controller('profileIndividualController', function($scope, $location) {

 $scope.getProfileData = function() {
    return {
      user : 'Jas Singh',
      summary : 'CTO',
      avatar: 'images/anon-user.jpg'
    }
 }

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

 var tabs = [{
  name: 'Collaborations',
  active: false
 },{
  name: 'Messages',
  active: false
 },{
  name: 'Events',
  active: false
 }, {
     name: 'About',
     active: true
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

 $scope.messages = [{
      sender: 'David Downs',
      memberSince: '14th July 2016',
      message: 'I have a proposal....',
      received: '18/3/2017 @ 13:00',
      isNew: true
   },{
      sender: 'Jonathon Carr-Brown',
      memberSince: '12th June 2016',
      message: 'Rundown of our last meeting',
      received: '12/3/2017 @ 11:34',
      isNew: true
   },{
      sender: 'Andrew Thomas',
      memberSince: '10th Sept 2016',
      message: 'Are you available this week?',
      received: '12/3/2017 @ 16:12',
      isNew: false
   },{
      sender: 'Jenny Smith',
      memberSince: '14th July 2016',
      message: 'Hi, I am interested in following up our meeting',
      received: '12/2/2017 @ 09:14',
      isNew: false
   },{
      sender: 'Tom Doe',
      memberSince: '14th July 2016',
      message: 'I have a proposal you may be interested in',
      received: '18/3/2017 @ 13:00',
      isNew: false
   },{
      sender: 'Angela Johnson',
      memberSince: '12th June 2016',
      message: 'Looking for advice',
      received: '12/3/2017 @ 11:34',
      isNew: false
  }];

 $scope.launchProfileModal = function (e, show) {
     e.preventDefault();
     $scope.showProfileModal = show;
 }

 $scope.saveProfile = function () {

     var eml = window.localStorage.getItem("CurrentUser");
     window.localStorage.setItem(eml, JSON.stringify($scope.Contact));

     $scope.showProfileModal = false;
 }

 $scope.$on('$routeChangeSuccess', function (next, current) {

     
     if ($location.path().indexOf('profile-user') > -1) {

         //Load details of the org from storage
         var eml = window.localStorage.getItem("CurrentUser");
         var cntc = window.localStorage.getItem(eml);

         if (cntc != null) {
             $scope.Contact = JSON.parse(cntc);
         }
     }
 });
});
