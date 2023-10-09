import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterComponent} from './components/counter/counter.component';
import {CounterService} from "./services/counter.service";
import { CounterRoutingModule } from './counter.routing.module';
import {FormsModule} from "@angular/forms";
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "../customRouteReuseStrategy";


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ],
  providers: [CounterService]
})
export class CounterModule {
}
