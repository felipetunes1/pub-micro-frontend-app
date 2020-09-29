import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeFilter'
})
export class RouteFilterPipe implements PipeTransform {

  transform(list: any[], routeFilter: string): any[] {
    return routeFilter ? list.filter(item => item.from._uri.indexOf(routeFilter) > -1) : list;
  }

}
