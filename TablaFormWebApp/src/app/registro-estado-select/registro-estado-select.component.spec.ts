import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstadoSelectComponent } from './registro-estado-select.component';

describe('RegistroEstadoSelectComponent', () => {
  let component: RegistroEstadoSelectComponent;
  let fixture: ComponentFixture<RegistroEstadoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEstadoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstadoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
