import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './view/create/create.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './view/detail/detail.component';
import { EditComponent } from './view/edit/edit.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'query-connector/new', component: CreateComponent },
  { path: 'query-connector/list', component: ListComponent },
  { path: 'query-connector/detail/:id', component: DetailComponent },
  { path: 'query-connector/edit/:id', component: EditComponent },
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
