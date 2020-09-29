import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditXmlComponent } from './edit-xml/edit-xml.component';
import { EditComponent } from './edit/edit.component';
import { RouteListComponent } from './route-list/route-list.component';


const routes: Routes = [
  { path: 'generic-orchestrator/detail/:id/xml', component: EditXmlComponent },
  { path: 'generic-orchestrator/detail/:id/route', component: EditComponent },
  { path: 'generic-orchestrator/detail/:id', component: RouteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppRoutingModule { }
