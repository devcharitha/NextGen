import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ForgotPasswordRoute extends Route {
  @service store;
  async model(params) {
    let data = await this.store.query('forgot-password', {
      email:"stevejobs@example.com"
    });
    console.log(data);
    return data;
  }
}