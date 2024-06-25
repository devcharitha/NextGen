import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TokenService extends Service {
  @tracked access_token=null;
  @tracked accountNumber=[];
  @tracked customerId=null;

  setToken(token,decodedToken) {
    this.access_token = token;
    this.accountNumber = decodedToken.accountNumber || [];
    this.customerId = decodedToken.customerId || null;
    console.log('set token:',this.access_token);
    console.log('set accNum:',this.accountNumber);
    console.log('set customerId:',this.customerId);

  }

  getToken() {
    return this.access_token;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  getCustomerId() {
    return this.customerId;
  }
}
