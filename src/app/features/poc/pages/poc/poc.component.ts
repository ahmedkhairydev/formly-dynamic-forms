import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@youxel/form';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  model: any;

  form!: FormGroup;

  fields: FormlyFieldConfig[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
