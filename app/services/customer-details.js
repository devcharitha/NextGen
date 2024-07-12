import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CustomerDetailsService extends Service {
  @tracked customerDetails = null;

  setCustomerDetails(details) {
    this.customerDetails = details;
  }

  getCustomerDetails() {
    return this.customerDetails;
  }

  getCustomerFullName() {
    if (this.customerDetails) {
      const firstName = this.customerDetails.firstName;
      const lastName = this.customerDetails.lastName;
      return `Mr. ${firstName} ${lastName}`;
    }
  }

  getAppliances() {
    return (
      (this.customerDetails && this.customerDetails.list_of_appliances) || []
    );
  }
}
