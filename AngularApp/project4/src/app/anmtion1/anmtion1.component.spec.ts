import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anmtion1Component } from './anmtion1.component';

describe('Anmtion1Component', () => {
  let component: Anmtion1Component;
  let fixture: ComponentFixture<Anmtion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anmtion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anmtion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
