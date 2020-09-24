import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'query-connector/list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }]
})
export class AppRoutingModule { }
