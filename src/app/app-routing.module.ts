import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import { loadRemoteModule } from '@angular-architects/module-federation';
let routes: Routes = []
 try {
    routes = [{
     path: '',
     component: MainPageComponent,
     pathMatch: "full",
   },
     // @ts-ignore
    //  {
    //    path: 'user-management',
    //    // @ts-ignore
    //    loadChildren: () => import('user-management-microfrontend-poc/Module').then(m => m.UserManagementModule).catch(err => {
    //      console.warn(err)
    //      return null;
    //    })
    //  },
    {
      path: 'user-management',
      // @ts-ignore
      loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.UserManagementModule)
    },
   ];
 } catch (e) {
   console.warn("Error:" , e)
 }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
