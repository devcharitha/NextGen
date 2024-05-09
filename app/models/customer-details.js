import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class CustomerDetailsModel extends Model {
  @attr('string') emailId;
  @attr('number') accountNumber;
  @attr('string') siteAddress;
  @attr('string') billAmount;
  @attr('array') listOfAppliances;
}
