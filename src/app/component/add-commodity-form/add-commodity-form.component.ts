import { Component, OnInit } from '@angular/core';
import {CommodityDataService} from "../../service/commodity-data.service";

@Component({
  selector: 'app-add-commodity-form',
  templateUrl: './add-commodity-form.component.html',
  styleUrls: ['./add-commodity-form.component.css']
})
export class AddCommodityFormComponent implements OnInit {
  commodityTypes = ['US_STOCK', 'PL_STOCK', 'ETF', 'CRYPTO', 'METAL', 'INDUSTRIAL_RESOURCE', 'RARE_EARTH', 'AGRO', 'REIT']
  scrapingStrategies = ['PULS_BIZNESU', 'YAHOO_FINANCE', 'FINAGE']
  commoditySectors = ['FINANCE', 'ENERGY', 'HEALTHCARE', 'TRADE_AND_SERVICES', 'CHEMICAL', 'GAMING', 'IT', 'TELECOM',
    'HIGH_TECH', 'BIO_TECH', 'MOTORIZATION', 'INDUSTRY', 'RARE_EARTH_MINING', 'METAL_MINING', 'AGRO', 'CONSTRUCTION']

  constructor(private commodityDataService:CommodityDataService) { }

  ngOnInit(): void {
  }

  submit(formResult:any){
    console.log("Form result: " + JSON.stringify(formResult.form.value))
    this.commodityDataService.addCommodity(formResult.form.value).subscribe(response => {
      console.log(response)
    });
  }

}
