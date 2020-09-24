import { Component, OnInit } from '@angular/core';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props)
    );
    if(this.singleSpaProps.getLoggin())
      history.pushState(null, null, '/')
  }

  sign() {
    history.pushState(null, null, '/')
  }

  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}
