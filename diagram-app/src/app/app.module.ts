import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { TreepaneComponent } from './treepane/treepane.component';
import { SidenavcontentComponent } from './sidenavcontent/sidenavcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    TreepaneComponent,
    SidenavcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
