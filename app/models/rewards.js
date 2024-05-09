import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class RewardsModel extends Model {
  @attr('number') accountNumber;
  @attr('number') rewardPoints;
  @attr('number') energyQuiz;
  @attr('number') energyTraining;
}
