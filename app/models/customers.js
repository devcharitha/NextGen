import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class CustomersModel extends Model {
  @attr('number') Id;
  @attr('string') emailId;
  @attr('number') accountNumber;
  @attr('string') siteAddress;
  @attr('number') billAmount;
  @attr('array') listOfAppliances;
}
