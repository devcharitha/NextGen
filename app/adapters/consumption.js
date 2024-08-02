import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class ConsumptionAdapter extends JSONAPIAdapter {
  @service token;
  host = 'https://0t71wagdzi.execute-api.us-west-2.amazonaws.com';
  namespace = 'epic/customers';
  headers = {
    Authorization: `Bearer ${this.token.access_token}`,
    'Content-Type': 'application/json',
  };
  pathForType(type) {
    return type;
  }
}
