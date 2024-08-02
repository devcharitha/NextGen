import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ForgotPasswordComponent extends Component {
    @tracked isEmail = false;
    @action
    showForgotPage() {
        this.isEmail = false;
    }
    @action
    showResetPage() {
        this.isEmail = true;
    }
}