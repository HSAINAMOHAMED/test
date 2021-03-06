import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListComponent } from './segments-list.component';

describe('SegmentListComponent', () => {
  let component: SegmentListComponent;
  let fixture: ComponentFixture<SegmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
