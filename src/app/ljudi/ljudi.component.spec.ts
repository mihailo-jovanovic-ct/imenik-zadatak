import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudiComponent } from './ljudi.component';

describe('LjudiComponent', () => {
  let component: LjudiComponent;
  let fixture: ComponentFixture<LjudiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
