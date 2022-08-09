import { FormlyTemplateOptions } from '@ngx-formly/core';

export interface FieldTemplateOptions extends FormlyTemplateOptions {
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
