import { FormlyTemplateOptions } from '@ngx-formly/core';

export interface FieldTemplateOptions extends FormlyTemplateOptions {
  optionLabelPropertyName?: string | null;
  imagePropertyName?: string | null;
  optionLayout?: string | null;
  selectedOptionLayout?: string | null;
  bindValue?: string | null;
  defaultValue?: string | null;
  index?: number;
  name?: string;
  outerIcon?: string | null;
  fieldInlineStyle?: {} | null;
  conditionalView?: {} | null;
  options: any[];

  dataSourceId?: string | null;
  dataSourceType?: string | null;
  dataSourceUrl?: string | null;
  newSourceUrl?: string | null;
  cascadingChildrenIndexes?: number[] | null;
  cascadingParentIndexes?: number[] | null;
}
