import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RewardComponent extends Component {
    @tracked rewardEarned = '10$';
    @tracked quizPoints = 785;
    @tracked trainingPoints = 674;

}
