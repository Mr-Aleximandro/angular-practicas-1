import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosOfertasComponent } from './cursos-ofertas.component';

describe('CursosOfertasComponent', () => {
  let component: CursosOfertasComponent;
  let fixture: ComponentFixture<CursosOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
