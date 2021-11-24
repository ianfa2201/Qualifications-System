import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasDictadasComponent } from './materias-dictadas.component';

describe('MateriasDictadasComponent', () => {
  let component: MateriasDictadasComponent;
  let fixture: ComponentFixture<MateriasDictadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasDictadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasDictadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
