import { FormlyFieldConfig } from '@youxel/form';
import { FieldTemplateOptions } from './field-templateOptions.interface';

export interface FormField extends FormlyFieldConfig {
  templateOptions: FieldTemplateOptions;
}
