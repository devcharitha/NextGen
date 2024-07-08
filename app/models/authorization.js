import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class AuthorizationModel extends Model {
  @attr('string') email;
  @attr('string') password;
  @attr('string') access_token;
  @attr('string') token_type;
  @attr('string') expires_in;
  @attr('string') scope;
  @attr('string') jti;
}
