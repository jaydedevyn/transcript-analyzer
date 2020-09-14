import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealCallComponent } from './real-call.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RealCallComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [RealCallComponent]
})
export class RealCallModule { }
