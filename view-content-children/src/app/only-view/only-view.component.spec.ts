import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyViewComponent } from './only-view.component';

describe('OnlyViewComponent', () => {
  let component: OnlyViewComponent;
  let fixture: ComponentFixture<OnlyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
