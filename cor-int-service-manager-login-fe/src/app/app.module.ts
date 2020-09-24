import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ExpireComponent } from './expire/expire.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { TimerFormatPipe } from './pipe/timer-format.pipe';
import { HomeNavComponent } from './home-nav/home-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpireComponent,
    LoginViewComponent,
    LoginDialogComponent,
    TimerFormatPipe,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
