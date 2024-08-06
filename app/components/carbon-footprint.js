import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CarbonFootprintComponent extends Component {
 @service consumptionDetails;

 get lastMonthsCarbonFootprint() { 
   const carbonFootprint= this.consumptionDetails.getLastMonthsCarbonFootprint();
   console.log("carbonFootprint:", carbonFootprint); 
   return carbonFootprint; 
 } 
}
