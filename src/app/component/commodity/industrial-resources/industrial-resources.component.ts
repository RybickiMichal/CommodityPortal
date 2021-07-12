import { Component, OnInit } from '@angular/core';
import {CommodityDataService} from "../../../service/commodity-data.service";
import {ActivatedRoute} from "@angular/router";
import {CommoditiesJsonHelperService} from "../../../service/commodities-json-helper.service";
import {Commodity} from "../../../app.module";

@Component({
  selector: 'app-industrial-resources',
  templateUrl: './industrial-resources.component.html',
  styleUrls: ['./industrial-resources.component.css']
})
export class IndustrialResourcesComponent implements OnInit {

  constructor(private commodityDataService:CommodityDataService,
              private route:ActivatedRoute,
              private commoditiesJsonHelperService:CommoditiesJsonHelperService) { }
  industrialRawMaterials: Commodity[] = []
  industrialStocksAndETFs: Commodity[] = []

  ngOnInit(): void {
    this.getIndustrialRawMaterials()
    this.getIndustrialStocksAndETFs()
  }

  getIndustrialRawMaterials() {
    this.commodityDataService.getCommoditiesByType("INDUSTRIAL_RESOURCE").subscribe(
      response => {
        console.log(response)
        this.industrialRawMaterials = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response);
      }
    )
  }

  getIndustrialStocksAndETFs() {
    this.commodityDataService.getCommoditiesByType("MINING_ENERGY_STOCK_OR_ETF").subscribe(
      response => {

        this.industrialStocksAndETFs = this.commoditiesJsonHelperService.getCommoditiesWithoutItems(response);
      }
    )
  }

  getIndustrialStocksAndETFsByRawMaterial(rawMaterialName:String) {
    let stocks:Commodity[] = []
    this.industrialStocksAndETFs.forEach(function(stock) {
      if(rawMaterialName === stock.rawMaterial){
        stocks.push(stock)
      }
    });
    return stocks;
  }
}
