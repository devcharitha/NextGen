import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class PremisesModel extends Model {
  @attr('string') accountNumber;
  @attr('array') premises;
  @attr('string') premiseId;
  @attr('string') premise;
}