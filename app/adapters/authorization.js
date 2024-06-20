import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class AuthorizationAdapter extends JSONAPIAdapter {
  host = 'https://0t71wagdzi.execute-api.us-west-2.amazonaws.com';
  namespace = 'epic';
  pathForType(type) {
    console.log("type");
    return type;
  }
}