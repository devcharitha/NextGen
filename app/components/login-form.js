import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @service router;
  @tracked emailError;
  @tracked passwordError;
  @tracked email;
  @tracked password;
  @tracked errorMessage;


  @action
  async signIn(event) {
    event.preventDefault();

    console.log(this.email);
    console.log(this.password);

    if (!this.email) {
      this.emailError = 'invalid';
      setTimeout(() => {
        this.emailError = '';
      }, 3000);
      return;
    }
    if (!this.password) {
      // console.log("No password");
      this.passwordError = 'invalid password';

      setTimeout(() => {
        this.passwordError = '';
      }, 3000);
      return;
    }
    this.router.transitionTo('dashboard');
  }
}
