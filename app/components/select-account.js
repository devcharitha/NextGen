import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SelectAccountComponent extends Component {
  @service token;
  @service router;
  @service customerDetails;
  @service account;
  @service store;

  @tracked selectedAccount = null;
  @tracked selectedPremise = null;

  @tracked premises = [];
  @tracked premiseId = '';

  @computed('decoded.accountNumber')
  get accounts() {
    const accountNumbers = this.token.getAccountNumber();
    console.log('accounts:', accountNumbers);
    return accountNumbers;
  }

  @computed('selectedAccount')
  get isPremisesDisabled() {
    return !this.selectedAccount;
  }

  @computed('selectedAccount', 'selectedPremise')
  get isSubmitDisabled() {
    return !(this.selectedAccount && this.selectedPremise);
  }

  @action
  async selectAccount(event) {
    this.selectedAccount = event.target.value;
    this.selectedPremise = null;
    this.account.setAccount(this.selectedAccount);
    await this.getPremises();
  }

  @action
  selectPremise(event) {
    this.selectedPremise = event.target.value;
    this.account.setPremise(this.selectedPremise);
  }

  @action
  async navigateToDashboard(event) {
    event.preventDefault();
    await this.getCustomerDetails();
    await this.getRewards();
    await this.getComsumptionDetails();
    this.router.transitionTo('dashboard');
  }

  async getPremises() {

    try {
      const response = await this.store.queryRecord('premises', { accountNumber: this.selectedAccount });
      if (!response) {
        throw new Error('Response is not ok');
      }
      this.premises = response.premises.map((premise) => premise.premise) || [];
      console.log(this.premises)
      this.premiseId = response.premises[0]?.premiseId;
      console.log('Premise response:', response);
    } catch (error) {
      console.log('Error:', error);
    }

  }

  async getCustomerDetails() {
    try {
      const response = await this.store.findRecord('customers', this.token.customerId)
      if (!response) {
        throw new Error('response is not ok', response);
      }
      this.customerDetails.setCustomerDetails(response);
      console.log('customer response:', response);
    }
    catch (error) {
      console.log('error', error);
    }
  }
  async getRewards() {
    try {
      let response = await this.store.queryRecord('rewards', { customerId: this.token.customerId })

      if (!response) {
        throw new Error('response is not ok', response);
      }
      console.log('rewards response:', response);
    }
    catch (error) {
      console.log('error', error);
    }
  }
  async getComsumptionDetails() {
    try {
      let response = await this.store.queryRecord('consumption', { premiseId: this.premiseId })

      if (!response) {
        throw new Error('response is not ok', response);
      }
      console.log(' consumption response:', response);
    }
    catch (error) {
      console.log('error', error);
    }
  }
}
