import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ConsumptionAdapter extends JSONAPIAdapter {
  host = 'https://41vvatf2fi.execute-api.us-east-1.amazonaws.com';
  namespace = 'test/customers';
  pathForType(type) {
    return type;
  }
}
// https://41vvatf2fi.execute-api.us-east-1.amazonaws.com/test/customers/consumption/1234567890
