import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso7Component } from './reserva-paso7.component';

describe('ReservaPaso7Component', () => {
  let component: ReservaPaso7Component;
  let fixture: ComponentFixture<ReservaPaso7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
