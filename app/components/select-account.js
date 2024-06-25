import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SelectAccountComponent extends Component {

  @service token;
  @service router;
  
  @tracked selectedAccount = null;
  @tracked selectedPremise = null;
  @tracked premises =[];
  
  @computed('decoded.accountNumber')
  get accounts() {
    const accountNumbers = this.token.getAccountNumber();
    console.log("accounts:",accountNumbers);
    return accountNumbers;
    // console.log("accounts:",this.token.getAccountNumber()); 
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
    await this.getPremises();
  }

  @action
  selectPremise(event) {
    this.selectedPremise = event.target.value;
  }

  @action
  async navigateToDashboard(event) {
    event.preventDefault();
    await this.getCustomerDetails();
    await this.getRewards();
    // await this.getComsumptionDetails();
    this.router.transitionTo('dashboard');
  }

  async getPremises() {
    fetch(
      `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/premises?accountNumber=${this.selectedAccount}`,
      {
        headers: {
          Authorization: `Bearer ${this.token.access_token}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((res) => {
        if (!res) {
          throw new Error('response is not ok', res);
        }
        this.premises = res.data.attributes.premises.map(premise => premise.premise) || [];
        console.log('response:', res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  async getRewards() {
    fetch(
      `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/rewards?id=${this.token.customerId}`,
      {
        headers: {
          Authorization: `Bearer ${this.token.access_token}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((res) => {
        if (!res) {
          throw new Error('response is not ok', res);
        }
        console.log('response:', res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  async getCustomerDetails() {
    fetch(
      `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/${this.token.customerId}`,
      {
        headers: {
          Authorization: `Bearer ${this.token.access_token}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((res) => {
        if (!res) {
          throw new Error('response is not ok', res);
        }
        console.log('response:', res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  // async getComsumptionDetails() {
  //   fetch(
  //     `https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/customers/${customerId}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${this.token.token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   )
  //     .then((response) => response.json())
  //     .then((res) => {
  //       if (!res) {
  //         throw new Error('response is not ok', res);
  //       }
  //       console.log('response:', res);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  // }
}
