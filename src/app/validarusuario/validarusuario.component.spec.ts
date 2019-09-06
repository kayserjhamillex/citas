import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarusuarioComponent } from './validarusuario.component';

describe('ValidarusuarioComponent', () => {
  let component: ValidarusuarioComponent;
  let fixture: ComponentFixture<ValidarusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
