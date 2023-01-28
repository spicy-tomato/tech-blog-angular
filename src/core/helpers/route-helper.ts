import { ActivatedRouteSnapshot } from '@angular/router';

export class RouteHelper {
  static getChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
