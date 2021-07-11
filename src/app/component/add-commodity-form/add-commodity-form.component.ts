import { Component, OnInit } from '@angular/core';
import {CommodityDataService} from "../../service/commodity-data.service";
import {Commodity} from "../../app.module";

@Component({
  selector: 'app-add-commodity-form',
  templateUrl: './add-commodity-form.component.html',
  styleUrls: ['./add-commodity-form.component.css']
})
export class AddCommodityFormComponent implements OnInit {
  commodityTypes = ['US_STOCK', 'PL_STOCK', 'MINING_ENERGY_STOCK_OR_ETF', 'AGRO_STOCK', 'ETF', 'CRYPTO', 'PRECIOUS_METAL',
    'INDUSTRIAL_RESOURCE', 'AGRO', 'REIT']
  scrapingStrategies = ['PULS_BIZNESU', 'YAHOO_FINANCE', 'FINAGE']
  commoditySectors = ['FINANCE', 'MINING_AND_ENERGY', 'HEALTHCARE', 'TRADE_AND_SERVICES', 'CHEMICAL', 'GAMING',
    'HIGH_TECH_AND_IT', 'TELECOM', 'BIO_TECH', 'MOTORIZATION', 'INDUSTRY', 'AGRO', 'CONSTRUCTION', 'PHOTOVOLTAICS']
  industrialRawMaterials = ['ALUMINIUM', 'ZINC', 'COPPER', 'NATURAL_GAS', 'PETROL', 'NICKEL', 'LEAD', 'OIL', 'RARE_EARTH',
    'STEEL', 'COAL', 'IRON', 'GOLD', 'SILVER', 'PLATINUM', 'PALLADIUM', 'URANIUM']

  constructor(private commodityDataService:CommodityDataService) { }

  ngOnInit(): void {
  }

  submit(formResult:any){
    console.log("Form result: " + JSON.stringify(formResult.form.value))
    this.commodityDataService.addCommodity(formResult.form.value).subscribe(response => {
    });
  }

}
