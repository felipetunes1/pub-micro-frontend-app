import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from "@angular/material/dialog";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { CodemirrorModule } from "@ctrl/ngx-codemirror";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { GoHomeComponent } from './go-home/go-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
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
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
