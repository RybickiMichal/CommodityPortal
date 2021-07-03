import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commodity} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class CommodityDataService {

  constructor(private httpClient: HttpClient) { }

  getCryptoCurrencies() {
    return this.httpClient.get<Commodity[]>(`https://euxdxjh9d4.execute-api.eu-central-1.amazonaws.com/Prod/commodities/CRYPTO`)
  }

  getUsStocks() {
    return this.httpClient.get<Commodity[]>(`https://euxdxjh9d4.execute-api.eu-central-1.amazonaws.com/Prod/commodities/US_STOCK`)
  }

  getPlStocks() {
    return this.httpClient.get<Commodity[]>(`https://euxdxjh9d4.execute-api.eu-central-1.amazonaws.com/Prod/commodities/PL_STOCK`)
  }
}
