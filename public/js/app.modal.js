angular.module('app').controller('ModalDemoCtrl', function ($scope, $modal, $log, $timeout, $http) {

            $scope.items = ['item1', 'item2', 'item3'];

            $scope.answerQuestion = function (num) {
                if ($scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct != num) {
                    
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
                $http.get("questions.json")
                    .success(function (response) {
                        console.log(response.games[0].questions);
                        $scope.questions = response.games[0].questions;
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

        angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, $http) {
            $http.get("questions.json")
                .success(function (response) {
                    console.log(response.games[0].questions);
                    $scope.questions = response.games[0].questions;
                    $scope.rightAnswer = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].content[$scope.questions[document.getElementById('levelDiv').innerHTML - 1].correct];
                    // $scope.hint = $scope.questions[document.getElementById('levelDiv').innerHTML - 1].hint;
                    $scope.hint = "hint goes here";
                });

            $scope.ok = function () {
                $modalInstance.close();
            };


        });