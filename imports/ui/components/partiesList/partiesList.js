import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './partiesList.html';

// Agora está em ES6 - EcmaScript 6 e sendo carregado dinamicamente via LazyLoad
class PartiesList {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
 
    this.helpers({
      parties() {
        return Parties.find({});
      }
    });
  }
}
 
const name = 'partiesList';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: PartiesList
});