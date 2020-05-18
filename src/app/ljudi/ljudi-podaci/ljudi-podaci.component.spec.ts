import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudiPodaciComponent } from './ljudi-podaci.component';

describe('LjudiPodaciComponent', () => {
  let component: LjudiPodaciComponent;
  let fixture: ComponentFixture<LjudiPodaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudiPodaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudiPodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
