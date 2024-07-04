import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ReadingsComponent extends Component {
  @tracked energyConsumption = 890;
}
