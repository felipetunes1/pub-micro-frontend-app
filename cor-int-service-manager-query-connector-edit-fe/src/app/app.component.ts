import { Component } from '@angular/core';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import { Router } from '@angular/router';


@Component({
  selector: 'app-query-connector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  goHome() {
    console.log('teste-redirect')
    this.router.navigate(['/query-connector']);
  }
}
