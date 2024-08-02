import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class CustomersModel extends Model {
  @attr('string') customerId;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') phonenumber;
  @attr('string') email;
  @attr('array') list_of_appliances;
  @attr('string') applianceId;
  @attr('string') manufactureDate;
  @attr('string') customerId;
  @attr('string') applianceName;
  @attr('string') category;
  @attr('string') age;
  @attr('string') energyConsumption;
}