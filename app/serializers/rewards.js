import  JSONAPISerializer from '@ember-data/serializer/json';

export default class RewardsSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    console.log('original payload',payload);

    let activities=payload.jsonapi.data.activities;

    let customerId = payload.jsonapi.data.customerId;

    let Adata =activities.map((activity,index) =>{
      return{
          activityCompletionDate: activity.activityCompletionDate,
          activityName: activity.activityName,
          activityStartDate: activity.activityStartDate,
          pointsEarned: activity.pointsEarned,
          rewardsEarned: activity.rewardsEarned
      
      };
    });
    let normalizedPayload ={
      data:{
        id: activity.id || `activity-${index}`,
        customerId: customerId,
        activities: Adata
      }
    };
    console.log('normalized payload',normalizedPayload);
    return normalizedPayload;
  }
}