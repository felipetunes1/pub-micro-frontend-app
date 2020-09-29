import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { CodemirrorModule } from "@ctrl/ngx-codemirror";

import { HttpClientModule } from '@angular/common/http';
import { RouteFilterPipe } from './pipe/route-filter.pipe';
import { EditComponent } from './edit/edit.component';
import { RouteListComponent } from './route-list/route-list.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { EditXmlComponent } from './edit-xml/edit-xml.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteFilterPipe,
    EditComponent,
    RouteListComponent,
    GoHomeComponent,
    MessageDialogComponent,
    EditXmlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    CodemirrorModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
