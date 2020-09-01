import { Input, Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, AbstractControl} from '@angular/forms';

import { RegistroItem } from './../interfaces';

@Component({
  selector: 'app-glosa-input',
  templateUrl: './glosa-input.component.html',
  styleUrls: ['./glosa-input.component.scss']
})
export class GlosaInputComponent implements OnInit {

	@Input() item:RegistroItem;
	@Input() formGroup:FormGroup;

	public inputFormControl:AbstractControl;

  constructor() { }

  ngOnInit() {
    this.inputFormControl = this.formGroup.get("glosaInputControl");
  }

}