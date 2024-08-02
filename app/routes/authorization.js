import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthorizationRoute extends Route {
  @service store;

  async model() {
    // const api =
    //   'https://0t71wagdzi.execute-api.us-west-2.amazonaws.com/epic/authorization';
    // try {
    //   const response = await fetch(api, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: 'stevejobs@gmail.com',
    //       password: 'Jonhatson5ee',
    //     }),
    //   });
    //   console.log(response);
    //   if (!response.ok) {
    //     throw new Error('response is not ok', response);
    //   }
    //   const data = await response.json();
    //   console.log('success', data);
    // } catch (error) {
    //   console.log('error', error);
    // }
  }
}
