import { Component, OnInit } from '@angular/core';
import {Commodity} from "../../app.module";
import {CommodityDataService} from "../../service/commodity-data.service";
import {CommoditiesJsonHelperService} from "../../service/commodities-json-helper.service";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  constructor(private commodityDataService:CommodityDataService,
              private commoditiesJsonHelperService:CommoditiesJsonHelperService) { }
  commodities: Commodity[] = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.commodityDataService.getCommoditiesByType("CRYPTO").subscribe(
      response => {
        console.log(response)
        this.commodities = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response)
      }
    )
  }

}
