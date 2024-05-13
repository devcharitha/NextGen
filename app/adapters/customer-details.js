import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class CustomerDetailsAdapter extends JSONAPIAdapter {
    headers = {
      Accept: 'application/json',
    };
    namespace='api';
    host ='https://jo5jyngrni.execute-api.us-east-1.amazonaws.com/test/customers/9012345678';
//     buildURL(...args) {
//     return `${super.buildURL(...args)}.json`;
//   }
}
