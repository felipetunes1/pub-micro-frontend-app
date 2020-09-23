import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { firebase } from '../environments/environment.prod';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransformFilterToastPipe } from './pipe/transform-filter-toast.pipe';
import { SnackBarExampleComponent } from './snack-bar-example/snack-bar-example.component';
import { OncreateDirective } from './directives/oncreate.directive';

@NgModule({
  declarations: [
    AppComponent,
    TransformFilterToastPipe,
    SnackBarExampleComponent,
    OncreateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
