import { Injectable } from '@angular/core';
import { DispatcherModel } from '../models/dispatcher.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  dispatcherList: DispatcherModel[] = [
  ]

  constructor() {
    for (let i = 1; i < 99; i++) {
      let dispatcher = new DispatcherModel();
      dispatcher._id = Math.round(Math.random() * 100000) + '';
      dispatcher.codeTmp = i;
      dispatcher.internalUrl = `http://teste.teste${i}.com.br`
      dispatcher.body = i % 2 == 0 ? `{
        "teste" : ${i}
      }` : `.body`;
      dispatcher.bodyOut = i % 2 == 0 ? `{
        "response" : .body.teste
      }` : `.body`;
      dispatcher.bodyOutXml = i % 2 == 0 ? `` : `.{
        "response" : .body.teste
      }`;
      dispatcher.method = i % 2 == 0 ? "GET" : "POST";
      dispatcher.oldVersionMs = false
      dispatcher.isFluxoXml = false
      this.dispatcherList.push(dispatcher);
    }

  }

  // listAll(): Observable<DispatcherModel[]> {
  //   return of(this.dispatcherList)
  // }

  listAll(): DispatcherModel[] {
    return this.dispatcherList
  }

  get(codeTmp: string): Observable<DispatcherModel> {

    return new Observable(subscriber => {
      subscriber.next(this.dispatcherList.find(item => item.codeTmp + '' == codeTmp));
    });
  }

  new(dispatcherModel: DispatcherModel): Observable<DispatcherModel> {
    return new Observable(subscriber => {
      dispatcherModel.codeTmp = this.dispatcherList.reduce((ant, next) => (next.codeTmp > ant.codeTmp ? next : ant)).codeTmp + 1;
      this.dispatcherList.push(dispatcherModel);
      subscriber.next(dispatcherModel);
    });
  }

  edit(dispatcherModel: DispatcherModel) {
    return new Observable(subscriber => {
      let indexDis = -1;
      this.dispatcherList.forEach((item, index) => {
        if (item.codeTmp == dispatcherModel.codeTmp)
          indexDis = index;
      });
      if (indexDis >= 0)
        this.dispatcherList[indexDis] = dispatcherModel;
      subscriber.next(indexDis >= 0 ? dispatcherModel : undefined);
    });
  }

}
