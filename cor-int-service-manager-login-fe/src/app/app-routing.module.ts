import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppRoutingModule { }
