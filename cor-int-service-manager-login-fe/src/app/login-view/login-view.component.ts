import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  loginForm: FormGroup;

  @Input()
  signInput: Function;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props)
    );
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.singleSpaProps.callLogedOut();
  }

  sign() {
    if (!this.loginForm.controls.user.invalid && !this.loginForm.controls.password.invalid) {
      this.singleSpaProps.callLogedIn('teste4');

      if (this.signInput)
        this.signInput();

    }
  }

  singleSpaProps$ = singleSpaPropsSubject.asObservable();

}
