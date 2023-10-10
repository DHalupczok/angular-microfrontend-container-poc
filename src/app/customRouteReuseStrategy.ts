import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

// export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
//   private storedRoutes = new Map<string, DetachedRouteHandle>();
//   private detachPages: string[] = ["", 'counter', 'todo', 'user-management'];
//
//   override shouldDetach(route: ActivatedRouteSnapshot): boolean {
//     const path = route.routeConfig?.path;
//     console.log("Goes out", path)
//     if (path !==undefined) {
//       return this.detachPages.includes(path);
//     }
//     return false;
//   }
//
//   override store(
//     route: ActivatedRouteSnapshot,
//     detachedTree: DetachedRouteHandle
//   ): void {
//     this.storedRoutes.set((route.routeConfig!.path) as string, detachedTree)
//   }
//
//   override shouldAttach(route: ActivatedRouteSnapshot): boolean {
//     const path = route.routeConfig?.path;
//     console.warn("Goes in", path);
//     if (path !==undefined) {
//       return (
//         !!route.routeConfig && !!this.storedRoutes.get(path)
//       );
//     }
//     return false;
//   }
//
//   override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
//     const storedRoute = this.storedRoutes.get(route.routeConfig!.path as string);
//     return storedRoute || null;
//   }
//
//   // shouldReuseRoute(
//   //   future: ActivatedRouteSnapshot,
//   //   curr: ActivatedRouteSnapshot
//   // ): boolean {
//   //   return future.routeConfig === curr.routeConfig;
//   // }
// }

export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();
  private detachPages: string[] = ["/", 'counter', 'todo', 'user-management', 'user-management-test', 'dogs', 'cats', 'rats'];
  private handleNestedUrl = (url:string) => {
    const splitUrl = url.split('/');
    return splitUrl[splitUrl.length-1];
  }

  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this.handleNestedUrl((route as any)._routerState.url);
    if (this.detachPages.indexOf(path) != -1) {
      return true
    } else {
      return false;
    }
  }

  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const path = this.handleNestedUrl((route as any)._routerState.url);
    console.warn((route as any)._routerState.url)
    console.log(route.routeConfig!.path)
    console.log("store", route);
    this.storedRoutes.set(path, handle);
  }

  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = this.handleNestedUrl((route as any)._routerState.url);
    // console.log('shouldAttach', route)
    return !!this.storedRoutes.get(path);
  }

  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = this.handleNestedUrl((route as any)._routerState.url);
    if (!route.component) return null;
    return this.storedRoutes.get(path) as DetachedRouteHandle;
  }
}
// export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
//   private storedRoutes = new Map<string, DetachedRouteHandle>();
//   private detachPages: string[] = ["/", 'counter', 'todo', 'user-management', 'user-management-test', '/dogs', '/cats'];
//   private handleNestedUrl = (url:string) => {
//     const splitUrl = url.split('/');
//     console.log("JPRD!", splitUrl[splitUrl.length -1], url, splitUrl)
//     return splitUrl[splitUrl.length-1];
//   }
//
//   override shouldDetach(route: ActivatedRouteSnapshot): boolean {
//     // console.log(window.location.pathname)
//     if (this.detachPages.indexOf((route as any)._routerState.url) != -1) {
//       return true
//     } else {
//       return false;
//     }
//   }
//
//   override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
//     this.storedRoutes.set((route as any)._routerState.url, handle);
//   }
//
//   override shouldAttach(route: ActivatedRouteSnapshot): boolean {
//     return !!this.storedRoutes.get((route as any)._routerState.url);
//   }
//
//   override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
//     if (!route.component) return null;
//     return this.storedRoutes.get((route as any)._routerState.url) as DetachedRouteHandle;
//   }
// }
