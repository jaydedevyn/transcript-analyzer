import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScriptCallComponent } from './script-call.component';



@NgModule({
  declarations: [ScriptCallComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [ScriptCallComponent]
})
export class ScriptCallModule { }
