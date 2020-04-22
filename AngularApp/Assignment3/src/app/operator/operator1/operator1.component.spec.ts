import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Operator1Component } from './operator1.component';

describe('Operator1Component', () => {
  let component: Operator1Component;
  let fixture: ComponentFixture<Operator1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Operator1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Operator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
