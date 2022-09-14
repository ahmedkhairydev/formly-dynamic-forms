import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { map, Observable, of } from 'rxjs';

interface DropdownSettings extends FormlyTemplateOptions {
  width?: number; // width of the dropdown
  labelPropertyName?: string; // ame of the label property of an option.
  selectedItemTemplate?: TemplateRef<any>; // template reference for dropdown selected option
  itemTemplate?: TemplateRef<any>; // template reference for dropdown option
  groupTemplate?: TemplateRef<any>; // template reference for group option
  optionValue?: string; // name of the value property of an option.
  dropdownIcon?: string;
  readonly?: boolean;
  dataKey?: string;
  autofocus?: boolean;
  emptyMessage?: string;
  showClear?: boolean;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;

  group?: boolean;
  optionGroupLabel?: string;
  optionGroupChildren?: string;

  style?: string;
  panelStyle?: string;
  styleClass?: string;
  panelStyleClass?: string;

  filter?: boolean;
  filterValue?: string;
  filterBy?: string;
  filterMatchMode?: string;
  filterPlaceholder?: string;
  filterLocale?: string;
  emptyFilterMessage?: string;
  resetFilterOnHide?: boolean;
  autofocusFilter?: boolean;

  tooltip?: any;
  tooltipStyleClass?: string;
  tooltipPosition?: 'right' | 'left' | 'top' | 'bottom';
  tooltipPositionStyle?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky' | 'inherit' | 'initial' | 'unset';

  APIConfig?: {
    type: 'post' | 'get';
    URL: string;
    responseProperty?: string; // you can assign nested properties by this way: result.data
    params?: any; // incase the user wants to add additional params properties with the default property
    body?: any; // incase the user wants to add additional body properties with the default property
  };

  onChange: (event: any) => {};
  onFilter: (event: any) => {};
  onClear: (event: any) => {};
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends FieldType<FieldTypeConfig> implements OnInit {

  override key!: string;
  override to!: DropdownSettings;

  /**
   * @description dropdown options.
   */
  dropdownOptions!: Observable<any[]>;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    if (!this.to.options && this.to.APIConfig) {
      this.dropdownOptions = this.callServerSideAPI();
    } else {
      this.dropdownOptions = Array.isArray(this.to.options) ? of(this.to.options) : this.to.options as Observable<any[]>;
    }
  }

  onSelectItem(selectedOption: { value: any; }) {
    this.form.get(this.key as string)?.setValue(selectedOption.value);
    this.to.onChange ? this.to.onChange(selectedOption) : '';
  }

  onFilter(event: any) {
    this.to.onFilter ? this.to.onFilter(event) : '';
  }

  onClear(event: any) {
    this.to.onClear ? this.to.onClear(event) : '';
  }

  /**
   * 
   * @param query search value
   * @descriptions search in the server options array based on entered value
   * @returns filtered options
   */
  private callServerSideAPI() {
    const APIConfig = this.to.APIConfig;

    switch (APIConfig?.type) {
      case 'get':
        return this.http.get(APIConfig?.URL, { params: APIConfig.params }).pipe(map((data => this.getDataFromResponse(data))));
      case 'post':
        return this.http.post(
          APIConfig?.URL,
          { ...APIConfig?.body ?? {} },
          { params: { ...APIConfig?.params ?? {} } }
        ).pipe(map((data => this.getDataFromResponse(data))));
      default:
        return of([]);
    }
  }

  /**
   * 
   * @param response API response
   * @returns the data based on nested properties
   */
  private getDataFromResponse(response: any): any {
    const nestedProperties: string[] = (this.to.APIConfig?.responseProperty as string).split('.');
    let value = response;

    for (const prop of nestedProperties) {
      if (value[prop] == null) {
        return value;
      }

      value = value[prop];
    }

    return value;
  }
}
