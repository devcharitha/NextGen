import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class PremisesRoute extends Route {
    @service token;
    @service store

    async model(params) {
        const accountNumber = this.token.accountNumber;
        let data = await this.store.query('premises', { accountNumber });
        console.log('respone:', data);
        return data;
    }
}
