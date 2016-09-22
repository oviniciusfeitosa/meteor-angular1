import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('socially', [
  angularMeteor
])
// Step 2 - Dynamics Templates
.controller('PartiesListCtrl', function($scope) {
	'ngInject';
	$scope.parties = [
	{
      'name': 'Dubstep-Free Zone',
      'description': 'Can we please just for an evening not listen to dubstep.'
    }, 
    {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }
    , 
    {
      'name': 'Savage lounging',
      'description': 'Leisure suit required. And only fiercest manners.'
    }
    ];

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