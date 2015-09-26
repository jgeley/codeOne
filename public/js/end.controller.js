    angular
        .module('app')
        .controller('endController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state','$rootScope'];

    function survivorController($scope, $location,$state,$rootScope) {
        
        
        $scope.score = 0;
        $scope.everything = $rootScope.output;
    
    };