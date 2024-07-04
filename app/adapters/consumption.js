import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ConsumptionAdapter extends JSONAPIAdapter {
  host = 'https://0t71wagdzi.execute-api.us-west-2.amazonaws.com';
  namespace = 'epic/customers';
  pathForType(type) {
    return type;
  }
}
