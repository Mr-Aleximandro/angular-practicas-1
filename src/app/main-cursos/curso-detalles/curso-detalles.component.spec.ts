import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetallesComponent } from './curso-detalles.component';

describe('CursoDetallesComponent', () => {
  let component: CursoDetallesComponent;
  let fixture: ComponentFixture<CursoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
