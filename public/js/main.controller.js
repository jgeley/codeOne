    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', '$location'];

    function mainController($scope, $location) {
         $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    }