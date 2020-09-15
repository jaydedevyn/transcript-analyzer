import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RealCallComponent } from './real-call.component';

@NgModule({
  declarations: [RealCallComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [RealCallComponent]
})
export class RealCallModule { }
