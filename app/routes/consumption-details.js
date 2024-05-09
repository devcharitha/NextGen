import Route from '@ember/routing/route';

export default class ConsumptionDetailsRoute extends Route {
  async model() {
    let response = await fetch('/api/consumption-details.json');
    let data = await response.json();
    return data;
  }
}
