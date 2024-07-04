import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class ForgotPasswordModel extends Model {
  @attr('string') emailId;
}
