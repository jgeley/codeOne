    angular
        .module('app')
        .controller('startController', startController);

    startController.$inject = ['$scope', '$location', '$state','$rootScope'];

    function startController($scope, $location,$state,$rootScope) {
        
        
        $scope.score = 0;
        $scope.everything = $rootScope.output;
    
    };