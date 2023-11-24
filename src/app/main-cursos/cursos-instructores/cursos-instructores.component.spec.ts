import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInstructoresComponent } from './cursos-instructores.component';

describe('CursosInstructoresComponent', () => {
  let component: CursosInstructoresComponent;
  let fixture: ComponentFixture<CursosInstructoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosInstructoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosInstructoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
