import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {loadRemoteModule} from '@angular-architects/module-federation';
import {CounterModule} from "./counter/counter.module";
import {AppComponent} from "./app.component";
import {ExampleComponent} from "./components/example/example.component";
import {CounterRoutingModule} from "./counter/counter.routing.module";
import {UserManagementMfeComponent} from "./pages/user-management-mfe/user-management-mfe.component";
import {AppRoutingComponent} from "./app-routing.component";

let routes: Routes = []
routes = [{
  path: '',
  component: AppRoutingComponent,
  children: [
    {
      path: 'user-management',
      loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.UserManagementModule)
    },
    {path: '', component: MainPageComponent, pathMatch: 'full',},

  ]
},
  // {path: '', component: UserManagementMfeComponent, children: [
  //
  //   ]},
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {path: 'todo', component: ExampleComponent},
  {
    path: 'user-management-test', component: UserManagementMfeComponent, children: [
      {
        path: 'mfe',
        loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Module'
        }).then(m => m.UserManagementModule)
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CounterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
