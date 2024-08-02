import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class RewardComponent extends Component {
 @service activities;

get items() {
  const activities = this.activities.getActivities();
  console.log("Items:", activities);
  return activities;
}

 get totalPoints() {
   return this.items.reduce((acc, item) => acc + parseInt(item.pointsEarned), 0);
 }

 get totalRewards() {
   return this.items.reduce((acc, item) => acc + parseInt(item.rewardsEarned), 0);
 }
}
