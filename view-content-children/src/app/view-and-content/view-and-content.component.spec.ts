import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndContentComponent } from './view-and-content.component';

describe('ViewAndContentComponent', () => {
  let component: ViewAndContentComponent;
  let fixture: ComponentFixture<ViewAndContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAndContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAndContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
