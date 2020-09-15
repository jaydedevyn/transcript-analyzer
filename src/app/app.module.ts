import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { RealCallModule } from './components/real-call/real-call.module';
import { ScriptCallModule } from './components/script-call/script-call.module';
import { FacetsModule } from './components/facets/facets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgentService } from './services/agent/agent.service';
import { TranscriptService } from './services/transcript/transcript.service';

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
    FacetsModule,
    HttpClientModule
  ],
  providers: [AgentService, TranscriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
