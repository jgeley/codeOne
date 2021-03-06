angular.module('app').controller('ModalDemoCtrl', function ($scope, $modal, $log, $timeout, $http) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.answerQuestion = function (num) {

        if ($scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct != num) {
            console.log($scope.questions);
            // alert($scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct + " != " + num);
            var modalInstance = $modal.open({

                animation: $scope.animationsEnabled,
                templateUrl: 'gameOverModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm',
                resolve: {
                    items: function () {

                        return $scope.items;
                    }
                }
            });
            modalInstance.opened.then(function () {
                $timeout(function () {
                    console.log($scope.questions[document.getElementById('levelDiv').innerHTML - 1]);
                    var mylabels = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].content;
                    var right = Math.floor((Math.random() * 30) + 42);
                    var mydata = [0, 0, 0, 0];
                    mydata[$scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct] = right;
                    var left = 100 - right;
                    var one = Math.floor((Math.random() * left) + 1);
                    left -= one;
                    var two = Math.floor((Math.random() * left) + 1);
                    left -= two;
                    three = left;
                    var randoms = [one, two, three];
                    var i = 0;
                    while (randoms.length > 0) {
                        if (mydata[i] == 0) {

                            var randomIndex = Math.floor((Math.random() * randoms.length));
                            // alert("i: " + i + " randomIndex: " + randomIndex + "randoms[randomIndex] " + randoms[randomIndex] );
                            mydata[i] = randoms[randomIndex];
                            //console.log(mydata);
                            randoms.splice(randomIndex, 1);
                            //console.log(randoms);
                        }
                        i++;
                    }

                    for (var i = 0; i < mydata.length; i++) {

                    }
                    var data = {
                        labels: mylabels,
                        datasets: [
                            {
                                label: "My First dataset",
                                fillColor: "rgba(220,220,220,0.5)",
                                strokeColor: "rgba(220,220,220,0.8)",
                                highlightFill: "rgba(220,220,220,0.75)",
                                highlightStroke: "rgba(220,220,220,1)",
                                data: mydata
        }
    ]
                    };
                    var ctx = document.getElementById("myChart").getContext("2d");
                    var myBarChart = new Chart(ctx).Bar(data, options);
                })
            });


            modalInstance.result.then(function (selectedItem) {

                $scope.selected = selectedItem;
            }, function () {

                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    };

    $scope.animationsEnabled = true;
    $http.get("/randData")
        .success(function (response) {
            console.log('fiorst');
            console.log(response);
            $scope.questions = response;
        });
    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {

                    return $scope.items;
                }
            }
        });
        modalInstance.opened.then(function () {
            $timeout(function () {
                // console.log($scope.questions[document.getElementById('levelDiv').innerHTML - 1]);
                var mylabels = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].content;
                var right = Math.floor((Math.random() * 30) + 42);
                var mydata = [0, 0, 0, 0];
                mydata[$scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct] = right;
                var left = 100 - right;
                var one = Math.floor((Math.random() * left) + 1);
                left -= one;
                var two = Math.floor((Math.random() * left) + 1);
                left -= two;
                three = left;
                var randoms = [one, two, three];
                var i = 0;
                while (randoms.length > 0) {
                    if (mydata[i] == 0) {

                        var randomIndex = Math.floor((Math.random() * randoms.length));
                        // alert("i: " + i + " randomIndex: " + randomIndex + "randoms[randomIndex] " + randoms[randomIndex] );
                        mydata[i] = randoms[randomIndex];
                        //console.log(mydata);
                        randoms.splice(randomIndex, 1);
                        //console.log(randoms);
                    }
                    i++;
                }

                for (var i = 0; i < mydata.length; i++) {

                }
                var data = {
                    labels: mylabels,
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "rgba(220,220,220,0.5)",
                            strokeColor: "rgba(220,220,220,0.8)",
                            highlightFill: "rgba(220,220,220,0.75)",
                            highlightStroke: "rgba(220,220,220,1)",
                            data: mydata
        }
    ]
                };
                var ctx = document.getElementById("myChart").getContext("2d");
                var myBarChart = new Chart(ctx).Bar(data, options);
            })
        });


        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {

            $log.info('Modal dismissed at: ' + new Date());
        });

    };

    $scope.openPhone = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'phoneAFriend.html',
            controller: 'ModalInstanceCtrl',
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

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, $http, $stateParams, $state) {
//    $scope.solution = solution;
//    $scope.displayStuff = displayStuff;
    $http.get("/tmpData")
        .success(function (response) {
            console.log("Second");
            $scope.questions = response;
            var doc = document.getElementById('levelDiv');
            if (typeof doc != 'undefined' && doc != null) {
                $scope.rightAnswer = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].content[$scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct];
                $scope.hint = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].tip;
                $scope.category = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].category;
                console.log('category ');
                // console.log($scope.questions[document.getElementById('levelDiv').innerHTML - 1].id);
                $scope.id = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].id;
            }
            //$scope.hint = "hint goes here";
        });
    $scope.goToAnswer = function () {
        $modalInstance.close();
        $stateParams.category = $scope.category;
        $stateParams.id = $scope.id;
        alert($scope.id);
        $state.go('study', {
            category: $scope.category,
            id: $scope.id
        });
    };

    $scope.ok2 = function () {
        $modalInstance.close();

    };
    $scope.ok = function () {
        $modalInstance.close();
        location.reload();
    };


});