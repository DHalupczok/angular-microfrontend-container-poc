import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy,} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();
  private detachPages: string[] = ["", 'counter', 'todo', 'user-management'];

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path;
    console.log("Goes out", path)
    if (path !==undefined) {
      return this.detachPages.includes(path);
    }
    return false;
  }

  store(
    route: ActivatedRouteSnapshot,
    detachedTree: DetachedRouteHandle
  ): void {
    this.storedRoutes.set((route.routeConfig!.path) as string, detachedTree)
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path;
    console.warn("Goes in", path);
    if (path !==undefined) {
      return (
        !!route.routeConfig && !!this.storedRoutes.get(path)
      );
    }
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const storedRoute = this.storedRoutes.get(route.routeConfig!.path as string);
    return storedRoute || null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
