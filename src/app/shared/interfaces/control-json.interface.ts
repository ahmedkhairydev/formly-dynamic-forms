import { ValidationName, FormControlTypes } from "../enums";
import { ConditionalView } from "./conditional-view.interface";
import { Style } from "./style.interface";
import { DropdownSubmissionInterface } from "./submission.interface";

export interface BackendResponse {
  id?: string;
  type?: FormControlTypes | string;
  value?: Array<DropdownSubmissionInterface | string>;
  format?: null | string;
  contentType?: null | string;
  index?: number;
  formCode?: null;
  valuePathEn?: null | string;
  valuePathAr?: null | string;
  readOnly?: boolean;
  isVisibleInViewMode?: boolean;
  isRequired?: boolean;
  isValueDynamic?: boolean;
  dataSourceType?: null | string;
  dataSourceUrl?: null | string;
  dataSourceId?: null | string;
  mappedValue?: null;
  name?: string;
  translations?: null;
  label?: string;
  description?: null | string;
  placeHolder?: string;
  isVisible?: boolean;
  roles?: any[] | null;
  icon?: null | string;
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
  additionalProperty01?: null;
  additionalProperty02?: null;
  additionalProperty03?: null;
  additionalProperty04?: null;
  [additionalProperty: string]: any;
}

interface Option {
  key?: string;
  selectedKey?: null | string;
  text?: string;
  icon?: null | string;
  extra?: null | string;
  label?: null | string;
  value?: null | string | boolean;
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
