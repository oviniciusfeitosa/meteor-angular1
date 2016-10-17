import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partyRemove.html';
import { Parties } from '../../../api/parties/index';

class PartyRemove {
	remove() {
		if(this.party) {
			console.log(this.party);
			Parties.remove(this.party._id);
		}
	}
}

const name = 'partyRemove';

//create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	binding: {
		party: '<'
	},
	controllerAs: name,
	controller: PartyRemove
});