import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstructSubmissionService } from 'src/app/shared/services/construct-submission/construct-submission.service';
import { FormField } from 'src/app/shared/interfaces/form-field.interface';
import { MappingJsonData } from 'src/app/shared/services/mapping-data.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  model: any;

  form!: FormGroup;

  fields: FormField[] = [];

  constructor(private mappingJsonData: MappingJsonData, private constructSubmissionService: ConstructSubmissionService) { }

  ngOnInit(): void {
    this.fields = this.mappingJsonData.mappingData();
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
