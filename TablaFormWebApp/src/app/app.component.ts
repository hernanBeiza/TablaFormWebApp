import {Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, Input, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, AbstractControl} from '@angular/forms';

import { RegistroItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'TablaFormWebApp';

  public registros:Array<RegistroItem> = new Array<RegistroItem>();
  public enviandoFlag:boolean = false;

  public registrosPorPagina:number = 10;
  public mostrarScrollHorizontal:boolean = false;
  public mostrarScrollVertical:boolean = false;

  public mainFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.mainFormGroup = this.formBuilder.group({});
  }

  ngOnInit() { 

    this.crearRegistros();
    this.crearFormulario();

  }

  private crearRegistros():void {
    for (var i = 0;i<100; i++) {
      let combo = 1;
      if(i%2==0){
        combo = 2;
      }
      let item:RegistroItem = {id:i, glosa:"Glosa " +i, estado:combo}
      this.registros.push(item);
    }    
  }

  private crearFormulario():void {
    this.registros.forEach(item=>{
      //Nombres de control
      let glosaInputControl = new FormControl(item.glosa);
      let registroEstadoControl = new FormControl(item.estado);
      let formRegistro = new FormGroup({glosaInputControl,registroEstadoControl});

      let idFormControl = "formControl"+item.id;
      this.mainFormGroup.addControl(idFormControl,formRegistro);
    });
  }

  public obtenerFormControlPadre(item:RegistroItem):AbstractControl {
    let idFormControl = "formControl"+item.id;
    return this.mainFormGroup.controls[idFormControl];
  }

  public onSubmit(formValues:any):void {
    //console.log(this.registros);
    //console.log(this.mainFormGroup.value)
    console.log(formValues);
    //Lógica temporal hasta que se cree una mejor forma con filas dinámicas
    for (let llave of Object.keys(formValues)){
      //console.log(llave,formValues[llave]);
    }
  }

  /* Retorna el total de paginas */
  public obtenerTotalDePaginas(): number {
    return Math.round(this.registros.length/this.registrosPorPagina);
  }

}