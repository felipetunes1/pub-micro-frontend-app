import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { CodemirrorModule } from "@ctrl/ngx-codemirror";

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './view/create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './view/detail/detail.component';
import { EditComponent } from './view/edit/edit.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { FiltersDialogComponent } from './filters-dialog/filters-dialog.component';
import { FilterQueryConnectorPipe } from './pipe/filter-query-connector.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    GoHomeComponent,
    FiltersDialogComponent,
    FilterQueryConnectorPipe,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
