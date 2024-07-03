import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AccountService extends Service {
  @tracked selectedAccount = null;
  @tracked selectedPremise = null;

  setAccount(account) {
    this.selectedAccount = account;
  }

  getAccount() {
    return this.selectedAccount;
  }

  setPremise(premise) {
    this.selectedPremise = premise;
  }

  getPremise() {
    return this.selectedPremise;
  }
}
