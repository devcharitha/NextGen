import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CustomersRoute extends Route {
  @service store;
  //   async model() {
  //     let response = await fetch('https://jo5jyngrni.execute-api.us-east-1.amazonaws.com/test/customers/9012345678');
  //     let data = await response.json();
  //     return data;
  //     // console.log(data);
  //   }
  async model(params) {
    // console.log(store );
    const data = await this.store.findRecord('customers', params.id);
    return data;
  }
}
