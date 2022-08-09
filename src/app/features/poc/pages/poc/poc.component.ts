import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@youxel/form';

import { ConstructSubmissionService } from 'src/app/shared/services/construct-submission/construct-submission.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  model: any;

  form!: FormGroup;

  fields: FormlyFieldConfig[] = []

  constructor(private constructSubmissionService: ConstructSubmissionService) { }

  ngOnInit(): void {
  }

  submit() {
    const submissionForm = this.constructSubmissionService.convertToSubmissionInterface(this.form, this.fields);
    console.log(submissionForm);
  }
}
