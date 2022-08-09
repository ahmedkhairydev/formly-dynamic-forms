import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelFormModule } from '@youxel/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouxelCoreModule } from '@youxel/core';
import { MaterialModule } from './sub-modules/material/material.module';
import { PrimeNgModule } from './sub-modules/material/primeng.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    YouxelCoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [
    YouxelFormModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
  ]
})
export class SharedModule { }
