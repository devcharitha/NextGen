import JSONAPISerializer from '@ember-data/serializer/json';

export default class ConsumptionSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const premiseId = payload.jsonapi.data.premiseId;
    const consumptionDetails = payload.jsonapi.data.consumptionDetails;

    const normalizedConsumption = consumptionDetails.map((detail) => ({
      billAmount: detail.billAmount,
      carbonFootprint: detail.carbonFootprint,
      month: detail.month,
      reading: detail.reading,
    }));

    const normalizedPayload = {
      data: {
        premiseId,
        consumptionDetails: normalizedConsumption,
      },
    };

    return normalizedPayload;
  }
}
