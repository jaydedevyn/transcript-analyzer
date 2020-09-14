import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptCallComponent } from './script-call.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [ScriptCallComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ScriptCallComponent]
})
export class ScriptCallModule { }
