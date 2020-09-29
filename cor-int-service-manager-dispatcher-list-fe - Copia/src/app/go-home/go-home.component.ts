import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-home',
  templateUrl: './go-home.component.html'
})
export class GoHomeComponent {

  @Input()
  title: string;

  constructor(private location: Location) { }

  goHome() {
    this.location.back();

  }

}
