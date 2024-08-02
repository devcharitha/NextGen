import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ConsumptionDetailsService extends Service {
  @tracked consumptionDetails = [];

  setConsumptionDetails(details) {
    this.consumptionDetails = details;
  }

  getConsumptionDetails() {
    return this.consumptionDetails;
  }

  getLastMonthReading(){
    const today=new Date();
    const lastMonthIndex=today.getMonth()- 1;
    const lastMonth=lastMonthIndex < 0 ? 11 : lastMonthIndex;
    return this.consumptionDetails[lastMonth]?.reading || 'no reading';
  }
}