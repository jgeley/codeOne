    angular
        .module('app')
        .controller('survivorController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state', '$rootScope'];

    function survivorController($scope, $location, $state, $rootScope) {

        $scope.score = 0;

        if ($state.includes('stage1')) {
            $rootScope.output = [];
            $scope.problem = "This is the problem1";
            $scope.solutions = [["", ""], ["", ""], ["", ""]];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage2')) {
            if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem2";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage3')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem3";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage4')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem4";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage5')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem2";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage6')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem2";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
         if ($state.includes('stage7')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem2";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
         if ($state.includes('stage8')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem2";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
         if ($state.includes('stage9')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "This is the problem2";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Solution12";
            $scope.solutions[0][1] = "why is this bad/good?";
            $scope.solutions[1][0] = "Solution22";
            $scope.solutions[1][1] = "why is this bad/good?";
            $scope.solutions[2][0] = "Solution32";
            $scope.solutions[2][1] = "why is this bad/good?";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }



        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        $scope.$watch('gameOver', function () {

        });
        $scope.answer = function (num) {
            //alert(num);
            if (num == $scope.correctSolution) {
                var nextOut = [$scope.problem, $scope.solutions[num][0], $scope.solutions[num][1]];
                //console.log('adding');
                //console.log(nextOut);
                $rootScope.output.push(nextOut);
            } else {
                //alert($scope.solutions[0][0]);
                var nextOut = [$scope.problem, $scope.solutions[num][0], $scope.solutions[num][1], $scope.solutions[$scope.correctSolution][0], $scope.solutions[$scope.correctSolution][1]];
                 //console.log('adding');
                //console.log(nextOut);
                $rootScope.output.push(nextOut);
            }
            if ($state.includes('stage1')) {
                $state.go('stage2', {}, {
                    reload: false
                });
            }
             if ($state.includes('stage2')) {
                $state.go('stage3', {}, {
                    reload: false
                });
            }
             if ($state.includes('stage3')) {
                $state.go('stage4', {}, {
                    reload: false
                });
            }
             if ($state.includes('stage4')) {
                $state.go('stage5', {}, {
                    reload: true
                });
            }
             if ($state.includes('stage5')) {
                $state.go('stage6', {}, {
                    reload: true
                });
            }
            if ($state.includes('stage6')) {
                $state.go('stage7', {}, {
                    reload: true
                });
            }
            if ($state.includes('stage7')) {
                $state.go('stage8', {}, {
                    reload: true
                });
            }
            if ($state.includes('stage8')) {
                $state.go('stage9', {}, {
                    reload: true
                });
            }
             if ($state.includes('stage9')) {
                $state.go('end', {}, {
                    reload: true
                });
            }
            console.log('here');
            console.log($rootScope.output);
            
        };
    }