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
    // await this.getRewards();
    // await this.getComsumptionDetails();
    this.router.transitionTo('dashboard');
  }

  async getPremises() {
    // fetch(
    //   `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/premises?accountNumber=${this.selectedAccount}`,
    //   {
    //     // headers: {
    //     //   Authorization: `Bearer ${this.token.access_token}`,
    //     //   'Content-Type': 'application/json',
    //     // },
    //   },
    // )

    // const accountNumber = this.token.accountNumber;
    // Assuming this code is part of an async function or an async context

    try {
      const response = await this.store.queryRecord('premises', { accountNumber: this.selectedAccount });
      if (!response) {
        throw new Error('Response is not ok');
      }
      // this.premises = response.data.attributes.premises.map((premise) => premise.premise) || [];
      this.premises = response.premises.map((premise) => premise.premise) || [];
      console.log(this.premises)
      this.premiseId = response.premises[0]?.premiseId;
      console.log('Premise response:', response);
    } catch (error) {
      console.log('Error:', error);
    }

  }

  async getCustomerDetails() {
    // fetch(
    //   `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/${this.token.customerId}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${this.token.access_token}`,
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // )
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
    // fetch(
    //   `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/rewards?customerId=${this.token.customerId}`,
    //   {
    //     // headers: {
    //     //   Authorization: `Bearer ${this.token.access_token}`,
    //     //   'Content-Type': 'application/json',
    //     // },
    //   },
    // )
    try {
      let response = await this.store.query('rewards', { customerId: this.token.customerId })

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
  //   // fetch(
  //   //   `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/consumption?premiseId=${this.premiseId}`,
  //   //   {
  //   //     // headers: {
  //   //     //   Authorization: `Bearer ${this.token.token}`,
  //   //     //   'Content-Type': 'application/json',
  //   //     // },
  //   //   },
  //   // )
    try{
    let response = await this.store.query('consumption', { premiseId: this.premiseId })

        if (!response) {
          throw new Error('response is not ok', response);
        }
        console.log(' consumption response:', response);
      }
      catch(error)  {
        console.log('error', error);
      }
  }
}
