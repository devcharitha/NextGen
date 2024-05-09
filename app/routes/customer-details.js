import Route from '@ember/routing/route';

export default class CustomerDetailsRoute extends Route {
  async model() {
    let response = await fetch('/api/customer-details.json');
    let data = await response.json();
    return data;
  }
}
