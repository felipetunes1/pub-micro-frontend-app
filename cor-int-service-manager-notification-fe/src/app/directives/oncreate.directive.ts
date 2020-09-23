import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[onCreate]'
})
export class OncreateDirective {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log('aqui')
    this.onCreate.emit('dummy');
  }

}
