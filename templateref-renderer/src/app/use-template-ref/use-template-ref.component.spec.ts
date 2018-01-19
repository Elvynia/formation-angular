import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTemplateRefComponent } from './use-template-ref.component';

describe('UseTemplateRefComponent', () => {
  let component: UseTemplateRefComponent;
  let fixture: ComponentFixture<UseTemplateRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseTemplateRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
