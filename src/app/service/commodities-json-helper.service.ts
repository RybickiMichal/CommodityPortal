import { Injectable } from '@angular/core';
import {Commodity} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class CommoditiesJsonHelperService {

  constructor() { }

  getCommoditiesWithoutItems(items:Commodity[]){
    let commodities: Commodity[] = [];
    items.forEach(value => {
      let json = JSON.stringify(value).replace("{\"Item\":","").slice(0, -1);
      commodities.push(JSON.parse(json))
    })
    return commodities
  }
}
