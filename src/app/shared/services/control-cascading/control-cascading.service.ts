import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { FormlyControl } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ControlCascadingService {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpService: HttpClient) { }

  hideCascadingExpression(field: FormlyControl) {
    const fields = (field.parent?.fieldGroup as FormlyControl[]),
      templateOptions = field.templateOptions,
      cascadingParentIndexes = templateOptions?.cascadingParentIndexes,
      parentIndex = cascadingParentIndexes ? cascadingParentIndexes[cascadingParentIndexes.length - 1] : null,
      parent = fields.find(field => field.templateOptions?.index === parentIndex) as FormlyControl,
      fieldControl = field.form?.get(field.templateOptions?.name as string),
      options = field.templateOptions?.options;

    return !parent.form?.get(parent.templateOptions?.name as string)?.value || (!options?.length && !fieldControl?.value);
  }

  onInitCascadingHook(parentField: FormlyControl) {
    parentField.form?.get(parentField.key)?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value: any) => {
      if (value) {
        const fields = parentField.parent?.fieldGroup;

        const cascadingChildrenIndexes = parentField.templateOptions?.cascadingChildrenIndexes,
          firstChildIndex = cascadingChildrenIndexes ? cascadingChildrenIndexes[0] : null,
          firstChild = fields?.find(field => field.templateOptions?.['index'] === firstChildIndex) as FormlyControl,
          firstChildTemplateOptions = firstChild?.templateOptions,
          isCascading = firstChildTemplateOptions?.cascadingParentIndexes;

        if (isCascading) {
          this.handleCascading(firstChild, () => {
            if (firstChild.templateOptions?.cascadingChildrenIndexes?.length) {
              const cascadingChildrenIndexes = parentField.templateOptions?.cascadingChildrenIndexes,
                firstChildIndex = cascadingChildrenIndexes ? cascadingChildrenIndexes[0] : null,
                firstChild = fields?.find(field => field.templateOptions?.['index'] === firstChildIndex) as FormlyControl;

              firstChild.form?.get(firstChild?.templateOptions?.name as string)?.reset();
              this.onInitCascadingHook(firstChild);
            }
          });
        }
      }
    });
  }

  private handleCascading(field: FormlyControl, callbackFn: (options: any[]) => void) {
    const newSourceUrl = this.changeUrlToParentValue(field),
      isValidURL = this.isValidURL(newSourceUrl as string);

    if (isValidURL) {
      field.templateOptions!.newSourceUrl = newSourceUrl;
      this.getOptions(field, (options: any[]) => callbackFn(options));
    }
  }

  private changeUrlToParentValue(field: FormlyControl) {
    const parentIndexs = field.templateOptions?.cascadingParentIndexes,
      fields = field.parent?.fieldGroup,
      parents = fields?.filter(field => parentIndexs?.includes(field.templateOptions?.['index'])) as FormlyControl[];

    return parents?.reduce((acc, cur, index) => {
      const parentControlValue = cur.form?.get(cur.key)?.value?.key || cur.form?.get(cur.key)?.value;
      return acc?.replace(`{${index.toString()}}`, `${parentControlValue}`);
    }, field.templateOptions?.dataSourceUrl);
  }

  private isValidURL(newSourceUrl: string) {
    return !newSourceUrl.includes('{') || !newSourceUrl.includes('}');
  }

  private getOptions(field: FormlyControl, callbackFn: (options: any[]) => void) {
    const newSourceUrl = field.templateOptions?.newSourceUrl;
    console.log(newSourceUrl);
    this.httpService.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(take(1)).subscribe(res => {
      field.templateOptions!.options = res.map(e => ({ key: e.id, text: e.title })) ?? [];
      setTimeout(() => callbackFn(field.templateOptions!.options));
    });
  }

  // @ts-ignore: Unreachable code error
  private getChildOptions = (field) => {
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

  /* when leaving the component */
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
