import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerpageComponent } from './mangerpage.component';

describe('MangerpageComponent', () => {
  let component: MangerpageComponent;
  let fixture: ComponentFixture<MangerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
