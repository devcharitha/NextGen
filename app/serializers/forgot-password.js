import JSONAPISerializer from '@ember-data/serializer/json';

export default class ForgotPasswordSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('original payload', payload);
    let email = payload.jsonapi.data.attributes.email;
    let normalizedPayload = {
      data: {
        email: email,
      },
    };
    console.log('normalized payload', normalizedPayload);
    return normalizedPayload;
  }
}
