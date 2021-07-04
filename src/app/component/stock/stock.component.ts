import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommodityDataService} from "../../service/commodity-data.service";
import {Commodity} from "../../app.module";
import {CommoditiesJsonHelperService} from "../../service/commodities-json-helper.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private commodityDataService:CommodityDataService,
              private route:ActivatedRoute,
              private commoditiesJsonHelperService:CommoditiesJsonHelperService) { }
  commodities: Commodity[] = []

  ngOnInit(): void {
    this.getData(this.route.snapshot.params['market'])

    this.route.params.subscribe(params => {
      this.getData(params['market'])
    })
  }

  getData(market:string){
    if(market === "em"){
      this.getEMData()
    }else{
      this.getDMData()
    }
  }

  getEMData() {
    this.commodityDataService.getCommoditiesByType("PL_STOCK").subscribe(
      response => {
        console.log(response)
        this.commodities = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response)
      }
    )
  }

  getDMData() {
    this.commodityDataService.getCommoditiesByType("US_STOCK").subscribe(
      response => {
        console.log(response)
        this.commodities = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response);
      }
    )
  }

}
