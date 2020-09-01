import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { RegistroItem } from './../interfaces';

interface ComboItem {
  id:number,
  glosa:string
}
@Component({
  selector: 'app-registro-estado-select',
  templateUrl: './registro-estado-select.component.html',
  styleUrls: ['./registro-estado-select.component.scss']
})
export class RegistroEstadoSelectComponent implements OnInit {

	@Input() item:RegistroItem;
	@Input() formGroup:FormGroup;

  public items:Array<ComboItem> = new Array<ComboItem>({id:1,glosa:"Uno"},{id:2,glosa:"Dos"},{id:3,glosa:"Tres"});
	public registroEstadoFormControl:AbstractControl;

  constructor() { }

  ngOnInit() {
    this.registroEstadoFormControl = this.formGroup.get("registroEstadoControl");
  }

}
