import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AddressComponent extends Component {
  @service account;
  @service customerDetails;

  get customerFullName() {
    const fullName = this.customerDetails.getCustomerFullName();
    console.log('Name:', fullName);
    return fullName;
  }

  get selectedPremise() {
    const location = this.account.getPremise();
    console.log('Location:', location);
    return location;
  }
}
