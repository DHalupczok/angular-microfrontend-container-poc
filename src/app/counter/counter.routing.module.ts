import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CounterComponent} from "./components/counter/counter.component";

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CounterRoutingModule {
}
