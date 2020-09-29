import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditXmlComponent } from './edit-xml/edit-xml.component';
import { EditComponent } from './edit/edit.component';
import { RouteListComponent } from './route-list/route-list.component';


const routes: Routes = [
  { path: 'generic-orchestrator/edit/:id/xml', component: EditXmlComponent },
  { path: 'generic-orchestrator/edit/:id/route', component: EditComponent },
  { path: 'generic-orchestrator/edit/:id', component: RouteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
