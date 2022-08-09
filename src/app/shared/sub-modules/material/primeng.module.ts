import { NgModule } from '@angular/core';
// PrimeNG Modules
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { ToolbarModule } from 'primeng/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { EditorModule } from 'primeng/editor';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';

const pringngModules = [
  ToastModule,
  ButtonModule,
  RippleModule,
  TableModule,
  ConfirmDialogModule,
  BreadcrumbModule,
  InputTextModule,
  ChartModule,
  CheckboxModule,
  ToolbarModule,
  InputSwitchModule,
  OverlayPanelModule,
  RadioButtonModule,
  InputSwitchModule,
  CalendarModule,
  DropdownModule,
  MultiSelectModule,
  AutoCompleteModule,
  MenubarModule,
  AvatarModule,
  AvatarGroupModule,
  EditorModule,
  SelectButtonModule,
  InputTextareaModule,
  DialogModule,
  DividerModule,
  TooltipModule,
  SkeletonModule,
  PaginatorModule,
];

const primngServices = [ConfirmationService, MessageService];

@NgModule({
  imports: [...pringngModules],
  exports: [...pringngModules],
})
export class PrimeNgModule {}
