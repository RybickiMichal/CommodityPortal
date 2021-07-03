import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {MainComponent} from './component/main/main.component';
import {RightbarComponent} from './component/rightbar/rightbar.component';
import {HttpClientModule} from "@angular/common/http";
import {ErrorpageComponent} from './component/errorpage/errorpage.component';
import {CryptoComponent} from './component/crypto/crypto.component';
import {ReitComponent} from './component/reit/reit.component';
import {StockComponent} from './component/stock/stock.component';
import { MetalComponent } from './component/metal/metal.component';
import { ResourceComponent } from './component/resource/resource.component';
import { AboutComponent } from './component/about/about.component';

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
    MetalComponent,
    ResourceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
    public scrapingStrategy: string,
    public lastScrapingDate: string,
    public price: string,
    public currency: string
  ) {

  }
}
