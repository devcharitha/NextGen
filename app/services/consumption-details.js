import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ConsumptionDetailsService extends Service {
  @tracked consumptionDetails = [];

  setConsumptionDetails(details) { 
    this.consumptionDetails = details.consumptionDetails; 
    console.log(this.consumptionDetails);
 } 

  getConsumptionDetails() {
    return this.consumptionDetails;
  }

  getLastMonthReading(){
    let today=new Date();
    let currentMonth=today.getMonth();
    let lastMonth=currentMonth===0?11:(currentMonth -1);
   
    let monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let lastMonthName=monthNames[lastMonth];
   
    let lastMonthReading;
    for(let reading of this.consumptionDetails){
      if(reading.month===lastMonthName){
        lastMonthReading=reading.reading;
        break;
      }
    }
    return lastMonthReading||'no reading';
   }
   getLastMonthsCarbonFootprint(){
    let today=new Date();  
    let currentMonth=today.getMonth();  
    let lastMonth=currentMonth===0?11:(currentMonth -1);
    
    let monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];  
    
    let lastMonthName=monthNames[lastMonth];
    
    let lastMonthsCarbonFootprint;
    
    for(let reading of this.consumptionDetails){
    if(reading.month ===lastMonthName ){
    lastMonthsCarbonFootprint=reading.carbonFootprint;
    break ;
    }  
    }
    
    return lastMonthsCarbonFootprint||'no carbon footprint';
    }  
    
    
}