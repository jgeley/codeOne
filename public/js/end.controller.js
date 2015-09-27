    angular
        .module('app')
        .controller('endController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state','$rootScope'];

    function survivorController($scope, $location,$state,$rootScope) {
        
        
        $scope.score = $rootScope.score;
        alert($scope.score);
        $scope.everything = $rootScope.output;
    
    };