import { Injectable } from '@angular/core';
import { FormlyTemplateOptions } from '@ngx-formly/core';
import { FormControlTypes } from '../../enums';
import { BackendControl, FormlyControl } from '../../interfaces';
import { ControlCascadingService } from '../control-cascading/control-cascading.service';
import { ControlExpressionService } from '../control-expression/control-expression.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructFormlyFieldsService {

  classes = [
    {
      "key": null,
      "selectedKey": null,
      "text": "Select an Option",
      "icon": null,
      "extra": null
    },
    {
      "key": "ARCHITECTURAL",
      "selectedKey": "ARCHITECTURAL",
      "text": "ARCHITECTURAL",
      "icon": null,
      "extra": null
    },
    {
      "key": "Building indoor and outdoor",
      "selectedKey": "Building indoor and outdoor",
      "text": "Building indoor and outdoor",
      "icon": null,
      "extra": null
    },
    {
      "key": "CIVIL",
      "selectedKey": "CIVIL",
      "text": "CIVIL",
      "icon": null,
      "extra": null
    },
    {
      "key": "Doors",
      "selectedKey": "Doors",
      "text": "Doors",
      "icon": null,
      "extra": null
    },
    {
      "key": "Dot Matrix",
      "selectedKey": "Dot Matrix",
      "text": "Dot Matrix",
      "icon": null,
      "extra": null
    },
    {
      "key": "ELECTRICAL",
      "selectedKey": "ELECTRICAL",
      "text": "ELECTRICAL",
      "icon": null,
      "extra": null
    },
    {
      "key": "Fire Fighting & Suppression System",
      "selectedKey": "Fire Fighting & Suppression System",
      "text": "Fire Fighting & Suppression System",
      "icon": null,
      "extra": null
    },
    {
      "key": "First Aid Kit",
      "selectedKey": "First Aid Kit",
      "text": "First Aid Kit",
      "icon": null,
      "extra": null
    },
    {
      "key": "Flooring",
      "selectedKey": "Flooring",
      "text": "Flooring",
      "icon": null,
      "extra": null
    },
    {
      "key": "Furniture",
      "selectedKey": "Furniture",
      "text": "Furniture",
      "icon": null,
      "extra": null
    },
    {
      "key": "LOW CURRENT",
      "selectedKey": "LOW CURRENT",
      "text": "LOW CURRENT",
      "icon": null,
      "extra": null
    },
    {
      "key": "Leaflet Holder",
      "selectedKey": "Leaflet Holder",
      "text": "Leaflet Holder",
      "icon": null,
      "extra": null
    },
    {
      "key": "Lighting Maintenance",
      "selectedKey": "Lighting Maintenance",
      "text": "Lighting Maintenance",
      "icon": null,
      "extra": null
    },
    {
      "key": "MECHANICAL",
      "selectedKey": "MECHANICAL",
      "text": "MECHANICAL",
      "icon": null,
      "extra": null
    },
    {
      "key": "PLUMBING",
      "selectedKey": "PLUMBING",
      "text": "PLUMBING",
      "icon": null,
      "extra": null
    },
    {
      "key": "Painting",
      "selectedKey": "Painting",
      "text": "Painting",
      "icon": null,
      "extra": null
    },
    {
      "key": "TV and Screen Issue",
      "selectedKey": "TV and Screen Issue",
      "text": "TV and Screen Issue",
      "icon": null,
      "extra": null
    },
    {
      "key": "signage",
      "selectedKey": "signage",
      "text": "signage",
      "icon": null,
      "extra": null
    }
  ];

  departments = [
    {
      "key": null,
      "selectedKey": null,
      "text": "Select an Option",
      "icon": null,
      "extra": null
    },
    {
      "key": "Consumer Customer Care Center (SMC)",
      "selectedKey": null,
      "text": "Consumer Customer Care Center (SMC)",
      "icon": null,
      "extra": null
    },
    {
      "key": "Business Customer Care Center (BCSMC)",
      "selectedKey": null,
      "text": "Business Customer Care Center (BCSMC)",
      "icon": null,
      "extra": null
    },
    {
      "key": "Other Department",
      "selectedKey": null,
      "text": "Other Department",
      "icon": null,
      "extra": null
    }
  ];

  get jsonControls(): BackendControl[] {
    return [
      {
        options: [
          {
            key: 'FacilityServiceOffice',
            selectedKey: null,
            text: 'Office',
            icon: null,
            extra: null,
          },
        ],
        cascadingChildrenIndexes: null,
        cascadingParentIndexes: null,
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: false,
        value: [],
        id: 'Drop-1',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 2,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: true,
        dataSourceType: 'lov',
        dataSourceUrl: null,
        dataSourceId: 'lov-166',
        mappedValue: null,
        name: 'BuildingType',
        translations: null,
        label: 'Building Type',
        description: null,
        placeHolder: 'Choose Building Type',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [],
        cascadingChildrenIndexes: null,
        cascadingParentIndexes: null,
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: false,
        value: [
          {
            id: 'Maintenance',
            text: 'Maintenance',
          },
        ],
        id: 'text-1',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 3,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: true,
        isVisibleInViewMode: false,
        isRequired: false,
        isValueDynamic: false,
        dataSourceType: '',
        dataSourceUrl: null,
        dataSourceId: '',
        mappedValue: null,
        name: 'ServiceType',
        translations: null,
        label: 'Service Type',
        description: null,
        placeHolder: '',
        isVisible: false,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [
          {
            key: 'ARCHITECTURAL',
            selectedKey: 'ARCHITECTURAL',
            text: 'ARCHITECTURAL',
            icon: null,
            extra: null,
          },
          {
            key: 'Building indoor and outdoor',
            selectedKey: 'Building indoor and outdoor',
            text: 'Building indoor and outdoor',
            icon: null,
            extra: null,
          },
          {
            key: 'CIVIL',
            selectedKey: 'CIVIL',
            text: 'CIVIL',
            icon: null,
            extra: null,
          },
          {
            key: 'Doors',
            selectedKey: 'Doors',
            text: 'Doors',
            icon: null,
            extra: null,
          },
          {
            key: 'Dot Matrix',
            selectedKey: 'Dot Matrix',
            text: 'Dot Matrix',
            icon: null,
            extra: null,
          },
          {
            key: 'ELECTRICAL',
            selectedKey: 'ELECTRICAL',
            text: 'ELECTRICAL',
            icon: null,
            extra: null,
          },
          {
            key: 'Fire Fighting & Suppression System',
            selectedKey: 'Fire Fighting & Suppression System',
            text: 'Fire Fighting & Suppression System',
            icon: null,
            extra: null,
          },
          {
            key: 'First Aid Kit',
            selectedKey: 'First Aid Kit',
            text: 'First Aid Kit',
            icon: null,
            extra: null,
          },
          {
            key: 'Flooring',
            selectedKey: 'Flooring',
            text: 'Flooring',
            icon: null,
            extra: null,
          },
          {
            key: 'Furniture',
            selectedKey: 'Furniture',
            text: 'Furniture',
            icon: null,
            extra: null,
          },
          {
            key: 'LOW CURRENT',
            selectedKey: 'LOW CURRENT',
            text: 'LOW CURRENT',
            icon: null,
            extra: null,
          },
          {
            key: 'Leaflet Holder',
            selectedKey: 'Leaflet Holder',
            text: 'Leaflet Holder',
            icon: null,
            extra: null,
          },
          {
            key: 'Lighting Maintenance',
            selectedKey: 'Lighting Maintenance',
            text: 'Lighting Maintenance',
            icon: null,
            extra: null,
          },
          {
            key: 'MECHANICAL',
            selectedKey: 'MECHANICAL',
            text: 'MECHANICAL',
            icon: null,
            extra: null,
          },
          {
            key: 'PLUMBING',
            selectedKey: 'PLUMBING',
            text: 'PLUMBING',
            icon: null,
            extra: null,
          },
          {
            key: 'Painting',
            selectedKey: 'Painting',
            text: 'Painting',
            icon: null,
            extra: null,
          },
          {
            key: 'TV and Screen Issue',
            selectedKey: 'TV and Screen Issue',
            text: 'TV and Screen Issue',
            icon: null,
            extra: null,
          },
          {
            key: 'signage',
            selectedKey: 'signage',
            text: 'signage',
            icon: null,
            extra: null,
          },
        ],
        cascadingChildrenIndexes: [5],
        cascadingParentIndexes: null,
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: true,
        value: [],
        id: 'Drop-2',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 4,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: true,
        dataSourceType: 'lov',
        dataSourceUrl: null,
        dataSourceId: 'lov-167',
        mappedValue: null,
        name: 'WorkClass',
        translations: null,
        label: 'Work Class',
        description: null,
        placeHolder: 'Select Work Class',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [],
        cascadingChildrenIndexes: null,
        cascadingParentIndexes: [4],
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: true,
        value: [],
        id: 'Drop-3',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 5,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: false,
        dataSourceType: 'lov',
        dataSourceUrl:
          'Value/GetDynamicByListCode/FacilityServicesWorkType?parameters={0}',
        dataSourceId: 'lov-168',
        mappedValue: null,
        name: 'WorkType',
        translations: null,
        label: 'Work Type',
        description: null,
        placeHolder: 'Select Work Type',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [
          {
            key: 'Consumer Customer Care Center (SMC)',
            selectedKey: null,
            text: 'Consumer Customer Care Center (SMC)',
            icon: null,
            extra: null,
          },
          {
            key: 'Business Customer Care Center (BCSMC)',
            selectedKey: null,
            text: 'Business Customer Care Center (BCSMC)',
            icon: null,
            extra: null,
          },
          {
            key: 'Other Department',
            selectedKey: null,
            text: 'Other Department',
            icon: null,
            extra: null,
          },
        ],
        cascadingChildrenIndexes: [7, 8, 9, 10],
        cascadingParentIndexes: null,
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: false,
        value: [],
        id: 'Drop-4',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 6,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: true,
        dataSourceType: 'lov',
        dataSourceUrl: null,
        dataSourceId: 'lov-141',
        mappedValue: null,
        name: 'department',
        translations: null,
        label: 'Department',
        description: null,
        placeHolder: 'Choose Department',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [],
        cascadingChildrenIndexes: [8, 9, 10],
        cascadingParentIndexes: [6],
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: true,
        value: [],
        id: 'Drop-5',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 7,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: false,
        dataSourceType: 'lov',
        dataSourceUrl: 'Value/GetDynamicByListCode/Region?parameters={0}',
        dataSourceId: 'lov-142',
        mappedValue: null,
        name: 'Region',
        translations: null,
        label: 'Region',
        description: null,
        placeHolder: 'Select Region',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [],
        cascadingChildrenIndexes: [9, 10],
        cascadingParentIndexes: [6, 7],
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: true,
        value: [],
        id: 'Drop-6',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 8,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: false,
        dataSourceType: 'lov',
        dataSourceUrl: 'Value/GetDynamicByListCode/City?parameters={0},{1}',
        dataSourceId: 'lov-143',
        mappedValue: null,
        name: 'City',
        translations: null,
        label: 'City',
        description: null,
        placeHolder: 'Select City',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [],
        cascadingChildrenIndexes: [10],
        cascadingParentIndexes: [6, 7, 8],
        searchChildrenIndexes: null,
        isMultiSelect: false,
        isCancelDelegation: false,
        isExternalDataSource: true,
        value: [],
        id: 'Drop-7',
        type: 'dropdown',
        format: '',
        contentType: null,
        index: 9,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: false,
        dataSourceType: 'lov',
        dataSourceUrl:
          'Value/GetDynamicByListCode/Building?parameters={0},{1},{2}',
        dataSourceId: 'lov-144',
        mappedValue: null,
        name: 'Building',
        translations: null,
        label: 'Building',
        description: null,
        placeHolder: 'Select Building',
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select value',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        options: [
          {
            value: true,
            label: 'Active',
          },
          {
            value: false,
            label: 'isActive',
          },
        ],
        cascadingChildrenIndexes: null,
        cascadingParentIndexes: null,
        isMultiSelect: false,
        isExternalDataSource: false,
        value: [],
        id: 'Drop-1',
        type: 'radioState',
        format: '',
        contentType: null,
        index: 15,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: false,
        isVisibleInViewMode: false,
        isRequired: true,
        isValueDynamic: true,
        dataSourceType: 'lov',
        dataSourceUrl: null,
        dataSourceId: 'lov-71',
        name: 'isActive',
        translations: null,
        label: 'Status',
        description: null,
        isVisible: true,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: 'required',
            value: '',
            message: 'please select Request Type',
            translations: null,
          },
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: null,
          conditions: null,
        },
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      {
        value: ['SRGAA5V0F751SARAKDWCQZLDXFIQC6'],
        id: 'text-6',
        type: 'text',
        format: '',
        contentType: null,
        index: 16,
        formCode: null,
        valuePathEn: null,
        valuePathAr: null,
        readOnly: true,
        isVisibleInViewMode: false,
        isRequired: false,
        isValueDynamic: false,
        dataSourceType: '',
        dataSourceUrl: null,
        dataSourceId: '',
        mappedValue: null,
        name: 'SRDInstance',
        translations: null,
        label: 'SRD Instance',
        description: null,
        placeHolder: 'Enter your name.',
        isVisible: false,
        roles: [],
        icon: '',
        style: {
          border: '',
          borderType: '',
          borderColor: '',
          backgroundColor: '',
          textColor: '',
          textAlign: '',
          font: '',
          fontSize: '',
        },
        validations: [
          {
            name: "required",
            value: "",
            message: "This field is required",
            translations: null
          },
          {
            name: "min",
            value: "1",
            message: "The minimum length is 1 character",
            translations: null
          },
          {
            name: "maxlength",
            value: "4000",
            message: "The maximum length  is 4000 characters",
            translations: null
          }
        ],
        dependencies: [],
        conditionalView: {
          validConditions: 0,
          minimumAcceptableConditionsNumber: 1,
          conditions: [
            {
              parentFieldId: "",
              parentFieldIndex: 15,
              validationName: "value",
              value: "",
              validityStatus: false
            }
          ]
        },
        relationEquation: null,
        isSubmitted: true,
        savedValues: null,
        tableOperation: null,
      },
      // {
      //   "subControls": null,
      //   "controls": [
      //     {
      //       "value": [],
      //       "id": "text-1",
      //       "type": "text",
      //       "format": "",
      //       "contentType": null,
      //       "index": 1,
      //       "formCode": null,
      //       "valuePathEn": "",
      //       "valuePathAr": "",
      //       "readOnly": false,
      //       "isVisibleInViewMode": false,
      //       "isRequired": true,
      //       "isValueDynamic": true,
      //       "dataSourceType": "",
      //       "dataSourceUrl": null,
      //       "dataSourceId": "",
      //       "mappedValue": null,
      //       "name": "Description",
      //       "translations": null,
      //       "label": "Description",
      //       "description": null,
      //       "placeHolder": "Description",
      //       "isVisible": true,
      //       "roles": [],
      //       "icon": "",
      //       "style": {
      //         "border": "",
      //         "borderType": "",
      //         "borderColor": "",
      //         "backgroundColor": "",
      //         "textColor": "",
      //         "textAlign": "",
      //         "font": "",
      //         "fontSize": ""
      //       },
      //       "validations": [
      //         {
      //           "name": "required",
      //           "value": "",
      //           "message": "Description is required",
      //           "translations": null
      //         },
      //         {
      //           "name": "minlength",
      //           "value": "1",
      //           "message": "The minimum length is 5 characters",
      //           "translations": null
      //         },
      //         {
      //           "name": "maxlength",
      //           "value": "240",
      //           "message": "The maximum length is 240 characters",
      //           "translations": null
      //         }
      //       ],
      //       "dependencies": [],
      //       "conditionalView": {
      //         "validConditions": 0,
      //         "minimumAcceptableConditionsNumber": null,
      //         "conditions": null
      //       },
      //       "relationEquation": null,
      //       "isSubmitted": true,
      //       "savedValues": null,
      //       "tableOperation": null
      //     },
      //     {
      //       "value": [],
      //       "id": "text-2",
      //       "type": "text",
      //       "format": "",
      //       "contentType": null,
      //       "index": 2,
      //       "formCode": null,
      //       "valuePathEn": "",
      //       "valuePathAr": "",
      //       "readOnly": false,
      //       "isVisibleInViewMode": false,
      //       "isRequired": true,
      //       "isValueDynamic": true,
      //       "dataSourceType": "",
      //       "dataSourceUrl": null,
      //       "dataSourceId": "",
      //       "mappedValue": null,
      //       "name": "SerialNumber",
      //       "translations": null,
      //       "label": "Serial Number",
      //       "description": null,
      //       "placeHolder": "Serial Number",
      //       "isVisible": true,
      //       "roles": [],
      //       "icon": "",
      //       "style": {
      //         "border": "",
      //         "borderType": "",
      //         "borderColor": "",
      //         "backgroundColor": "",
      //         "textColor": "",
      //         "textAlign": "",
      //         "font": "",
      //         "fontSize": ""
      //       },
      //       "validations": [
      //         {
      //           "name": "required",
      //           "value": "",
      //           "message": "Serial Number is required",
      //           "translations": null
      //         },
      //         {
      //           "name": "minlength",
      //           "value": "1",
      //           "message": "The minimum length is 5 characters",
      //           "translations": null
      //         },
      //         {
      //           "name": "maxlength",
      //           "value": "240",
      //           "message": "The maximum length is 240 characters",
      //           "translations": null
      //         }
      //       ],
      //       "dependencies": [],
      //       "conditionalView": {
      //         "validConditions": 0,
      //         "minimumAcceptableConditionsNumber": null,
      //         "conditions": null
      //       },
      //       "relationEquation": null,
      //       "isSubmitted": true,
      //       "savedValues": null,
      //       "tableOperation": null
      //     },
      //     {
      //       "value": [],
      //       "id": "text-3",
      //       "type": "text",
      //       "format": "",
      //       "contentType": "number",
      //       "index": 3,
      //       "formCode": null,
      //       "valuePathEn": "",
      //       "valuePathAr": "",
      //       "readOnly": false,
      //       "isVisibleInViewMode": false,
      //       "isRequired": true,
      //       "isValueDynamic": true,
      //       "dataSourceType": "",
      //       "dataSourceUrl": null,
      //       "dataSourceId": "",
      //       "mappedValue": null,
      //       "name": "Quantity",
      //       "translations": null,
      //       "label": "Quantity",
      //       "description": null,
      //       "placeHolder": "Quantity",
      //       "isVisible": true,
      //       "roles": [],
      //       "icon": "",
      //       "style": {
      //         "border": "",
      //         "borderType": "",
      //         "borderColor": "",
      //         "backgroundColor": "",
      //         "textColor": "",
      //         "textAlign": "",
      //         "font": "",
      //         "fontSize": ""
      //       },
      //       "validations": [
      //         {
      //           "name": "required",
      //           "value": "",
      //           "message": "Quantity is required",
      //           "translations": null
      //         },
      //         {
      //           "name": "minlength",
      //           "value": "1",
      //           "message": "The minimum length is 5 characters",
      //           "translations": null
      //         },
      //         {
      //           "name": "maxlength",
      //           "value": "240",
      //           "message": "The maximum length is 240 characters",
      //           "translations": null
      //         }
      //       ],
      //       "dependencies": [],
      //       "conditionalView": {
      //         "validConditions": 0,
      //         "minimumAcceptableConditionsNumber": null,
      //         "conditions": null
      //       },
      //       "relationEquation": null,
      //       "isSubmitted": true,
      //       "savedValues": null,
      //       "tableOperation": null
      //     }
      //   ],
      //   "nestedControlValues": null,
      //   "columnOperationIds": null,
      //   "value": [],
      //   "id": "table-1",
      //   "type": "table",
      //   "format": "",
      //   "contentType": null,
      //   "index": 16,
      //   "formCode": null,
      //   "valuePathEn": null,
      //   "valuePathAr": null,
      //   "readOnly": false,
      //   "isVisibleInViewMode": false,
      //   "isRequired": true,
      //   "isValueDynamic": false,
      //   "dataSourceType": "",
      //   "dataSourceUrl": null,
      //   "dataSourceId": "",
      //   "mappedValue": null,
      //   "name": "MaterialGatePass_MaterialInformation",
      //   "translations": null,
      //   "label": "Fill List Of Material Information",
      //   "description": null,
      //   "placeHolder": null,
      //   "isVisible": true,
      //   "roles": [],
      //   "icon": "",
      //   "style": {
      //     "border": "",
      //     "borderType": "",
      //     "borderColor": "",
      //     "backgroundColor": "",
      //     "textColor": "",
      //     "textAlign": "",
      //     "font": "",
      //     "fontSize": ""
      //   },
      //   "validations": [
      //     {
      //       "name": "required",
      //       "value": "",
      //       "message": "Employee Name is required",
      //       "translations": null
      //     },
      //     {
      //       "name": "minRows",
      //       "value": "1",
      //       "message": "The minimum number of rows  is 1 row",
      //       "translations": null
      //     },
      //     {
      //       "name": "maxRows",
      //       "value": "20",
      //       "message": "The maximum number of rows  is 20 row",
      //       "translations": null
      //     }
      //   ],
      //   "dependencies": [],
      //   "conditionalView": {
      //     "validConditions": 0,
      //     "minimumAcceptableConditionsNumber": null,
      //     "conditions": null
      //   },
      //   "relationEquation": null,
      //   "isSubmitted": true,
      //   "savedValues": null,
      //   "tableOperation": null
      // }
    ];
  }

  constructor(private controlExpressionService: ControlExpressionService, private controlCascadingService: ControlCascadingService) { }

  mappingData() {
    return [
      {
        key: 'classId',
        type: 'dropdown',
        templateOptions: {
          options: this.classes,
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 1,
          name: 'classId',
          cascadingParentIndexes: null,
          cascadingChildrenIndexes: [2],
        },
        hooks: {
          onInit: (parentField: any) => {
            this.controlCascadingService.onInitHook(parentField);
          },
        },
      },
      {
        key: 'workTypeId',
        type: 'dropdown',
        templateOptions: {
          options: [],
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 2,
          name: 'workTypeId',
          cascadingParentIndexes: [1],
          cascadingChildrenIndexes: null,
          dataSourceUrl: 'Value/GetDynamicByListCode/FacilityServicesWorkType?parameters={0}',
        },
        hideExpression: (model: any, formState: any, field: any) => this.controlCascadingService.cascading(field),
        expressionProperties: {
          'templateOptions.disabled': (model: any, formState: any, field: any) => this.controlExpressionService.disabledExpression(field),
        }
      },

      {
        key: 'department',
        type: 'dropdown',
        templateOptions: {
          options: this.departments,
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 3,
          name: 'department',
          cascadingParentIndexes: null,
          cascadingChildrenIndexes: [4, 5, 6, 7],
        },
        hooks: {
          onInit: (parentField: any) => {
            this.controlCascadingService.onInitHook(parentField);
          },
        },
      },
      {
        key: 'region',
        type: 'dropdown',
        templateOptions: {
          options: [],
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 4,
          name: 'region',
          cascadingParentIndexes: [3],
          cascadingChildrenIndexes: [5, 6, 7],
          dataSourceUrl: 'Value/GetDynamicByListCode/Region?parameters={0}',
        },
        hideExpression: (model: any, formState: any, field: any) => this.controlCascadingService.cascading(field),
      },
      {
        key: 'city',
        type: 'dropdown',
        templateOptions: {
          options: [],
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 5,
          name: 'city',
          cascadingParentIndexes: [3, 4],
          cascadingChildrenIndexes: [6, 7],
          dataSourceUrl: 'Value/GetDynamicByListCode/City?parameters={0},{1}',
        },
        hideExpression: (model: any, formState: any, field: any) => this.controlCascadingService.cascading(field),
      },
      {
        key: 'building',
        type: 'dropdown',
        templateOptions: {
          options: [],
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 6,
          name: 'building',
          cascadingParentIndexes: [3, 4, 5],
          cascadingChildrenIndexes: [7],
          dataSourceUrl:
            'Value/GetDynamicByListCode/Building?parameters={0},{1},{2}',
        },
        hideExpression: (model: any, formState: any, field: any) => this.controlCascadingService.cascading(field),
      },
      {
        key: 'floor',
        type: 'dropdown',
        templateOptions: {
          options: [],
          optionLabelPropertyName: 'text',
          imagePropertyName: 'image',
          optionLayout: 'label',
          selectedOptionLayout: 'label',
          bindValue: 'key',
          defaultValue: '',
          index: 7,
          name: 'floor',
          cascadingParentIndexes: [3, 4, 5, 6],
          cascadingChildrenIndexes: null,
          dataSourceUrl:
            'Value/GetDynamicByListCode/MobilyFloors?parameters={0},{1},{2},{3}',
        },
        hideExpression: (model: any, formState: any, field: any) => this.controlCascadingService.cascading(field),
      },

      {
        key: 'isActive',
        type: 'radioState',
        templateOptions: {
          label: 'Status',
          name: 'isActive',
          options: [
            {
              value: true,
              label: 'Active',
            },
            {
              value: false,
              label: 'isActive',
            },
          ],
          index: 8,
        },
      },
      {
        key: 'SRDInstance',
        type: 'text',
        templateOptions: {
          label: 'SRD Instance',
          required: true,
          fieldInlineStyle: {
            gap: '6px',
            inputErrorStyle: {
              border: '1px solid var(--crimson)',
            },
          },
          index: 9,
          conditionalView: {
            validConditions: 0,
            minimumAcceptableConditionsNumber: 1,
            conditions: [
              {
                parentFieldId: "",
                parentFieldIndex: 8,
                validationName: "value",
                value: "",
                validityStatus: false
              }
            ]
          }
        },
        hideExpression: (model: any, formState: any, field: any) => this.controlExpressionService.hideExpression(field),
        expressionProperties: {
          'templateOptions.disabled': (model: any, formState: any, field: any) => this.controlExpressionService.disabledExpression(field),
        }
      },
    ];
  }

  constructFormlyFields(controls: BackendControl[]) {
    let generatedControls: FormlyControl[] = [];

    controls.forEach(control => {
      let generatedControl: FormlyControl = {
        ...this.handleDefualtProperties(control),
        ...this.handleHideExpression(control),

        templateOptions: {
          ...this.handleDefualtTemplateOptionsProperties(control),
          ...this.handleStyleProperties(control),
          ...this.handleConditionalViewProperties(control),
          ...this.handleCascadingProperties(control),
          ...this.handleValidationsProperties(control),
          ...this.handleCustomProperties(control),
        },
        validation: this.handleValidationMessages(control),
        validators: this.handleValidators(control),
      };

      generatedControls.push(generatedControl);
    });

    return generatedControls;
  }

  private handleDefualtProperties(control: BackendControl) {
    const defaultProperties = {
      key: control.name,
      type: control.type,
      className: control.className || ''
    };

    return defaultProperties;
  }

  private handleHideExpression(control: BackendControl) {
    if (control.conditionalView?.conditions?.length) {
      return { hideExpression: (model: any, formState: any, field: any) => this.controlExpressionService.hideExpression(field) };
    }

    if (control.cascadingParentIndexes?.length) {
      return { hideExpression: (model: any, formState: any, field: any) => this.controlCascadingService.cascading(field) };
    }

    if (control.cascadingChildrenIndexes?.length && !control.cascadingParentIndexes?.length) {
      return { hooks: { onInit: (parentField: any) => this.controlCascadingService.onInitHook(parentField) } };
    }

    return {};
  }

  // -----------------------------------------------------------

  private handleDefualtTemplateOptionsProperties(control: BackendControl) {
    const defaultProperties = {
      index: control.index,
      name: control.name,
      label: control.label,
      options: control.options || [],
      placeholder: control.placeHolder,

      isSubmitted: control.isSubmitted,
      isValueDynamic: control.isValueDynamic,
      isVisible: control.isVisible,
      isVisibleInViewMode: control.isVisibleInViewMode
    };

    return defaultProperties;
  }

  private handleStyleProperties(control: BackendControl) {
    let style: any = { fieldInlineStyle: {} };

    // Your Logic Here...
    style.fieldInlineStyle = control.style;

    return style;
  }

  private handleCascadingProperties(control: BackendControl) {
    return {
      cascadingChildrenIndexes: control.cascadingChildrenIndexes || null,
      cascadingParentIndexes: control.cascadingParentIndexes || null,
    };
  }

  private handleConditionalViewProperties(control: BackendControl) {
    let conditionalView = { conditionalView: control.conditionalView };

    return conditionalView;
  }

  private handleValidationsProperties(control: BackendControl) {
    let validations: Pick<FormlyTemplateOptions, 'required' | 'readOnly' | 'max' | 'min' | 'minLength' | 'maxLength' | 'pattern'> = {
      readOnly: control.readOnly,
      required: control.isRequired,
    };

    control.validations?.filter(each => each.name !== 'required').forEach(each => {
      validations = { ...validations, [this.convertTheValidationNametoCamelCase(each.name)]: each.name === 'pattern' ? each.value : +each.value };
    });

    return validations;
  }

  private handleCustomProperties(control: BackendControl) {
    if (control.type === FormControlTypes.DropDown) return this.handleDropdownProperties(control);
    if (control.type === FormControlTypes.Table) return this.handleTableProperties(control);

    return {};
  }

  private handleDropdownProperties(control: BackendControl) {
    return {
      // bindValue: 'key',
      optionLabelPropertyName: 'text',
      imagePropertyName: 'icon',
      optionLayout: 'label',
      selectedOptionLayout: 'label',
      defaultValue: null,
      isMultiSelect: control.isMultiSelect,
      isCancelDelegation: control.isCancelDelegation,
      isExternalDataSource: control.isExternalDataSource,
      dataSourceId: control.dataSourceId,
      dataSourceType: control.dataSourceType,
      dataSourceUrl: control.dataSourceUrl,
    };
  }

  private handleTableProperties(control: BackendControl) {
    return {
      controls: this.constructFormlyFields(control.controls as BackendControl[])
    };
  }

  // -----------------------------------------------------------

  private handleValidationMessages(control: BackendControl) {
    let validation: { message: { [key: string]: string; }; } = { message: {} };
    control.validations?.forEach(each => validation.message = { ...validation.message, [this.convertTheValidationNametoCamelCase(each.name)]: each.message });

    return validation;
  }

  private handleValidators(control: BackendControl) {
    return control.cutomValidators || null;
  }

  // -----------------------------------------------------------
  // convertTheValidationNametoCamelCase
  private convertTheValidationNametoCamelCase(validationName: string) {
    if (validationName.includes('min') || validationName.includes('max')) {
      const name = validationName.split('length');

      if (name.length === 1) return validationName;
      return `${name[0]}Length`;
    }

    return validationName;
  }
}
