import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class RewardsModel extends Model {
  @attr('string') customerId;
  @attr('array') activities;
  @attr('string') activityCompletionDate;
  @attr('string') activityName;
  @attr('string') activityStartDate;
  @attr('string') pointsEarned;
  @attr('string') rewardsEarned;
}
