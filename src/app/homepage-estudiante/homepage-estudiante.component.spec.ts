import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEstudianteComponent } from './homepage-estudiante.component';

describe('HomepageEstudianteComponent', () => {
  let component: HomepageEstudianteComponent;
  let fixture: ComponentFixture<HomepageEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
