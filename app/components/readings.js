import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ReadingsComponent extends Component {
  @service consumptionDetails;
  get lastMonthReading() {
    const Details= this.consumptionDetails.getLastMonthReading();
    console.log("readings:", Details);
    return Details;
  }
}
