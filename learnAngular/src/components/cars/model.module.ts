import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksComponent } from './model/marks/marks.component';



@NgModule({
  declarations: [MarksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MarksComponent
  ]
})
export class ModelModule { }
