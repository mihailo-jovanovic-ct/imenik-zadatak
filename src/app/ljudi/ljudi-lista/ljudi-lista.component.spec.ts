import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudiListaComponent } from './ljudi-lista.component';

describe('LjudiListaComponent', () => {
  let component: LjudiListaComponent;
  let fixture: ComponentFixture<LjudiListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudiListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
