import { Pipe, PipeTransform } from '@angular/core';
import { DispatcherModel } from '../models/dispatcher.model';

@Pipe({
  name: 'filterDispatcher'
})
export class FilterDispatcherPipe implements PipeTransform {

  transform(list: DispatcherModel[], filterQueryConnector: Object): DispatcherModel[] {
    let filter = {
      codeTmp: 0,
      internalUrl: "",
      method: "",
      oldVersionMs: false,
      isFluxoXml: false
    }
    if (!!filterQueryConnector) {
      for (var [key, value] of Object.entries(filterQueryConnector)) {
        if (key == "Template Code")
          filter.codeTmp = value;
        if (key == "Internal URL Contains")
          filter.internalUrl = value;
        if (key == "Old Version")
          filter.oldVersionMs = value;
        if (key == "Fluxo XML")
          filter.isFluxoXml = value;
        if (key == "Method")
          filter.method = value;
      }
      return list.filter((item, index) => {
          
        return (!filter.codeTmp || item.codeTmp == filter.codeTmp) &&
          (!filter.method || item.method == filter.method) &&
          (!filter.internalUrl || item.internalUrl.indexOf(filter.internalUrl) > -1) &&
          (item.oldVersionMs == filter.oldVersionMs) &&
          (item.isFluxoXml == filter.isFluxoXml)
      })
    }

    return list;
  }

}
