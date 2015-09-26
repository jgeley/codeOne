angular.module('app').directive('accordionDirective', function ($stateParams) {
    return {
        restrict: 'EA',
        templateUrl: 'views/accordionTemplate.html',
        scope: { // Bind the ngModel to the object given
            item: '=', // Pass a reference to the method 
            // Store the string associated by fromName
        },
       link: function(scope, element, attrs){
           if($stateParams.id == scope.item.id){
               scope.isopen = true; 
           }
      //alert(scope.item.correct)
    }

    };
   

});