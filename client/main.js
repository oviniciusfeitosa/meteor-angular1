import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('socially', [
  angularMeteor
])
// Step 2 - Dynamics Templates
.controller('PartiesListCtrl', function($scope) {
	'ngInject';

	$scope.helpers({
      parties() {
        return Parties.find({});
      }
    });
    
})
// teste Vinícius -  Sem utilizar injeção de dependência
.controller('ControllerVinicius', ["$scope", function ($scope) {
	$scope.codeLanguagesList = [
    	{
    		"type" : "PHP",
    		"difficult" : "Medium"
    	},
    	{
    		"type" : "Java",
    		"difficult" : "Hard"
    	}
    ];
}]);