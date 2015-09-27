    angular
        .module('app')
        .controller('budgetController', budgetController);

    budgetController.$inject = ['$scope', '$location', '$state', '$rootScope', '$state'];

    function budgetController($scope, $location, $state, $rootScope, $state, $compile) {

        //       var el = document.getElementById('items');
        //var sortable = Sortable.create(el);

        $scope.items = [
           {
                'text': 'utilities',
                'value': 1,
                'graphId': "utilitiesgraph"
        }, {
                'text': 'food',
                'value': 2,
                'graphId': "foodgraph"
        }, {
                'text': 'car',
                'value': 3,
                'graphId': "cargraph"
        }, {
                'text': 'medical',
                'value': 4,
                'graphId': "medicalgraph"
        }, {
                'text': 'personal',
                'value': 5,
                'graphId': "personalgraph"
        }, {
                'text': 'loan',
                'value': 5,
                'graphId': "loangraph"
        }];
        $scope.salary = "0";
        $scope.salaryLeft = $scope.salary;
        $scope.budget = ['0', '0', '0', '0', '0', '0', '0'];
        $scope.average = ['14000', '3500', '9500', '9000', '3000', '2500', '3600'];
        $scope.order = ['housing', 'utilities', 'food', 'car', 'medical','personal', 'loan'];
        $scope.items2 = [
            {
                'text': 'housing',
                'value': 0,
                'graphId': "housinggraph"
        }];
        $scope.foo = ['foo 1', 'foo 2'];
        $scope.bar = ['bar 1', 'bar 2'];

        $scope.colors = ['#0000b4', '#99C19E'];
        $scope.categories = ['You', 'Average'];
        $scope.graphData = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ];
        $scope.myData = [
            {
                name: 'AngularJS',
                count: 300
            },
            {
                name: 'D3.JS',
                count: 150
            },
            {
                name: 'jQuery',
                count: 400
            },
            {
                name: 'Backbone.js',
                count: 300
            },
            {
                name: 'Ember.js',
                count: 100
            }
];
        $scope.barConfig = {
            group: 'foobar',
            animation: 150,
            onSort: function ( /** ngSortEvent */ evt) {
                // @see https://github.com/RubaXa/Sortable/blob/master/ng-sortable.js#L18-L24
            }
        };



        $scope.$watch("budget", function (newValue, oldValue, $compile) {
            $scope.salaryLeft = $scope.salary;

            //            $scope.$compile('sdfasd');
            for (var j = $scope.order.length-1; j > -1; j--) {
                var found = false;
                for (var i = 0; i < $scope.items2.length; i++) {
                    if ($scope.items2[i].text == $scope.order[j]) {
                        found = true;
                    }

                    //                 $scope.graphData = ([[$scope.budget[$scope.items2[i].value],$scope.average[$scope.items2[i].value]]]).concat($scope.graphData);
                    //                $scope.salaryLeft -= $scope.budget[$scope.items2[i].value];
                }
                if (found) {
                    $scope.graphData = ([[$scope.budget[j], $scope.average[j]]]).concat($scope.graphData);
                    $scope.salaryLeft -= $scope.budget[j];
                console.log($scope.order[j]);
                    document.getElementById($scope.order[j]).removeAttribute("hidden");

                } else {
                    document.getElementById($scope.order[j]).setAttribute("hidden","true");
                }

            }


           

        }, true);

        $scope.$watch("items2",  function (newValue, oldValue, $compile) {
            $scope.salaryLeft = $scope.salary;

            //            $scope.$compile('sdfasd');
            for (var j = $scope.order.length-1; j > -1; j--) {
                var found = false;
                for (var i = 0; i < $scope.items2.length; i++) {
                    if ($scope.items2[i].text == $scope.order[j]) {
                        found = true;
                    }

                    //                 $scope.graphData = ([[$scope.budget[$scope.items2[i].value],$scope.average[$scope.items2[i].value]]]).concat($scope.graphData);
                    //                $scope.salaryLeft -= $scope.budget[$scope.items2[i].value];
                }
                if (found) {
                    $scope.graphData = ([[$scope.budget[j], $scope.average[j]]]).concat($scope.graphData);
                    $scope.salaryLeft -= $scope.budget[j];
                console.log($scope.order[j]);
                    document.getElementById($scope.order[j]).removeAttribute("hidden");

                } else {
                    document.getElementById($scope.order[j]).setAttribute("hidden","true");
                }

            }


           

        }, true);

        $scope.$watch("salary", function (newValue, oldValue, $compile) {
            $scope.salaryLeft = $scope.salary;

            //            $scope.$compile('sdfasd');
            for (var j = $scope.order.length-1; j > -1; j--) {
                var found = false;
                for (var i = 0; i < $scope.items2.length; i++) {
                    if ($scope.items2[i].text == $scope.order[j]) {
                        found = true;
                    }

                    //                 $scope.graphData = ([[$scope.budget[$scope.items2[i].value],$scope.average[$scope.items2[i].value]]]).concat($scope.graphData);
                    //                $scope.salaryLeft -= $scope.budget[$scope.items2[i].value];
                }
                if (found) {
                    $scope.graphData = ([[$scope.budget[j], $scope.average[j]]]).concat($scope.graphData);
                    $scope.salaryLeft -= $scope.budget[j];
                console.log($scope.order[j]);
                    document.getElementById($scope.order[j]).removeAttribute("hidden");

                } else {
                    document.getElementById($scope.order[j]).setAttribute("hidden","true");
                }

            }


           

        }, true);

    };