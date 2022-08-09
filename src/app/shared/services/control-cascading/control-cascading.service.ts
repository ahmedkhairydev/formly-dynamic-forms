import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@youxel/form';
import { handleMultiLevelCascading, handleSingleCascading } from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class ControlCascadingService {

  constructor() { }
  
  cascading(field: any) {
    const fields = (field.parent.fieldGroup as FormlyFieldConfig[]),
      templateOptions = field.templateOptions,
      parentIndex = templateOptions.cascadingParentIndexes[templateOptions.cascadingParentIndexes.length - 1],
      parent = fields.find(field => field.templateOptions?.['index'] === parentIndex) as FormlyFieldConfig,
      fieldControl = field.form.get(field.templateOptions?.['name']);

    return !parent.form?.get(parent.templateOptions?.['name'])?.value || (!field.templateOptions.options?.length && !fieldControl?.value);
  }

  // @ts-ignore: Unreachable code error
  handleCascading({ field, form, fields }) {
    const queryParams = field.dataSourceUrl.split('=')[1];
    const hasMultiLevel = queryParams.split(',')[1];
    const getApiData = this.getChildOptions;

    if (hasMultiLevel) handleMultiLevelCascading({ field, form, fields, getApiData });
    else handleSingleCascading({ field, form, fields, getApiData });
  }

  onInitHook(parentField: any) {
    parentField.form.get(parentField.key)?.valueChanges.subscribe((value: any) => {
      if (value) {
        const fields = (parentField.parent.fieldGroup as FormlyFieldConfig[]);

        const firstChildIndex = parentField.templateOptions.cascadingChildrenIndexes[0],
          firstChild = fields.find(field => field.templateOptions?.['index'] === firstChildIndex) as FormlyFieldConfig,
          firstChildTemplateOptions = firstChild.templateOptions as any,
          isCascading = firstChildTemplateOptions.cascadingParentIndexes;

        if (isCascading)
          this.handleCascading({ field: firstChildTemplateOptions, form: parentField.form, fields: fields.map(field => field.templateOptions) });

          if (firstChild.templateOptions?.['cascadingChildrenIndexes']?.length) {
            setTimeout(() => {
              const firstChildIndex = parentField.templateOptions.cascadingChildrenIndexes[0],
                firstChild = fields.find(field => field.templateOptions?.['index'] === firstChildIndex) as FormlyFieldConfig;

              firstChild.form?.get(firstChild.templateOptions?.['name'])?.reset();
              this.onInitHook(firstChild);
            }, 1000);
          }
      }
    });
  }

  // @ts-ignore: Unreachable code error
  getChildOptions = (field) => {
    return;
    // this.httpService
    //   .get('listOfValues/api/' + field.newSourceUrl).pipe(take(1))
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res.result.data);
    //       const options = res.result.data as any[];

    //       options.unshift({
    //         "key": null,
    //         "selectedKey": null,
    //         "text": "Select an Option",
    //         "icon": null,
    //         "extra": null
    //       });

    //       field.options = options ?? [];
    //     },
    //     error: (err) => { }
    //   });
  };
}
