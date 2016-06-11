angular.module('app.controllers', ['app.services'])
  
.controller('programCtrl', function($scope, Program) {
    $scope.program = [];
    $scope.program = null;

    Program.all().then(function(program){
        $scope.program = program;
    });
})

.controller('eventCtrl', function($scope, $stateParams, Program, NgMap) {
    $scope.event = {};
    $scope.event = null;

    Program.getById($stateParams.id).then(function(event){
        $scope.event = event;

        NgMap.getMap().then(function(map) {
            var marker = new google.maps.Marker({});
            var lat = event.lat;
            var lng = event.lng;
            var latlng = new google.maps.LatLng(lat, lng);
            marker.setPosition(latlng);
            marker.setMap(map);
        });
    });
})

.controller('groupsCtrl', function($scope, Group) {
    $scope.groups = [];
    $scope.groups = null;

    Group.all().then(function(groups){
        $scope.groups = groups;
    });
})
   
.controller('barsCtrl', function($scope, Bar) {
    $scope.bars = [];
    $scope.bars = null;

    Bar.all().then(function(bars){
        $scope.bars = bars;
    });
})

.controller('barCtrl', function($scope, $stateParams, Bar, NgMap) {
    $scope.bar = {};
    $scope.bar = null;

    Bar.getById($stateParams.id).then(function(bar){
        $scope.bar = bar;

        NgMap.getMap().then(function(map) {
            var marker = new google.maps.Marker({});
            var lat = bar.lat;
            var lng = bar.lng;
            var latlng = new google.maps.LatLng(lat, lng);
            marker.setPosition(latlng);
            marker.setMap(map);
        });
    });
})