import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./component/main/main.component";
import {CryptoComponent} from "./component/crypto/crypto.component";
import {StockComponent} from "./component/stock/stock.component";
import {ReitComponent} from "./component/reit/reit.component";
import {ErrorpageComponent} from "./component/errorpage/errorpage.component";
import {MetalComponent} from "./component/metal/metal.component";
import {ResourceComponent} from "./component/resource/resource.component";
import {AboutComponent} from "./component/about/about.component";

const routes: Routes = [
  { path: '' , redirectTo: '/main', pathMatch: 'full' },
  { path: 'main' , component: MainComponent },
  { path: 'crypto' , component: CryptoComponent },
  { path: 'metal' , component: MetalComponent },
  { path: 'resource/:type' , component: ResourceComponent },
  { path: 'stock/:market' , component: StockComponent },
  { path: 'reit' , component: ReitComponent },
  { path: 'about' , component: AboutComponent },
  { path: '**' , component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
