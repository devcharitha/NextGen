import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @service router;
  @service token;
  @service store;
  @tracked emailError;
  @tracked passwordError;
  @tracked email;
  @tracked password;
  @tracked errorMessage;

  validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return passwordPattern.test(password);
  }

  @action
  async signIn(event) {
    event.preventDefault();

    this.errorMessage = '';

    if (!this.email && !this.password) {
      this.errorMessage = 'Enter the email and password';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    } else if (!this.email) {
      this.emailError = 'Enter the email ';
      setTimeout(() => {
        this.emailError = '';
      }, 3000);
    } else if (!this.validateEmail(this.email)) {
      this.emailError = 'Invalid email format';
      setTimeout(() => {
        this.emailError = '';
      }, 3000);
    } else if (!this.password) {
      this.passwordError = 'Enter the password';
      setTimeout(() => {
        this.passwordError = '';
      }, 3000);
    } else if (!this.validatePassword(this.password)) {
      this.passwordError = 'Invalid password format';
      setTimeout(() => {
        this.passwordError = '';
      }, 3000);
    } else {
      this.authenticateUser(this.email, this.password);
    }
  }
  async authenticateUser(email, password) {
    try {
      let response = this.store.createRecord('authorization', {
        email: this.email,
        password: this.password
      });
      const tokenResponse = await response.save();
      console.log("tokenResponse", tokenResponse);

      const tokenParts = tokenResponse.access_token.split('.');
      const decodedToken = JSON.parse(atob(tokenParts[1]));
      console.log('Decoded token:', decodedToken);

      this.token.setToken(tokenResponse.access_token, decodedToken);
      this.router.transitionTo('accounts');
    } catch (error) {
      console.log('error', error);

      if (error.errors && error.errors[0] && error.errors[0].detail) {
        const errorMessage = JSON.parse(error.errors[0].detail).error.message;
        if (errorMessage === 'Unauthorized') {
          this.errorMessage = 'Invalid credentials';
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
          return;
        }
      }
    }
  }

}
