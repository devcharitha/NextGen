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

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    @action
    async signIn(event) {
        event.preventDefault();

        console.log(this.email);
        console.log(this.password);

        if (!this.email || !this.validateEmail(this.email)) {
            this.emailError = 'Invalid email format';
            setTimeout(() => {
                this.emailError = '';
            }, 3000);
            return;
        }

        if (!this.password || this.password.length < 6) {
            this.passwordError = 'Invalid password';
            setTimeout(() => {
                this.passwordError = '';
            }, 3000);
            return;
        }

        this.router.transitionTo('dashboard');
    }
}
