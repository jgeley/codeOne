angular.module('app').controller('survavialInstanceCtrl', function ($scope, $modalInstance, solution,displayStuff, $http, $stateParams, $state) {
    $scope.solution = solution;
    $scope.displayStuff = displayStuff;



    $scope.ok2 = function () {
        $modalInstance.close();

    };
    $scope.ok = function () {
        $modalInstance.close();
        location.reload();
    };


});