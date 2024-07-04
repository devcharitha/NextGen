import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class AuthorizationModel extends Model {
  @attr('string') email;
  @attr('array') accountNumber;
  @attr('string') customerId;
  @attr('string') password;
}
