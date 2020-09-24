import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformFilterToast'
})
export class TransformFilterToastPipe implements PipeTransform {

  transform(values: Array<any>, filter: boolean): unknown {
    return values && values.filter(value => value.dismissed == false);
  }

}
