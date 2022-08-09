import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyTemplateOptions } from '@ngx-formly/core';

type OptionLayout = 'label' | 'both';
type SelectedOptionLayout = OptionLayout | 'image';

enum OptionsLayout {
  label = 'label',
  image = 'image',
  both = 'both'
}

interface DropdownSettings extends FormlyTemplateOptions {
  disabled: boolean;
  width: number; // width of the dropdown
  options: any[]; // list of the dropdown
  optionLabelPropertyName: string; // option label the naming key to bind from the backend
  imagePropertyName: string; // Image Property Name is the naming key to bind image property from the backend
  optionLayout: OptionLayout; // Option Layout is the naming key to display the label or label & image together in options list
  selectedOptionLayout: SelectedOptionLayout; // selected Option Layout is the naming key to display image or label or both together in the selected UI
  bindValue?: string; // the property of the option to bind with.
  label?: string; // dropdown label translate key
  defaultValue?: any; // default value
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends FieldType<FieldTypeConfig> implements OnInit {

  override key!: string;
  override to!: DropdownSettings;

  OptionsLayout = OptionsLayout;

  ngOnInit() { }

  onSelectItem(selectedOption: any) {
    this.form.get(this.key)?.setValue(selectedOption);
  }
}
