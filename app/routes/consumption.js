import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class ConsumptionRoute extends Route {
  @service store;
  @service token;
  
  async model(params) {
    let data = await this.store.query('consumption', { premiseId });
    console.log('respone:', data);
    return data;
  }
}
