import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChildrenComponent } from './use-children.component';

describe('UseChildrenComponent', () => {
  let component: UseChildrenComponent;
  let fixture: ComponentFixture<UseChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
