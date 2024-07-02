import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AccountComponent extends Component {
  @service account;

  get selectedAccount() {
    const accountNum = this.account.getAccount();
    console.log('AccountNumber:', accountNum);
    return accountNum;
  }
}
