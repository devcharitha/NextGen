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
    // const api =
    //   'https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/authorization';
    try {
    //   const response = await fetch(api, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    let response = this.store.createRecord('authorization', {
      email: this.email,
      password: this.password
    });
    response.save();
    // if (!response) {
    //   this.errorMessage = 'Invalid credentials';
    //   setTimeout(() => {
    //     this.errorMessage = '';
    //   }, 3000);
    //   return;
    // }else{
    //   console.log("authorization-response",response)
    // }

    const tokenParts = response.access_token.split('.');
    const decodedToken = JSON.parse(atob(tokenParts[1]));
    console.log('Decoded token:', decodedToken);

    this.token.setToken(response.access_token, decodedToken);
    this.router.transitionTo('accounts');
  } catch (error) {
    console.log('error', error);
    if (error.message.includes('Unauthorized')) {
      this.errorMessage = 'Invalid credentials';
    }
  }
  
}
}
