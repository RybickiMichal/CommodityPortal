import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./component/main/main.component";
import {CryptoComponent} from "./component/crypto/crypto.component";
import {StockComponent} from "./component/stock/stock.component";
import {ReitComponent} from "./component/reit/reit.component";
import {ErrorpageComponent} from "./component/errorpage/errorpage.component";
import {PreciousMetalComponent} from "./component/precious-metals/precious-metal.component";
import {AboutComponent} from "./component/about/about.component";
import {AddCommodityFormComponent} from "./component/add-commodity-form/add-commodity-form.component";
import {IndustrialResourcesComponent} from "./component/industrial-resources/industrial-resources.component";

const routes: Routes = [
  { path: '' , redirectTo: '/main', pathMatch: 'full' },
  { path: 'main' , component: MainComponent },
  { path: 'crypto' , component: CryptoComponent },
  { path: 'metal' , component: PreciousMetalComponent },
  { path: 'stock/:market' , component: StockComponent },
  { path: 'reit' , component: ReitComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'form' , component: AddCommodityFormComponent },
  { path: 'industrial-resources' , component: IndustrialResourcesComponent },
  { path: '**' , component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
