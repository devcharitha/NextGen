import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class CustomerDetailsSerializer extends JSONAPISerializer {
    // normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    //     let normalizedDocument = super.normalizeArrayResponse(...arguments);
   
    //     // Customize document meta
    //     normalizedDocument.meta = camelCaseKeys(normalizedDocument.meta);
   
    //     return normalizedDocument;
    //   }
   
    //   extractRelationship(relationshipHash) {
    //     let normalizedRelationship = super.extractRelationship(...arguments);
   
    //     // Customize relationship meta
    //     normalizedRelationship.meta = camelCaseKeys(normalizedRelationship.meta);
   
    //     return normalizedRelationship;
    //   }
}
