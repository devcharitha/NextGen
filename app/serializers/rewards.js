import JSONAPISerializer from '@ember-data/serializer/json';

export default class RewardsSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('original payload', payload);

    const activities = payload.jsonapi.data.activities;

    const customerId = payload.jsonapi.data.customerId;
    
 


    const Adata = activities.map((activity) => {
      return {
        activityCompletionDate: activity.activityCompletionDate,
        activityName: activity.activityName,
        activityStartDate: activity.activityStartDate,
        pointsEarned: activity.pointsEarned,
        rewardsEarned: activity.rewardsEarned,
      };
    });
    const normalizedPayload = {
      data: {
        id: '123',
        type: 'rewards',
        attributes: {
          customerId: customerId,
          activities: Adata,
        },
      },
    };
    console.log('normalized payload', normalizedPayload);
    return normalizedPayload;
  }
}
