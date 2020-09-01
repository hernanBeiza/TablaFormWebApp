import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroEstadoSelectComponent } from './registro-estado-select/registro-estado-select.component';
import { GlosaInputComponent } from './glosa-input/glosa-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroEstadoSelectComponent,
    GlosaInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    NgxDatatableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
