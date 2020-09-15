import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacetsComponent } from './facets.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [FacetsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [FacetsComponent]
})
export class FacetsModule { }
