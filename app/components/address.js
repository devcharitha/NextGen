import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AddressComponent extends Component {
  @tracked name = 'Mr. Walter Brown';
  @tracked location = 'Flat29 North-London PO167GZ';
}
