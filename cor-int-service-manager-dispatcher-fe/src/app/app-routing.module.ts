import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'dispatcher/new', component: CreateComponent },
  { path: 'dispatcher/list', component: ListComponent },
  { path: 'dispatcher/edit/:id', component: EditComponent },
  { path: 'dispatcher/detail/:id', component: DetailComponent },
  { path: 'dispatcher', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
