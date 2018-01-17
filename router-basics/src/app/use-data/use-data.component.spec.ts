import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDataComponent } from './use-data.component';

describe('UseDataComponent', () => {
  let component: UseDataComponent;
  let fixture: ComponentFixture<UseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
