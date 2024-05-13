import Route from '@ember/routing/route';

export default class RewardsRoute extends Route {
  async model() {
    let response = await fetch('/api/rewards.json');
    let data = await response.json();
    return data;
    // console.log(data);
  }
}
