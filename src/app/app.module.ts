import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {MainComponent} from "./component/main/main.component";
import {RightbarComponent} from "./component/rightbar/rightbar.component";
import {ErrorpageComponent} from "./component/errorpage/errorpage.component";
import {CryptoComponent} from "./component/commodity/crypto/crypto.component";
import {ReitComponent} from "./component/commodity/reit/reit.component";
import {StockComponent} from "./component/commodity/stock/stock.component";
import {PreciousMetalComponent} from "./component/commodity/precious-metals/precious-metal.component";
import {ResourceComponent} from "./component/commodity/resource/resource.component";
import {AboutComponent} from "./component/about/about.component";
import {AddCommodityFormComponent} from "./component/commodity/add-commodity-form/add-commodity-form.component";
import {IndustrialResourcesComponent} from "./component/commodity/industrial-resources/industrial-resources.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    RightbarComponent,
    ErrorpageComponent,
    CryptoComponent,
    ReitComponent,
    StockComponent,
    PreciousMetalComponent,
    ResourceComponent,
    AboutComponent,
    AddCommodityFormComponent,
    IndustrialResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export class Commodity {
  constructor(
    public index: string,
    public commodityId: string,
    public commodityType: string,
    public commoditySector: string,
    public rawMaterial: string,
    public scrapingStrategy: string,
    public lastScrapingDate: string,
    public price: string,
    public currency: string,
    public comment: string,
    public lowOneYear: string,
    public highOneYear: string,
    public lowThreeYears: string,
    public highThreeYears: string,
    public lowFiveYears: string,
    public highFiveYears: string,
    public lowTenYears: string,
    public highTenYears: string,
  ) {

  }
}
