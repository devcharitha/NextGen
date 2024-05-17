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
    @tracked errorMessage

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    @action
    async signIn(event) {
        event.preventDefault();

        if (!this.email && !this.password) {
            this.errorMessage = 'Enter the email and password';
            setTimeout(() => {
                this.errorMessage = '';
            }, 3000);
        }
        else if (!this.email) {
            this.emailError = 'Enter an email ';
            setTimeout(() => {
                this.emailError = '';
            }, 3000);
        }
        else if (!this.validateEmail(this.email)){
            this.emailError = 'Invalid email format';
            setTimeout(() => {
                this.emailError = '';
            }, 3000);
        }
        else if (!this.password) {
            this.passwordError = 'Enter the password';
            setTimeout(() => {
                this.passwordError = '';
            }, 3000);
        }
        else if(this.password.length < 6){
            this.passwordError = 'Invalid password';
            setTimeout(() => {
                this.passwordError = '';
            }, 3000);
        }
        else{
        this.router.transitionTo('dashboard');

        }
    }
}
