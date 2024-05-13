import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomerDetailsRoute extends Route {
    @service store;
    //   async model() {
    //     let response = await fetch('https://jo5jyngrni.execute-api.us-east-1.amazonaws.com/test/customers/9012345678');
    //     let data = await response.json();
    //     return data;
    //     // console.log(data);
    //   }
    async model() {
        return await this.store.findAll('customer-details');
        // const response = await fetch(
        //     'https://jo5jyngrni.execute-api.us-east-1.amazonaws.com/test/customers/9012345678'
        //   );
        //   const datas = await response.json();
        //   console.log(datas);
    }
}
