import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-home',
  templateUrl: './go-home.component.html'
})
export class GoHomeComponent {

  @Input()
  title: string;

  @Input()
  id: string;

  constructor(private location: Location, private router: Router) { }

  goHome() {
    this.location.back();

  }

}
