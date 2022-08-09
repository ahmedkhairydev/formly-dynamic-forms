import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './pages/poc/poc.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PocComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule,
  ]
})
export class PocModule { }
