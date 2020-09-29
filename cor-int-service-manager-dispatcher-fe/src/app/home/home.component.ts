import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public detailForm: FormGroup;
  public editForm: FormGroup

  constructor(private detailFb: FormBuilder, private editFb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.detailForm = this.detailFb.group({
      id: ['', Validators.required]
    })
    this.editForm = this.editFb.group({
      id: ['', Validators.required]
    })
  }

  redirect(route: string = "/dispatcher/") {
    history.pushState(null, null, route)
    // this.router.navigate([route]);
  }

  detailRedirect(route: string = "/dispatcher/") {
    if (this.detailForm.controls.id.valid) {
      this.redirect(`${route}/${this.detailForm.controls.id.value}`)
      // this.redirect(`${route}/${this.detailForm.controls.id.value}`)
    }

  }

  editRedirect(route: string = "/dispatcher/") {
    if (this.editForm.controls.id.valid) {
      this.redirect(`${route}/${this.editForm.controls.id.value}`)
      // this.redirect(`${route}/${this.editForm.controls.id.value}`)
    }


  }
}
