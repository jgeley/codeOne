    angular
        .module('app')
        .controller('startController', startController);

    startController.$inject = ['$scope', '$location', '$state','$rootScope','$state'];

    function startController($scope, $location,$state,$rootScope,$state) {
        
        $scope.start = function(){
            $state.go('stage1');
        }
        $scope.score = 0;
        $scope.everything = $rootScope.output;
    
    };