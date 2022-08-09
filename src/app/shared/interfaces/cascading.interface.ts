import { FormGroup } from "@angular/forms";

export interface Cascading {
  form: FormGroup;
  field: any;
  fields: any;
  getApiData: (field: any) => void
}
