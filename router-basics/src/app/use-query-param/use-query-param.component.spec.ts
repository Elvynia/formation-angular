import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseQueryParamComponent } from './use-query-param.component';

describe('UseQueryParamComponent', () => {
  let component: UseQueryParamComponent;
  let fixture: ComponentFixture<UseQueryParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseQueryParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
