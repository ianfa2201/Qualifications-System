import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocenteComponent } from './new-docente.component';

describe('NewDocenteComponent', () => {
  let component: NewDocenteComponent;
  let fixture: ComponentFixture<NewDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
