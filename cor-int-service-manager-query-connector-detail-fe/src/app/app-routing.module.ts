import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './view/detail/detail.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'query-connector/detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }]
})
export class AppRoutingModule { }
