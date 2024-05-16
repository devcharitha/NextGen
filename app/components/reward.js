import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RewardComponent extends Component {
    @tracked rewardPoints = '10$';
    @tracked quizPoints = '546';
    @tracked trainingPoints = '456';

}
