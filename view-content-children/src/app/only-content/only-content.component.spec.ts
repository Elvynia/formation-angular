import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyContentComponent } from './only-content.component';

describe('OnlyContentComponent', () => {
  let component: OnlyContentComponent;
  let fixture: ComponentFixture<OnlyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
