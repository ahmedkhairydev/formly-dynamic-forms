import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SubmissionInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConstructSubmissionService {

  constructor() { }

  convertToSubmissionInterface(form: FormGroup, fields: any[]): SubmissionInterface[] {
    return [
      {
        "name": "classId",
        "value": [
          {
            "key": "class",
            "text": "class",
            "selectedKey": "class"
          }
        ],
        "type": "DropDown",
        "label": "Work Class"
      },
      {
        "name": "workTypeId",
        "value": [
          {
            "key": "workType",
            "text": "workType",
            "selectedKey": "workType"
          }
        ],
        "type": "DropDown",
        "label": "Work Type"
      },

      {
        "name": "department",
        "value": [
          {
            "key": "Department",
            "text": "Department",
            "selectedKey": "Department"
          }
        ],
        "type": "DropDown",
        "label": "Department"
      },
      {
        "name": "Region",
        "value": [
          {
            "key": "Region",
            "text": "Region",
            "selectedKey": "Region"
          }
        ],
        "type": "DropDown",
        "label": "Region"
      },
      {
        "name": "City",
        "value": [
          {
            "key": "City",
            "text": "City",
            "selectedKey": "City"
          }
        ],
        "type": "DropDown",
        "label": "City"
      },
      {
        "name": "Building",
        "value": [
          {
            "key": "Building",
            "text": "Building",
            "selectedKey": "Building"
          }
        ],
        "type": "DropDown",
        "label": "Building"
      },
      {
        "name": "Floor",
        "value": [
          {
            "key": "Floor",
            "text": "Floor",
            "selectedKey": "Floor"
          }
        ],
        "type": "DropDown",
        "label": "Floors"
      },

      {
        "name": "isActive",
        "value": [
          "true"
        ],
        "type": "RadioButton",
        "label": "Status"
      },
      {
        "name": "SRDInstance",
        "value": [
          "Ahmed"
        ],
        "type": "TextBox",
        "label": "SRD Instance"
      },
    ];
  }
}
