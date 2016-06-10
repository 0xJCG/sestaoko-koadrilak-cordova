angular.module('app.controllers', ['app.services'])
  
.controller('programCtrl', function($scope/*, $cordovaSQLite*/) {
    /*$scope.select = function(id) {
        //ToDo
    }*/
    $scope.program = {};
})
   
.controller('groupsCtrl', function($scope, Group/*, $cordovaSQLite*/) {
    /*console.log(1);
    db.transaction(function (tx) {
        console.log(2);
        tx.executeSql('SELECT id, name, bar FROM groups', [], function (tx, results) {
            console.log(3);
            $scope.groups = results.rows;
        }, function (t, e) {
            console.log(e);
        });
    });
    console.log(4);
    var query = "SELECT id, name, bar FROM groups";
    $cordovaSQLite.execute(db, query, [name]).then(function(res) {
        $scope.groups = res.rows;
    }, function (err) {
        console.error(err);
    });*/
    $scope.groups = [];
    $scope.groups = null;
    // Get all the documents
    Group.all().then(function(groups){
        $scope.groups = groups;
        console.log(groups);
    });
})
   
.controller('barsCtrl', function($scope) {

})