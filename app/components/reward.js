import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RewardComponent extends Component {
    @tracked rewardEarned = '40$';
    @tracked quizPoints = 385;
    @tracked trainingPoints = 574;

}
