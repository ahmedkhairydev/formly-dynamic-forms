import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@youxel/form';

@Injectable({
  providedIn: 'root'
})
export class ControlExpressionService {

  // constructor(public httpService: HttpService) { }
  constructor() { }
  
  cascading(field: any) {
    const fields = (field.parent.fieldGroup as FormlyFieldConfig[]),
      templateOptions = field.templateOptions,
      parentIndex = templateOptions.cascadingParentIndexes[templateOptions.cascadingParentIndexes.length - 1],
      parent = fields.find(field => field.templateOptions?.['index'] === parentIndex) as FormlyFieldConfig,
      fieldControl = field.form.get(field.templateOptions?.['name']);

    return !parent.form?.get(parent.templateOptions?.['name'])?.value || (!field.templateOptions.options?.length && !fieldControl?.value);
  }

  hideExpression(field: any) {
    const fields = (field.parent.fieldGroup as FormlyFieldConfig[]),
      conditionalView = field.templateOptions?.conditionalView,
      conditions = conditionalView?.conditions as any[];

    conditions.map(condition => {
      const newFields = fields.map(field => field.templateOptions) as any[],
        parentField = newFields.find(field => field.index === condition.parentFieldIndex),
        parentFieldValue = (field.form as FormGroup).get(parentField.name)?.value;

      if (condition.validationName === 'value') {
        condition.validityStatus = parentFieldValue;
      }

      if (condition.validationName === 'valueRequired') {
        condition.validityStatus = parentFieldValue === condition.value;
      }
    });

    return !conditions.some(condition => condition.validityStatus);
  }

  disabledExpression(field: any) {
    const fields = (field.parent.fieldGroup as FormlyFieldConfig[]),
      newFields = fields.map(field => field.templateOptions) as any[],
      templateOptions = field.templateOptions,
      conditionalView = templateOptions?.conditionalView,
      conditions = conditionalView?.conditions as any[];

    let cascadingParentIndexes = templateOptions?.cascadingParentIndexes as any[];

    if (conditions) {
      cascadingParentIndexes = conditions.map(condition => condition.parentFieldIndex);
    }

    if (cascadingParentIndexes) {
      let parentsValue = [];

      cascadingParentIndexes.map(parentFieldIndex => {
        const fieldControlKey = newFields.find(field => field.index === parentFieldIndex)?.name;
        const fieldControlValue = field.form.get(fieldControlKey)?.value;

        if (fieldControlValue) parentsValue.push(fieldControlValue);
      });

      return parentsValue.length !== cascadingParentIndexes.length; // disabled
    }

    return;
  }
}
