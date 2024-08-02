import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class CustomerRoute extends Route {
  @service customerDetails;
  @service token;

  async model(params) {
    const customerId = this.token.customerId;
    let data = await this.store.findRecord('customer',customerId);
    console.log('respone:', data);
    return data;
  }
}