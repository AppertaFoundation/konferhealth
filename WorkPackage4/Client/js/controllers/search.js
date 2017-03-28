
// create the controller and inject Angular's $scope
app.controller('searchController', function($scope, $location, NgMap) {

 $scope.$on('$routeChangeStart', function(next, current) {
   var isLogin = ($location.path().indexOf('login') > -1),
       isRegister = ($location.path().indexOf('register') > -1);
   $scope.showNav = !isLogin && !isRegister;

   $scope.loggedOut = ($location.path().indexOf('login') > -1);
   $scope.loggedIn = !$scope.loggedOut;
 });




  var mainTabs = [{
   name: 'Home',
   active: true
  },{
   name: 'Forms',
   active: false
  },{
    name: 'Profile',
    active: false
   },{
   name: 'Builder',
   active: false
  }];

  var searchTabs = [{
   name: 'All',
   active: true
  },{
   name: 'Products',
   active: false
  }, {
      name: 'Organisations',
      active: false
  }, {
   name: 'Transformations',
   active: false
  },{
   name: 'Collaborators',
   active: false
  },{
   name: 'Events',
   active: false
  },{
   name: 'Articles',
   active: false
  }];

  var views = [{
   name: 'list',
   active: true
  },{
   name: 'map',
   active: false
  },{
   name: 'showcase',
   active: false
  }];

  

  /*
  *   Main Navigation
  */
  $scope.activateNav = function(tab) {
     _.each(mainTabs, function(eachTab) {
       eachTab.active = (eachTab.name == tab);
     });
  }
  $scope.isActive = function(tab) {
     var thisTab = _.find(mainTabs, function(eachTab){ return eachTab.name == tab});
     return thisTab.active;
  }


  /*
  *   Search Functions
  */
  $scope.activateTab = function(e, tab) {
     e.preventDefault();
     _.each(searchTabs, function(eachTab) {
         eachTab.active = (eachTab.name == tab);
         $(".AllCat").hide();
         $("." + tab).show();
     });
  }
  $scope.isFiltered = function(tab) {
     var thisTab = _.find(searchTabs, function(eachTab){ return eachTab.name == tab});
     return thisTab.active;
  }

  $scope.activeFilter = function() {
    var thisFilter = _.find(searchTabs, function(eachTab){ return eachTab.active; });
    return thisFilter.name;
  }

  $scope.getCurrentSearchTerm = function() {
    return $location.search().term;
  }


  /*
  *   Searching from front page
  */
  $scope.searchTerm = {
    term: ''
  };
  var existingTerm = $location.search().term;
  if (existingTerm) {
     $scope.searchTerm.term = existingTerm;
  }
  $scope.submitSearch = function() {
     $location.path("/search/list/").search('term', $scope.searchTerm.term);
  }



   /*
   *   Toggling between views
   */
  $scope.getActiveView = function() {
     var thisview = _.find(views, function(view){ return view.active; });
     return thisview.name;
  }
  $scope.isView = function(view) {
    var thisview = _.find(views, function(v){ return v.name == view; });
    return thisview.active;
  }

  $scope.activateView = function(e, view) {
    e.preventDefault();
   _.each(views, function(v){
       v.active = (v.name == view);
   });

   if ($scope.map) {
     window.setTimeout(function(){
        // google.maps.event.trigger($scope.map, 'resize');

        $scope.map.setCenter(mapCenter);

     },100);

    }

  }


  var mapCenter = { lat: 48.2037844, lng: 16.3405524 };
  /*
  *  Map Views
  */
  function makeMarker(lat, lng, map, num) {
    var marker = new google.maps.Marker({
      position: {lat:lat, lng:lng},
      map: map,
      icon:'images/map-pin.png'
    });

    marker.addListener('click', function () {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
        $(".MapResult").hide();
        $(".Map" + num).removeClass("hidden");
        $(".Map" + num).show();
    });
    
    return marker;

  }
  NgMap.getMap().then(function(map) {

     $scope.map = map;
     
      var marker = makeMarker(48.2037844, 16.3405524, map, 1),
         marker2 = makeMarker(51.5285582, -0.2416798, map, 3),
         marker3 = makeMarker(51.4528236, -0.908244, map, 4),
         marker4 = makeMarker(51.5289299, -0.8950106, map, 5),
         marker5 = makeMarker(52.40432, 13.0566413, map, 6),
         marker6 = makeMarker(51.4998818, -0.0810944, map, 7),
         marker6 = makeMarker(55.9445158, -3.19143, map, 9);

      //map.setCenter(mapCenter);

     var styledMapType = new google.maps.StyledMapType(
     [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a0d6d1"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
         {name: 'Styled Map'});
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');

   });

});


//
