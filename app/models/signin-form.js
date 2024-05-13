import Model, { attr } from '@ember-data/model';

export default class SigninFormModel extends Model {
  @attr('string') emailId;
  @attr('string') password;
}
