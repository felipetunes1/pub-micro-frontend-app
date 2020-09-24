import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './view/edit/edit.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'query-connector/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }]
})
export class AppRoutingModule { }
