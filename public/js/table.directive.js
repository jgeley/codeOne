//angular.module('app').directive('tableDirective', function ($stateParams,$compile) {
//    return {
//        restrict: 'EA',
//        scope: {
//        categories:"=",
//            graphData:"=",
//            colors:"=", 
//            items:"=", 
//            items2:"=",
//            average:"="
//      },
//       link: function(scope, element, attrs){
//         $( "#budgetTable" ).empty();
//            var div = document.getElementById('budgetTable');
//        scope.innerHTML="";
//            scope.innerHTML += "<tr> <th>Item</th> <th>What are you willing to spend?</th> <th>Average</th> </tr>";
//            for(var i = 0; i < scope.items2.length; i++){
//            scope.innerHTML += " <tr ><td>" + scope.items2[i].text + "</td><td><label>$<input type='text' ng-model='budget[" +
//             scope.items2[i].value + "]'> </label></td><td><dgraph categories='categories' dollars='graphData[" + i+ "]' colors='colors' barid='item"
//                 + scope.items2[i].value + "g' id='item" + scope.items2[i].value +"g'></dgraph></td></tr>";   
//            }
//            element.append(angular.element(scope.innerHTML));
//           $compile(div)(scope);
//            $compile(div);
//    }
//
//    };
//   
//
//});