import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseUrlParamComponent } from './use-url-param.component';

describe('UseUrlParamComponent', () => {
  let component: UseUrlParamComponent;
  let fixture: ComponentFixture<UseUrlParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseUrlParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseUrlParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
