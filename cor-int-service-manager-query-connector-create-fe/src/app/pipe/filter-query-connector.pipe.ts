import { Pipe, PipeTransform } from '@angular/core';
import { QueryConnectorModel } from '../models/query-connector.model';
import { Register } from '../models/register.model';

@Pipe({
  name: 'filterQueryConnector'
})
export class FilterQueryConnectorPipe implements PipeTransform {

  transform(list: Array<Register>, filterQueryConnector: Object): unknown {
    let filter = {
      id: "",
      databaseName: ""
    }
    if (!!filterQueryConnector) {
      for (var [key, value] of Object.entries(filterQueryConnector)) {
        if (key == "Query Code")
          filter.id = value;
        if (key == "Database Name")
          filter.databaseName = value;
      }
      return list.filter(item =>
        (!filter.id || item.id == filter.id) &&
        (!filter.databaseName || item.database.name == filter.databaseName)
      )
    }

    return list;
  }

}
