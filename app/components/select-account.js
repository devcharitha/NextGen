import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class SelectAccountComponent extends Component {
  accounts = ['9443736460', '9486407589'];
  premises = [
    'North london , NLD-CYG',
    'Anfield , YNWA-LVR',
    'Manchester , CIT-ZEN',
    'Villa Park , AST-VLA',
  ];
  @tracked selectedAccount = null;
  @tracked selectedPremise = null;

  @computed('selectedAccount')
  get isPremisesDisabled() {
    return !this.selectedAccount;
  }

  @computed('selectedAccount','selectedPremise')
  get isSubmitDisabled(){
    return !(this.selectedAccount && this.selectedPremise)
  }

  @action
  selectAccount(event) {
    this.selectedAccount = event.target.value;
    this.selectedPremise = null;
  }

  @action
  selectPremise(event) {
    this.selectedPremise = event.target.value;
  }

}
