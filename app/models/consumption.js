import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class ConsumptionModel extends Model {
  @attr('string') premiseId;
  @attr('array') consumptionDetails;
  @attr('string') billAmount;
  @attr('string') carbonFootprint;
  @attr('string') month;
  @attr('string') reading;
}
