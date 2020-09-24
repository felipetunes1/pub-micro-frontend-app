import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'query-connector', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }]
})
export class AppRoutingModule { }
