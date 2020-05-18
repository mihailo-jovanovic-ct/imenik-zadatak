import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudiJedanComponent } from './ljudi-jedan.component';

describe('LjudiJedanComponent', () => {
  let component: LjudiJedanComponent;
  let fixture: ComponentFixture<LjudiJedanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudiJedanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudiJedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
