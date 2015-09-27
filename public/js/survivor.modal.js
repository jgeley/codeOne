angular.module('app').controller('ModalDemoCtrl', function ($scope, $modal, $log, $timeout, $http) {

    $scope.items = ['item1', 'item2', 'item3'];

 
    $scope.openPhone = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'survivorModal.html',
            controller: 'survivorInstanceCtrl',
            size: size,
            resolve: {
                items: function () {

                    return $scope.items;
                }
            }
        });
        modalInstance.opened.then(function () {
            $timeout(function () {})
        });


        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {

            $log.info('Modal dismissed at: ' + new Date());
        });

    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('app').controller('survivorInstanceCtrl', function ($scope, $modalInstance, items, $http, $stateParams, $state) {

     $scope.ok2 = function () {
 $modalInstance.close();
        
    };
    $scope.ok = function () {
 $modalInstance.close();
        location.reload();
    };


});