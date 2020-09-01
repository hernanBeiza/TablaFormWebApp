import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosaInputComponent } from './glosa-input.component';

describe('GlosaInputComponent', () => {
  let component: GlosaInputComponent;
  let fixture: ComponentFixture<GlosaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
