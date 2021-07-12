import { Component, OnInit } from '@angular/core';
import {CommodityDataService} from "../../../service/commodity-data.service";
import {CommoditiesJsonHelperService} from "../../../service/commodities-json-helper.service";
import {Commodity} from "../../../app.module";

@Component({
  selector: 'app-metal',
  templateUrl: './precious-metal.component.html',
  styleUrls: ['./precious-metal.component.css']
})
export class PreciousMetalComponent implements OnInit {

  constructor(private commodityDataService:CommodityDataService,
              private commoditiesJsonHelperService:CommoditiesJsonHelperService) { }
  commodities: Commodity[] = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.commodityDataService.getCommoditiesByType("PRECIOUS_METAL").subscribe(
      response => {
        console.log(response)
        this.commodities = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response)
      }
    )
  }

}
