import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererBasicsComponent } from './renderer-basics.component';

describe('RendererBasicsComponent', () => {
  let component: RendererBasicsComponent;
  let fixture: ComponentFixture<RendererBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendererBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
