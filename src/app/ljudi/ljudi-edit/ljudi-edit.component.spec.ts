import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudiEditComponent } from './ljudi-edit.component';

describe('LjudiEditComponent', () => {
  let component: LjudiEditComponent;
  let fixture: ComponentFixture<LjudiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
