angular.module('app.controllers', [$scope, $cordovaSQLite])
  
.controller('programCtrl', function($scope) {
    $scope.select = function(id) {
        //ToDo
    }
})
   
.controller('groupsCtrl', function($scope) {
    var query = "SELECT id, name, bar FROM groups";
    $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
        $scope.groups = res.rows;
    }, function (err) {
        console.error(err);
    });
})
   
.controller('barsCtrl', function($scope) {

})