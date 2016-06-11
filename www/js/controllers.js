angular.module('app.controllers', ['app.services'])
  
.controller('programCtrl', function($scope, Program) {
    $scope.program = [];
    $scope.program = null;

    Program.all().then(function(program){
        $scope.program = program;
    });

    /*$scope.select = function(id) {
        //ToDo
    }*/
})

.controller('eventCtrl', function($scope, $stateParams, Program) {
    $scope.event = {};
    $scope.event = null;

    Program.getById($stateParams.id).then(function(event){
        $scope.event = event;
    });
})

.controller('groupsCtrl', function($scope, Group) {
    $scope.groups = [];
    $scope.groups = null;

    Group.all().then(function(groups){
        $scope.groups = groups;
    });
})
   
.controller('barsCtrl', function($scope) {

})