import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";

import { CodemirrorModule } from "@ctrl/ngx-codemirror";

import { DetailComponent } from './view/detail/detail.component';
import { GoHomeComponent } from './go-home/go-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    GoHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CodemirrorModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
