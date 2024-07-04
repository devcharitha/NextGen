import JSONAPISerializer from '@ember-data/serializer/json';

export default class CustomerSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let customerId = payload.jsonapi.data.attributes.customerId;
    let firstName = payload.jsonapi.data.attributes.firstName;
    let lastName = payload.jsonapi.data.attributes.lastName;
    let phoneNumber = payload.jsonapi.data.attributes.phonenumber;
    let email = payload.data.jsonapi.attributes.email;
    let appliances = payload.jsonapi.data.attributes.list_of_appliances;

    let normalizedAppliances = appliances.map((appliance) => {
      return {
        id: appliance.applianceId,
        manufactureDate: appliance.manufactureDate,
        applianceName: appliance.applianceName,
        category: appliance.category,
        age: appliance.age,
        energyConsumption: appliance.energyConsumption,
      };
    });
    let normalizedPayload = {
      data: {
        id: customerId,
        type: 'customers',
        attributes: {
          customerId,
          firstName,
          lastName,
          phonenumber: phoneNumber,
          email,
          list_of_appliances: normalizedAppliances,
        },
      },
    };

    return normalizedPayload;
  }
}