import JSONAPISerializer from '@ember-data/serializer/json';

export default class ConsumptionSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log("consumptionsss payload:",payload);
    const premiseId = payload.data.attributes.premiseId;
    const consumptionDetails = payload.data.attributes.consumptionDetails;

    const normalizedConsumption = consumptionDetails.map((detail) => ({
      billAmount: detail.billAmount,
      carbonFootprint: detail.carbonFootprint,
      month: detail.month,
      reading: detail.reading,
    }));

    const normalizedPayload = {
      data: {
        id: '123',
        type: 'consumption',
        attributes:{
          premiseId:premiseId,
          consumptionDetails: normalizedConsumption,
        },
      },
    };

    return normalizedPayload;
  }
}