import { Observable } from 'rxjs';

export interface FieldTemplateOptions {
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: any[] | Observable<any[]>;
  rows?: number;
  cols?: number;
  description?: string;
  hidden?: boolean;
  max?: number;
  min?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
  required?: boolean;
  tabindex?: number;
  readonly?: boolean;
  optionLabelPropertyName?: string;
  imagePropertyName?: string;
  optionLayout?: string;
  selectedOptionLayout?: string;
  bindValue?: string;
  defaultValue?: string;
  index?: number;
  name?: string;
  cascadingParentIndexes?: any;
  cascadingChildrenIndexes?: any;
  dataSourceUrl?: string;
  outerIcon?: string;
  fieldInlineStyle?: {};
  conditionalView?: {};
}
