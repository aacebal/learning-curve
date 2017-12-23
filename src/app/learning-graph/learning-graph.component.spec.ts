import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningGraphComponent } from './learning-graph.component';

describe('LearningGraphComponent', () => {
  let component: LearningGraphComponent;
  let fixture: ComponentFixture<LearningGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
