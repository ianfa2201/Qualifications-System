import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalificacionesComponent } from './add-calificaciones.component';

describe('AddCalificacionesComponent', () => {
  let component: AddCalificacionesComponent;
  let fixture: ComponentFixture<AddCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
