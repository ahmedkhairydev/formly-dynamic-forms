import { AbstractControl, ValidatorFn } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable } from "rxjs";
import { ValidationName, FormControlTypes } from "../enums";
import { ConditionalView } from "./conditional-view.interface";
import { Style } from "./style.interface";
import { DropdownSubmissionInterface } from "./submission.interface";

export interface BackendControl {
  id?: string;
  type?: FormControlTypes | string;
  value?: Array<DropdownSubmissionInterface | string>;
  format?: string | null;
  contentType?: string | null;
  index?: number;
  formCode?: null;
  valuePathEn?: string | null;
  valuePathAr?: string | null;
  readOnly?: boolean;
  isVisibleInViewMode?: boolean;
  isRequired?: boolean;
  isValueDynamic?: boolean;
  dataSourceType?: string | null;
  dataSourceUrl?: string | null;
  dataSourceId?: string | null;
  mappedValue?: null;
  name?: string;
  translations?: null;
  label?: string;
  description?: string | null;
  placeHolder?: string | null;
  isVisible?: boolean;
  roles?: any[] | null;
  icon?: string | null;
  style?: Style;
  validations?: Validation[];
  dependencies?: any[];
  conditionalView?: ConditionalView;
  relationEquation?: null;
  isSubmitted?: boolean;
  savedValues?: null;
  tableOperation?: null;
  options?: Option[];
  cascadingChildrenIndexes?: number[] | null;
  cascadingParentIndexes?: number[] | null;
  searchChildrenIndexes?: null;
  isMultiSelect?: boolean;
  isCancelDelegation?: boolean;
  isExternalDataSource?: boolean;
  fileDetails?: FileDetail[];
  isImageThumbnail?: boolean;
  filesNumber?: number;
  controls?: BackendControl[];
  additionalProperty01?: null;
  additionalProperty02?: null;
  additionalProperty03?: null;
  additionalProperty04?: null;
  [additionalProperty: string]: any;

  // custom properties

  // {
  //   validation?: (string | ValidatorFn)[];
  //   [key: string]: ((control: AbstractControl, field: FormlyFieldConfig) => boolean) | ({ expression: (control: AbstractControl, field: FormlyFieldConfig) => boolean, message: string | ((error: any, field: FormlyFieldConfig) => string | Observable<string>); });
  // }
  cutomValidators?: any;
  className?: string;
}

interface Option {
  key?: string;
  selectedKey?: string | null;
  text?: string;
  icon?: string | null;
  extra?: string | null;
  label?: string | null;
  value?: string | null | boolean;
}

interface FileDetail {
  type: string;
  maxSize: string;
}

interface Validation {
  name: ValidationName | string;
  value: string;
  message: string;
  translations: null;
}
