import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

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
  ],
  providers: [TranslateService],
})
export class PocModule { }
