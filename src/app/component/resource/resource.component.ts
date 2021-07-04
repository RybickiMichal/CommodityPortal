import { Component, OnInit } from '@angular/core';
import {CommodityDataService} from "../../service/commodity-data.service";
import {ActivatedRoute} from "@angular/router";
import {CommoditiesJsonHelperService} from "../../service/commodities-json-helper.service";
import {Commodity} from "../../app.module";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  constructor(private commodityDataService:CommodityDataService,
              private route:ActivatedRoute,
              private commoditiesJsonHelperService:CommoditiesJsonHelperService) { }
  commodities: Commodity[] = []

  ngOnInit(): void {
    this.getData(this.route.snapshot.params['type'])

    this.route.params.subscribe(params => {
      this.getData(params['type'])
    })
  }

  getData(market:string){
    if(market === "agro"){
      this.getAgroData()
    }else{
      this.getIndustrialData()
    }
  }

  getAgroData() {
    this.commodityDataService.getCommoditiesByType("AGRO").subscribe(
      response => {
        console.log(response)
        this.commodities = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response)
      }
    )
  }

  getIndustrialData() {
    this.commodityDataService.getCommoditiesByType("INDUSTRIAL_RESOURCE").subscribe(
      response => {
        console.log(response)
        this.commodities = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response);
      }
    )
  }

}
