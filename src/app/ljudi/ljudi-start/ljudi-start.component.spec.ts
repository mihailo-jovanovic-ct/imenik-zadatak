import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudiStartComponent } from './ljudi-start.component';

describe('LjudiStartComponent', () => {
  let component: LjudiStartComponent;
  let fixture: ComponentFixture<LjudiStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudiStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudiStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
