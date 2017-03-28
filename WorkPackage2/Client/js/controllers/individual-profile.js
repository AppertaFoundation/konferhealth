app.controller('profileIndividualController', function($scope) {

 $scope.getProfileData = function() {
    return {
      user : 'Jas Singh',
      summary : 'CTO',
      avatar: 'images/anon-user.jpg'
    }
 }

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

});
