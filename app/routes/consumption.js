import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ConsumptionRoute extends Route {
  @service store;
  // async model() {
  //   let response = await fetch('/api/consumption-details.json');
  //   let data = await response.json();
  //   return data;
  //   // console.log(data);
  // }
  async model(params) {
    let data = await this.store.findRecord('consumption', 1234567890);
    console.log(data);
  }
}
