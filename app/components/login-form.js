import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { validator, buildValidations} from '@ember-cp-validation';

const Validations = buildValidations({
    email:{
        description: 'Email',
        validators: [
            validator('presence', true),
            validator('format',{
                regex:/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/,
                message:'Invalid format'
            })
        ]
    },
    password:{
        description: 'Password',
        validators: [
            validator('presence', true),
            validator('format',{
                regex:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$/,
                message:'Invalid format'
            })
        ]
    }
});
export default class LoginFormComponent extends Component.extend(Validations){
    @service router;
    @tracked email;
    @tracked password;
    @tracked errorMessage= '';

    @action
    async signIn(){
        if(this.validations.isValid){
            this.router.transitionTo('dashboard');
        }else{
            this.errorMessage = "Can't sign in"

            setTimeout(() =>{
                this.errorMessage='';
            },3000);
        }
    }
}