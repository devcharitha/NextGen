import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AppliancesComponent extends Component {
  @service customerDetails;

  get appliances() {
    const appliances = this.customerDetails.getAppliances();
    console.log('appliances:', appliances);
    return appliances;
  }
}
