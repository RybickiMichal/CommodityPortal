import { Component, OnInit } from '@angular/core';
import {CommodityDataService} from "../../service/commodity-data.service";
import {Commodity} from "../../app.module";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private commodityDataService:CommodityDataService) { }
  commodities: Commodity[] = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.commodityDataService.getCryptoCurrencies().subscribe(
      response => {
        console.log(response)

        let commodities: Commodity[] = [];
        response.forEach(value => {
          let json = JSON.stringify(value).replace("{\"Item\":","").slice(0, -1);
          commodities.push(JSON.parse(json))
        })
        this.commodities = commodities;
      }
    )
  }

}
