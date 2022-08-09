import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule as PrimeNgDropdown } from 'primeng/dropdown';

import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PrimeNgDropdown,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'dropdown',
          wrappers: ['form-field'],
          component: DropdownComponent
        }
      ]
    }),
  ],
})
export class DropdownModule { }
