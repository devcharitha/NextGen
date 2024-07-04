import JSONAPISerializer from '@ember-data/serializer/json';

export default class PremisesSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const premisesType = payload.jsonapi.data.type;
    const accountNumber = payload.jsonapi.data.attributes.accountNumber;
    const premises = payload.data.jsonapi.attributes.premises;

    const normalizedPremises = premises.map((premise) => ({
      premiseId: premise.premiseId,
      premise: premise.premise,
    }));

    const normalizedPayload = {
      data: {
        type: premisesType,
        attributes: {
          accountNumber,
          premises: normalizedPremises,
        },
      },
    };

    return normalizedPayload;
  }
}
