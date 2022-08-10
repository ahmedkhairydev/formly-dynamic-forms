import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstructSubmissionService } from 'src/app/shared/services/construct-submission/construct-submission.service';
import { FormlyControl } from 'src/app/shared/interfaces';
import { ConstructFormlyFieldsService } from 'src/app/shared/services/construct-formly-fields/construct-formly-fields.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  model: any;

  form = new FormGroup({});

  fields: FormlyControl[] = [];

  constructor(private constructFormlyFieldsService: ConstructFormlyFieldsService, private constructSubmissionService: ConstructSubmissionService) { }

  ngOnInit(): void {
    console.log(this.constructFormlyFieldsService.constructFormlyFields(this.constructFormlyFieldsService.jsonControls))

    this.fields = this.constructFormlyFieldsService.constructFormlyFields(this.constructFormlyFieldsService.jsonControls);

    this.model = {
      classId: null,
      workTypeId: null,
      department: null,
      region: null,
      city: null,
      building: null,
      floor: null,
      isActive: null,
      fullName: null,
    };
  }

  submit() {
    const submissionForm = this.constructSubmissionService.convertToSubmissionInterface(this.form, this.fields);
    console.log(submissionForm);
  }
}
