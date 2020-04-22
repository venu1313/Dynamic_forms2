import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkfloweComponent } from './workflowe.component';

describe('WorkfloweComponent', () => {
  let component: WorkfloweComponent;
  let fixture: ComponentFixture<WorkfloweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkfloweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkfloweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
