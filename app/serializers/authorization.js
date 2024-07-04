import JSONAPISerializer from '@ember-data/serializer/json';

export default class AuthorizationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('original payload', payload);

    const access_token = payload.access_token;
    const token_type = payload.token_type;
    const expires_in = payload.expires_in;
    const scope = payload.scope;
    const jti = payload.jti;

    const normalizedPayload = {
      data: {
        id: 'CLIENT_ORIGINATED',
        access_token: access_token,
        token_type: token_type,
        expires_in: expires_in,
        scope: scope,
        jti: jti,
      },
    };
    console.log('normalized payload', normalizedPayload);
    return normalizedPayload;
  }
}
