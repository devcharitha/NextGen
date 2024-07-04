import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RewardsRoute extends Route {
  @service store;

  async model(params) {
    let data = await this.store.query('rewards', { customerId: this.token.customerId });
    console.log('response:', data);
    return data;
  }
}
