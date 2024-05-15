import JSONAPIAdapter from '@ember-data/adapter/json-api';
export default class CustomersAdapter extends JSONAPIAdapter {
  host = 'https://367t94zni7.execute-api.us-east-1.amazonaws.com/dev';
  // namespace='dev';
  // urlForFindRecord(id){
  //     return `${this.host}/customers/customerDetails/${id}`;
  // }
}
