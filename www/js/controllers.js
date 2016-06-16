angular.module('app.controllers', ['app.services'])

.controller('programCtrl', function($scope, $ionicSideMenuDelegate, Program) {
    ionic.Platform.ready(function() {
        $ionicSideMenuDelegate.toggleLeft();
    });

    $scope.program = [];
    $scope.program = null;

    Program.all().then(function(program){
        $scope.program = program;
    });
})

.controller('eventCtrl', function($scope, $stateParams, Program, NgMap, Marker) {
    $scope.event = {};
    $scope.event = null;

    Program.getById($stateParams.id).then(function(event){
        $scope.event = event;

        NgMap.getMap().then(function(map) {
            var lat = event.lat;
            var lng = event.lng;
            var latlng = new google.maps.LatLng(lat, lng);
            Marker.marker.setPosition(latlng);
            Marker.marker.setMap(map);
        });
    });
})

.controller('groupsCtrl', function($scope, Group) {
    $scope.groups = [];
    $scope.groups = null;
    $scope.propertyName = 'id';
    $scope.reverse = false;
    $scope.orderMenu = true;

    Group.all().then(function(groups){
        $scope.groups = groups;
    });

    $scope.displayMenu = function() {
        $scope.orderMenu = !$scope.orderMenu;
    };

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.orderMenu = true;
    };
})

.controller('barsCtrl', function($scope, Bar) {
    $scope.bars = [];
    $scope.bars = null;

    Bar.all().then(function(bars){
        $scope.bars = bars;
    });

    $scope.displayMenu = function() {
        $scope.orderMenu = !$scope.orderMenu;
    };

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.orderMenu = true;
    };
})

.controller('barCtrl', function($scope, $stateParams, Bar, NgMap, Marker) {
    $scope.bar = {};
    $scope.bar = null;

    Bar.getById($stateParams.id).then(function(bar){
        $scope.bar = bar;

        NgMap.getMap().then(function(map) {
            var lat = bar.lat;
            var lng = bar.lng;
            var latlng = new google.maps.LatLng(lat, lng);
            Marker.marker.setPosition(latlng);
            Marker.marker.setMap(map);
        });
    });
})

.controller('rulesCtrl', function($scope) {
    //https://github.com/sayanee/angularjs-pdf
    $scope.pdfUrl = 'static/pdf/normas.pdf';
    $scope.loading = 'Cargando...';

    $scope.onLoad = function() {
        $scope.loading = '';
    };
});
