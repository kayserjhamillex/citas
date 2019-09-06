import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidbodyComponent } from './validbody.component';

describe('ValidbodyComponent', () => {
  let component: ValidbodyComponent;
  let fixture: ComponentFixture<ValidbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
