import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginController extends Controller {
  @tracked emailId = '';
  @tracked password = '';

  @action
  updateEmailId(event) {
    this.emailId = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  getCredentials() {
    return emailId, password;
  }

  async model() {
    let response = await fetch('');
    let data = await response.json;
  }
}
