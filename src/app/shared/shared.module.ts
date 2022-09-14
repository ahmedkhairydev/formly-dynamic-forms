import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { YouxelFormModule } from '@youxel/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './sub-modules/material/material.module';
import { PrimeNgModule } from './sub-modules/material/primeng.module';
import { DropdownModule } from './components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    YouxelCoreModule,
    YouxelFormModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,

    DropdownModule,
  ],
  exports: [
    YouxelCoreModule,
    YouxelFormModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
  ]
})
export class SharedModule { }
