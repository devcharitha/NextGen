import JSONAPIAdapter from '@ember-data/adapter/json-api';
export default class CustomersAdapter extends JSONAPIAdapter {
  host = 'https://367t94zni7.execute-api.us-east-1.amazonaws.com';
  // https://367t94zni7.execute-api.us-east-1.amazonaws.com/dev/customers/customerDetails/3600101
  namespace='dev/customers';
  // urlForFindRecord(id){
  //     return `${this.host}/customers/customerDetails/${id}`;
  // }
  pathForType(type) {
    return type;
  }
}
