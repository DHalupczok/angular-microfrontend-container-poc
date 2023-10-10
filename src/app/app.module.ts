import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./customRouteReuseStrategy";
import { ExampleComponent } from './components/example/example.component';
import { UserManagementMfeComponent } from './pages/user-management-mfe/user-management-mfe.component';
import { AppRoutingComponent } from './app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ExampleComponent,
    UserManagementMfeComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
