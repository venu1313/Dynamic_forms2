import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcdectComponent } from './procdect.component';

describe('ProcdectComponent', () => {
  let component: ProcdectComponent;
  let fixture: ComponentFixture<ProcdectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcdectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
