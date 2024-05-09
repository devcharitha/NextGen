import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class RewardsRoute extends Route {
    @service store;

    // async model() {
    //     let response = await fetch('/api/rewards.json');
    //     let data = await response.json();
    //     return data;
    //   }
    async model() {
        return this.store.findRecord('rewards');
    }
}
