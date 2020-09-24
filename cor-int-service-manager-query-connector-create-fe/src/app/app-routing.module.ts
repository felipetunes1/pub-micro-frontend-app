import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './view/create/create.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'query-connector/new', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }]
})
export class AppRoutingModule { }
