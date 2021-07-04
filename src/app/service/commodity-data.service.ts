import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commodity} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class CommodityDataService {

  constructor(private httpClient: HttpClient) { }

  getCommoditiesByType(type:String) {
    return this.httpClient.get<Commodity[]>(`https://euxdxjh9d4.execute-api.eu-central-1.amazonaws.com/Prod/commodities/${type}`)
  }

  addCommodity(commodity:Commodity) {
    return this.httpClient.post(`https://euxdxjh9d4.execute-api.eu-central-1.amazonaws.com/Prod/commodity/`, commodity)
  }
}
