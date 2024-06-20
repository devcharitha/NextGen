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

        // this.router.transitionTo('dashboard');//////////
        this.authenticateUser(this.email, this.password);
        // console.log(this.email,this.password)

        }
    }
    async authenticateUser(email, password){
        const api='https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/authorization';
    try{
        const response= await fetch(api,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        console.log(response)
        if(!response.ok){
            throw new Error('response is not ok', response);
        }
        const data= await response.json();
        console.log("success",data);
    }catch(error){

        console.log("error",error);
    }
    }
}
