import JSONAPISerializer from '@ember-data/serializer/json';

export default class PremisesSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload,id, requestType) {
  payload.data.id = '12345'
  console.log(payload);
  return payload;
  }
}