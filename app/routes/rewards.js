import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RewardsRoute extends Route {
  @service store;
  @service token;

  async model() {

    const customerId =this.token.customerId;
    let data = await this.store.query('rewards', {customerId});
    console.log('respone:', data);
    return data;
  }
}
