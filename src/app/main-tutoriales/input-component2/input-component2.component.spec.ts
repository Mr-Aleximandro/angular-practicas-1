import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent2Component } from './input-component2.component';

describe('InputComponent2Component', () => {
  let component: InputComponent2Component;
  let fixture: ComponentFixture<InputComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
