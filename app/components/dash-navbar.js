import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DashNavbarComponent extends Component {
  @service router;
  @tracked isDropdownVisible = false;
  
  @action
  dropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @action
  switchButton() {
    this.router.transitionTo('accounts');
  }
  @action
  logoutButton() {
    this.router.transitionTo('login');
  }
}
