import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class ConsumptionModel extends Model {
  @attr('number') accountNumber;
  @attr('number') presentConsumption;
  @attr('number') consumptionInMonth;
  @attr('number') carbonFootprint;
}
