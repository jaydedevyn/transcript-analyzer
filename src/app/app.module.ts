import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { RealCallModule } from './components/real-call/real-call.module';
import { ScriptCallModule } from './components/script-call/script-call.module';
import { FacetsModule } from './components/facets/facets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    ScriptCallModule,
    RealCallModule,
    FacetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
