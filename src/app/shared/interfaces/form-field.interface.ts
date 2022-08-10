import { FormlyFieldConfig } from '@youxel/form';
import { FieldTemplateOptions } from './field-templateOptions.interface';

export interface FormlyControl extends FormlyFieldConfig {
  templateOptions?: FieldTemplateOptions;
}
